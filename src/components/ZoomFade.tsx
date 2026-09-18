import React, { ReactNode } from 'react';
import { motion, type TargetAndTransition, type Variant } from 'motion/react';

export type FadeType =
  | 'zoom-fade-up'
  | 'zoom-fade-down'
  | 'zoom-fade-left'
  | 'zoom-fade-right'
  | 'zoom-fade-in'
  | 'zoom-fade-out'
  | 'zoom-fade-blur'
  | 'zoom-fade-diagonal-left'
  | 'zoom-fade-diagonal-right'
  | 'zoom-fade-spring';

interface ZoomFadeProps {
  children: ReactNode;
  fadeType?: FadeType;
  delay?: number;
  duration?: number;
  className?: string;
  immediate?: boolean;
  viewportAmount?: number | 'some' | 'all';
}

/**
 * Returns initial and animate styles for a given zoom-fade variant
 */
export function getZoomFadeVariants(fadeType: FadeType = 'zoom-fade-up'): {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
} {
  switch (fadeType) {
    case 'zoom-fade-up':
      return {
        initial: { opacity: 0, scale: 0.88, y: 32 },
        animate: { opacity: 1, scale: 1, y: 0 },
      };
    case 'zoom-fade-down':
      return {
        initial: { opacity: 0, scale: 0.88, y: -28 },
        animate: { opacity: 1, scale: 1, y: 0 },
      };
    case 'zoom-fade-left':
      return {
        initial: { opacity: 0, scale: 0.9, x: -36 },
        animate: { opacity: 1, scale: 1, x: 0 },
      };
    case 'zoom-fade-right':
      return {
        initial: { opacity: 0, scale: 0.9, x: 36 },
        animate: { opacity: 1, scale: 1, x: 0 },
      };
    case 'zoom-fade-in':
      // Focal punch-in zoom
      return {
        initial: { opacity: 0, scale: 0.76, filter: 'blur(6px)' },
        animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
      };
    case 'zoom-fade-out':
      // Expansive zoom settling in
      return {
        initial: { opacity: 0, scale: 1.15, filter: 'blur(4px)' },
        animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
      };
    case 'zoom-fade-blur':
      // Optical high-definition focus
      return {
        initial: { opacity: 0, scale: 0.93, filter: 'blur(10px)' },
        animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
      };
    case 'zoom-fade-diagonal-left':
      return {
        initial: { opacity: 0, scale: 0.88, x: -26, y: 26 },
        animate: { opacity: 1, scale: 1, x: 0, y: 0 },
      };
    case 'zoom-fade-diagonal-right':
      return {
        initial: { opacity: 0, scale: 0.88, x: 26, y: 26 },
        animate: { opacity: 1, scale: 1, x: 0, y: 0 },
      };
    case 'zoom-fade-spring':
      return {
        initial: { opacity: 0, scale: 0.82, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
      };
    default:
      return {
        initial: { opacity: 0, scale: 0.9, y: 24 },
        animate: { opacity: 1, scale: 1, y: 0 },
      };
  }
}

/**
 * ZoomFade
 * Wraps text and content sub-sections with dynamic zoom + fade-in animations on scroll.
 */
export const ZoomFade: React.FC<ZoomFadeProps> = ({
  children,
  fadeType = 'zoom-fade-up',
  delay = 0,
  duration = 0.75,
  className = '',
  immediate = false,
  viewportAmount = 0.12,
}) => {
  const { initial, animate } = getZoomFadeVariants(fadeType);

  if (immediate) {
    return (
      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{
        once: true,
        amount: viewportAmount,
        margin: '0px 0px -40px 0px',
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
