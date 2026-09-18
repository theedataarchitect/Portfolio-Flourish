import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { FadeType, getZoomFadeVariants } from './ZoomFade';

interface FocusSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  immediate?: boolean;
  fadeType?: FadeType;
}

/**
 * FocusSection
 * Reworked section wrapper with distinctive zoom and fade-in animations on scroll.
 * Each section can use a different fade type for high-variety visual transitions.
 */
export const FocusSection: React.FC<FocusSectionProps> = ({
  children,
  id,
  className = '',
  delay = 0,
  immediate = false,
  fadeType = 'zoom-fade-up',
}) => {
  const { initial, animate } = getZoomFadeVariants(fadeType);

  if (immediate) {
    return (
      <motion.section
        id={id}
        initial={initial}
        animate={animate}
        transition={{
          duration: 0.8,
          delay: 0.05,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`transition-colors ${className}`}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={initial}
      whileInView={animate}
      viewport={{
        once: true,
        amount: 0.08,
        margin: '0px 0px -60px 0px',
      }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`transition-colors will-change-[transform,opacity,filter] ${className}`}
    >
      {children}
    </motion.section>
  );
};
