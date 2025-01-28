import { Variants } from 'framer-motion';

export const useAnimationConfig = () => {
  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const slideInFromLeft: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const slideInFromRight: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  const scale: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const defaultTransition = {
    duration: 0.3,
    ease: 'easeOut',
  };

  const springTransition = {
    type: 'spring',
    stiffness: 400,
    damping: 30,
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return {
    variants: {
      fadeIn,
      slideUp,
      slideInFromLeft,
      slideInFromRight,
      scale,
      staggerChildren,
    },
    transitions: {
      default: defaultTransition,
      spring: springTransition,
    },
  };
}; 