import React, { useEffect, useRef } from 'react';
import { ThemeMode } from '../types';

interface AmbientBackgroundProps {
  theme: ThemeMode;
}

const VERTEX_SHADER_SOURCE = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const FRAGMENT_SHADER_SOURCE = `#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
varying vec2 v_texCoord;

// Pseudo-random hash utilities
float hash12(vec2 p) {
    vec3 p3  = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}

float hash11(float p) {
    p = fract(p * 0.1031);
    p *= p + 33.33;
    p *= p + p;
    return fract(p);
}

// 2D Line segment distance returning vec2(distance, projection t in [0,1])
vec2 distSegment(vec2 p, vec2 a, vec2 b) {
    vec2 pa = p - a;
    vec2 ba = b - a;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return vec2(length(pa - ba * h), h);
}

void main() {
    // Screen coords normalized: uv.x in [0, aspect], uv.y in [0, 1] (0 = seabed bottom, 1 = surface top)
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float aspect = u_resolution.x / u_resolution.y;
    vec2 p = vec2(uv.x * aspect, uv.y);
    vec2 mouseNorm = u_mouse / u_resolution.xy;

    // --- 1. WATER COLUMN GRADIENT (SURFACE LIGHT AT TOP -> DEEP ABYSS AT BOTTOM) ---
    vec3 surfaceWater = vec3(0.045, 0.17, 0.29);     // Oceanic teal-blue near surface
    vec3 deepWater    = vec3(0.010, 0.040, 0.072);  // Mid-depth ocean water
    vec3 abyssalWater = vec3(0.003, 0.012, 0.024);  // Ocean abyss water tone

    // Base vertical water gradient
    vec3 col = mix(abyssalWater, deepWater, smoothstep(0.0, 0.65, uv.y));
    col = mix(col, surfaceWater, smoothstep(0.5, 1.05, uv.y));

    // --- 2. SURFACE SPOTLIGHT FROM ABOVE ---
    vec2 lightOrigin = vec2(0.52 * aspect + (mouseNorm.x - 0.5) * 0.18, 1.30);
    vec2 toLight = lightOrigin - p;
    float distFromLightSource = length(toLight);

    // Conical downward beam spread
    float beamCone = smoothstep(1.05, 0.22, abs(toLight.x) / (toLight.y + 0.15));
    float beamReach = exp(-distFromLightSource * 0.88);
    float beamIntensity = beamCone * beamReach;

    // Volumetric ocean caustics descending from surface
    float shaft1 = sin(p.x * 4.2 - (1.0 - p.y) * 2.8 + u_time * 0.45) * 0.5 + 0.5;
    float shaft2 = sin(p.x * 8.5 + (1.0 - p.y) * 4.0 - u_time * 0.3) * 0.5 + 0.5;
    float shafts = shaft1 * shaft2 * smoothstep(0.02, 0.95, uv.y);
    
    vec3 spotlightColor = vec3(0.09, 0.36, 0.58);
    col += spotlightColor * (beamIntensity * 1.15 + shafts * 0.24 * beamCone);

    // Surface glow crest at the very top
    float surfaceRim = smoothstep(0.70, 1.0, uv.y);
    col += vec3(0.05, 0.18, 0.32) * surfaceRim * 0.5;

    // --- 3. PROMINENT, VISIBLE SEA BED FLOOR (GROUND TERRAIN) ---
    float seabedHorizon = 0.54;
    if (uv.y < seabedHorizon) {
        // Floor perspective depth: 1.0 at immediate foreground bottom, 0.0 at distant horizon
        float floorDepth = (seabedHorizon - uv.y) / seabedHorizon;

        // Perspective-projected terrain coordinates
        float pz = 1.0 / (floorDepth * 2.8 + 0.35);
        vec2 groundCoords = vec2(p.x * pz * 0.85, floorDepth * 12.0);

        // Multi-frequency sand ripples and dunes
        float duneWave1 = sin(groundCoords.y * 3.5 + sin(groundCoords.x * 2.2)) * 0.5 + 0.5;
        float duneWave2 = sin(groundCoords.y * 7.0 - groundCoords.x * 3.0 + sin(groundCoords.y * 2.0)) * 0.5 + 0.5;
        float microSand = hash12(floor(p * vec2(95.0, 55.0)));
        
        // Relief shading: ripples catch light from above
        float rippleSlope = sin(groundCoords.y * 3.5 + 0.8) * 0.35 + sin(groundCoords.y * 7.0) * 0.2;
        float sandRelief = clamp(0.5 + rippleSlope * 0.5, 0.15, 1.0);

        // Sedimentary benthic sea floor palette
        vec3 bedDeepShadow = vec3(0.006, 0.020, 0.030); // Deep crevices in the sand
        vec3 bedMidSand    = vec3(0.018, 0.052, 0.074); // Ambient ocean floor
        vec3 bedLitSand    = vec3(0.038, 0.095, 0.135); // Sand dunes catching downward spotlight

        vec3 groundColor = mix(bedDeepShadow, bedMidSand, sandRelief);
        groundColor = mix(groundColor, bedLitSand, (beamIntensity * 1.25 + 0.18) * sandRelief);
        
        // Granular sediment and organic micro-texture
        groundColor += vec3(0.010, 0.026, 0.036) * microSand * floorDepth;
        groundColor += (duneWave1 * 0.015 + duneWave2 * 0.010) * vec3(0.02, 0.05, 0.07);

        // Caustic ripple highlights projected onto the sand bed
        float groundCaustics = sin(p.x * 12.0 + p.y * 8.0 + u_time * 0.5) * sin(p.x * 7.0 - p.y * 14.0 - u_time * 0.3);
        groundColor += vec3(0.015, 0.045, 0.07) * max(0.0, groundCaustics) * beamIntensity * floorDepth;

        // Sea bed horizon fade into the misty deep ocean water column
        float bedVisibility = smoothstep(0.0, 0.32, floorDepth);
        col = mix(col, groundColor, bedVisibility * 0.95);
    }

    // --- 4. FIVE SUBSEA CONDUITS (SPACED OUT ACROSS THE SEA BED) ---
    // Total 5 pipes: i = 0, 1, 2, 3, 4
    for (int i = 0; i < 5; i++) {
        float fi = float(i);

        float startX = -0.38 * aspect + fi * 0.035 * aspect;
        float startY = -0.02 + fi * 0.092; 
        float endX   = 1.35 * aspect + fi * 0.025 * aspect;
        float endY   = 0.30 + fi * 0.038;

        vec2 startP = vec2(startX, startY);
        vec2 endP   = vec2(endX, endY);

        vec2 seg = distSegment(p, startP, endP);
        float dLine = seg.x;
        float t = seg.y; // 0 = off-screen left, 1 = off-screen right

        // Perspective thickness:
        float pipeRadius = mix(0.036 - fi * 0.0042, 0.013 - fi * 0.0014, pow(t, 0.85));

        // 1. Contact shadow cast DOWNWARDS onto the sand bed directly underneath
        vec2 shadowOffset = vec2(0.0, -pipeRadius * 0.65);
        vec2 shadowSeg = distSegment(p - shadowOffset, startP, endP);
        if (shadowSeg.x < pipeRadius * 2.2 && uv.y < seabedHorizon) {
            float shadowIntensity = smoothstep(pipeRadius * 2.2, pipeRadius * 0.75, shadowSeg.x);
            col *= mix(1.0, 0.28, shadowIntensity * (1.0 - t * 0.45));
        }

        // Bed sand sediment buildup against the pipe base (sedimentary berm)
        vec2 bermOffset = vec2(0.0, -pipeRadius * 0.9);
        vec2 bermSeg = distSegment(p - bermOffset, startP, endP);
        if (bermSeg.x < pipeRadius * 1.5 && uv.y < seabedHorizon) {
            float berm = smoothstep(pipeRadius * 1.5, pipeRadius * 0.8, bermSeg.x);
            col += vec3(0.012, 0.032, 0.046) * berm * (1.0 - t * 0.5) * 0.7;
        }

        // 2. 3D Cylindrical Pipe Shading illuminated from ABOVE
        if (dLine < pipeRadius * 1.25) {
            float normD = dLine / pipeRadius;
            float pipeMask = smoothstep(1.0, 0.90, normD);

            float pipeCenterY = mix(startP.y, endP.y, t);
            float ny = (p.y - pipeCenterY) / pipeRadius; // +1 = top ridge facing surface, -1 = bottom resting on seabed

            // Top sunlight from overhead surface spotlight
            float topSunlight = clamp(ny * 0.65 + 0.35, 0.0, 1.0);

            // Specular sheen along top crest of cylinder
            float topHighlight = smoothstep(0.35, 0.82, ny) * smoothstep(1.0, 0.70, ny);

            // Subsea conduit materials: deep dark marine blue-slate composite pipe
            vec3 pipeShadow = vec3(0.006, 0.018, 0.028); // Bottom resting in seabed contact shadow
            vec3 pipeBody   = vec3(0.032, 0.088, 0.145); // Body tone
            vec3 pipeCrest  = vec3(0.12, 0.35, 0.55);   // Top ridge catching surface blue light

            vec3 pipeColor = mix(pipeShadow, pipeBody, topSunlight);
            pipeColor += pipeCrest * topHighlight * (0.90 + beamIntensity * 0.65) * (1.0 - t * 0.35);

            // Longitudinal ribbed composite protective spiral texture & industrial seams
            float ribs = sin(normD * 10.0 + t * 45.0) * 0.07;
            pipeColor += pipeBody * ribs;

            // Outer conduit edge dark rim for crisp physical definition against water and sand
            float edgeOcclusion = smoothstep(0.70, 1.0, normD);
            pipeColor *= (1.0 - edgeOcclusion * 0.45);

            // Deep ocean distance fogging
            float waterFog = mix(0.08, 0.62, t);
            pipeColor = mix(pipeColor, deepWater * 1.1, waterFog);

            col = mix(col, pipeColor, pipeMask);
        }

        // --- 5. HIGH-SPEED TELEMETRY: VARIABLE BETWEEN 2 AND 3 CONCURRENT PACKETS ---
        float epochPeriod = 3.6;
        float epoch = floor(u_time / epochPeriod);
        float epochT = mod(u_time, epochPeriod);

        float epochHash = hash11(epoch * 27.13 + 5.81);
        int activeCount = (epochHash > 0.45) ? 3 : 2; // Dynamically fluctuates between 2 and 3 packets!

        int mode = int(mod(epoch, 5.0));
        bool isPipeActive = false;

        if (activeCount == 3) {
            if (mode == 0 && (i == 0 || i == 2 || i == 4)) isPipeActive = true;
            else if (mode == 1 && (i == 1 || i == 3 || i == 0)) isPipeActive = true;
            else if (mode == 2 && (i == 2 || i == 4 || i == 1)) isPipeActive = true;
            else if (mode == 3 && (i == 0 || i == 3 || i == 4)) isPipeActive = true;
            else if (mode == 4 && (i == 1 || i == 2 || i == 3)) isPipeActive = true;
        } else {
            if (mode == 0 && (i == 0 || i == 3)) isPipeActive = true;
            else if (mode == 1 && (i == 1 || i == 4)) isPipeActive = true;
            else if (mode == 2 && (i == 2 || i == 0)) isPipeActive = true;
            else if (mode == 3 && (i == 3 || i == 1)) isPipeActive = true;
            else if (mode == 4 && (i == 4 || i == 2)) isPipeActive = true;
        }

        if (isPipeActive) {
            float pipeOffsetHash = hash11(fi * 9.2 + epoch * 3.7);
            float stagger = 0.08 + pipeOffsetHash * 0.28;
            
            float transitDuration = 0.60 + hash11(fi * 4.7 + epoch * 1.3) * 0.08;
            
            float timeInTransit = epochT - stagger;

            if (timeInTransit >= 0.0 && timeInTransit <= transitDuration) {
                float phase = timeInTransit / transitDuration;

                vec2 packetPos = mix(startP, endP, phase);
                float distToPacket = length(p - packetPos);

                float currentRadius = mix(pipeRadius, 0.011, phase);

                vec3 yellowCore = vec3(1.0, 0.98, 0.78);
                vec3 yellowHalo = vec3(0.96, 0.78, 0.12);

                // 1. High-speed photon core inside pipe
                float coreHead = smoothstep(currentRadius * 0.85, 0.0, distToPacket);
                col += yellowCore * coreHead * 1.15;

                // 2. High-speed trailing photonic wake along conduit
                float dAlong = seg.y - phase;
                if (dAlong < 0.0 && dAlong > -0.16 && dLine < currentRadius * 0.95) {
                    float trailFade = (1.0 + dAlong / 0.16) * smoothstep(currentRadius * 0.95, 0.0, dLine);
                    col += yellowHalo * trailFade * 0.75;
                }

                // 3. Crisp, tight localized glow without glare
                float tightGlow = exp(-distToPacket * 30.0) * (1.0 - phase * 0.30);
                col += yellowHalo * tightGlow * 0.55;
            }
        }

        // Discrete fiber indicator LEDs along pipe casing
        float ledT = fract(t * 26.0);
        if (ledT < 0.06 && dLine < pipeRadius * 0.75) {
            float ledPulse = 0.3 + 0.7 * sin(u_time * 2.2 + t * 45.0 + fi);
            col += vec3(0.95, 0.85, 0.3) * ledPulse * 0.20 * (1.0 - t * 0.55);
        }
    }

    // --- 6. INTERACTIVE ROV BEACON / CURSOR PROXIMITY ---
    vec2 mouseP = vec2(mouseNorm.x * aspect, mouseNorm.y);
    float mouseD = length(p - mouseP);
    float rovGlow = exp(-mouseD * 4.0) * 0.20;
    col += vec3(0.08, 0.32, 0.60) * rovGlow;

    // Atmospheric marine snow / suspended ocean particulates
    float snow = hash12(floor(p * 60.0 + vec2(u_time * 0.012, -u_time * 0.025)));
    if (snow > 0.988) {
        float snowTwinkle = 0.35 + 0.65 * sin(u_time * 2.0 + snow * 70.0);
        col += vec3(0.20, 0.48, 0.72) * snowTwinkle * 0.25 * (beamIntensity + 0.15);
    }

    // Natural ocean vignette
    float vig = smoothstep(1.55, 0.45, length(uv - vec2(0.5, 0.6)));
    col *= (0.35 + 0.65 * vig);

    gl_FragColor = vec4(col, 1.0);
}`;

