import { motion, AnimatePresence } from 'framer-motion';
import { useAnimationConfig } from '@/hooks/useAnimationConfig';

interface TransitionProps {
  children: React.ReactNode;
  className?: string;
  show?: boolean;
  type?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale';
  duration?: number;
  delay?: number;
  useSpring?: boolean;
}

export function Transition({
  children,
  className,
  show = true,
  type = 'fade',
  duration,
  delay = 0,
  useSpring = false,
}: TransitionProps) {
  const { variants, transitions } = useAnimationConfig();

  const getVariant = () => {
    switch (type) {
      case 'slide-up':
        return variants.slideUp;
      case 'slide-left':
        return variants.slideInFromLeft;
      case 'slide-right':
        return variants.slideInFromRight;
      case 'scale':
        return variants.scale;
      default:
        return variants.fadeIn;
    }
  };

  const transition = useSpring ? transitions.spring : {
    ...transitions.default,
    ...(duration && { duration }),
  };

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className={className}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={getVariant()}
          transition={{
            ...transition,
            delay,
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}