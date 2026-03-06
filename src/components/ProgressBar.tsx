import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-white/5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="h-full bg-gradient-to-r from-gold/60 via-gold to-gold/60"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </motion.div>
  );
}