/**
 * Subsea Telemetry WebGL Background
 * Renders an oceanic seabed with 5 subsea fiber optic conduits,
 * rapid golden photon packets traveling across the seafloor,
 * surface light rays, and interactive ROV cursor beacon tracking.
 */
export const AmbientBackground: React.FC<AmbientBackgroundProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDark = theme === 'dark-obsidian';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext('webgl', {
        alpha: true,
        antialias: false,
        powerPreference: 'high-performance',
      }) ||
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);

    if (!gl) {
      console.warn('WebGL is not supported in this environment.');
      return;
    }

    // Helper: compile shader
    function compileShader(type: number, src: string): WebGLShader | null {
      if (!gl) return null;
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation failed:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE);
    const fs = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program linking failed:', gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return;
    }

    gl.useProgram(program);

    // Fullscreen quad buffer
    const quadBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPosition = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');

    // Resize sync
    const syncSize = () => {
      if (!canvas) return;
      // Cap at 1.5x DPR for silky 60fps performance across 4K displays
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.floor((canvas.clientWidth || window.innerWidth) * dpr);
      const h = Math.floor((canvas.clientHeight || window.innerHeight) * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => syncSize());
      resizeObserver.observe(canvas);
    }
    syncSize();

    // Mouse tracking with smooth organic interpolation (ROV spotlight beacon)
    const mouseTarget = {
      x: canvas.width * 0.5,
      y: canvas.height * 0.45,
    };
    const mouseCurrent = {
      x: canvas.width * 0.5,
      y: canvas.height * 0.45,
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        // Invert Y to match OpenGL coordinates (bottom = 0, top = height)
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouseTarget.x = nx * canvas.width;
        mouseTarget.y = ny * canvas.height;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animId: number;
    let startTime = performance.now();

    const render = () => {
      const now = performance.now();
      const elapsed = (now - startTime) * 0.001;

      // Smooth mouse lerp
      mouseCurrent.x += (mouseTarget.x - mouseCurrent.x) * 0.08;
      mouseCurrent.y += (mouseTarget.y - mouseCurrent.y) * 0.08;

      gl.viewport(0, 0, canvas.width, canvas.height);

      if (uTime) gl.uniform1f(uTime, elapsed);
      if (uResolution) gl.uniform2f(uResolution, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouseCurrent.x, mouseCurrent.y);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (resizeObserver) resizeObserver.disconnect();

      if (gl) {
        if (quadBuffer) gl.deleteBuffer(quadBuffer);
        if (program) gl.deleteProgram(program);
        if (vs) gl.deleteShader(vs);
        if (fs) gl.deleteShader(fs);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    >
      {/* WebGL Subsea Telemetry Canvas - Boosted clarity and motion visibility */}
      <canvas
        ref={canvasRef}
        id="shader-canvas-ANIMATION_31"
        className="fixed inset-0 w-full h-full block opacity-95 dark:opacity-100 transition-opacity duration-500"
      />

      {/* Atmospheric cream-grey tint overlay with dynamic opacity between light and dark modes */}
      <div
        className="absolute inset-0 pointer-events-none bg-[#ebe8e2]/15 dark:bg-slate-950/45 transition-all duration-500"
      />
    </div>
  );
};
