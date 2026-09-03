'use client';

import { motion, useReducedMotion } from 'framer-motion';

import type { ReactNode } from 'react';

export default function Reveal({
  children,
  className,
  immediate = false,
}: {
  children: ReactNode;
  className?: string;
  immediate?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = shouldReduceMotion
    ? {}
    : immediate
      ? {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75, ease: 'easeOut' as const },
        }
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.25 },
          transition: { duration: 0.65, ease: 'easeOut' as const },
        };

  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
}
