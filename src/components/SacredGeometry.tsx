import { useState } from 'react';
import { motion } from 'framer-motion';

interface SacredGeometryProps {
  className?: string;
  size?: number;
  animate?: boolean;
}

export function SacredRings({ className = '', size = 400, animate = true }: SacredGeometryProps) {
  return (
    <div 
      className={`relative ${className}`}
      style={{ width: size, height: size, maxWidth: '92vw', maxHeight: '92vw' }}
    >
      {/* Outer ring */}
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full"
        animate={animate ? { rotate: 360 } : {}}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <circle
          cx="200"
          cy="200"
          r="190"
          fill="none"
          stroke="rgba(243, 184, 85, 0.2)"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="none"
          stroke="rgba(243, 184, 85, 0.15)"
          strokeWidth="0.5"
          strokeDasharray="10 5"
        />
      </motion.svg>
      
      {/* Middle ring with nodes */}
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full"
        animate={animate ? { rotate: -360 } : {}}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
      >
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="rgba(243, 184, 85, 0.3)"
          strokeWidth="1.5"
        />
        {/* Nodes */}
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const x = 200 + 150 * Math.cos(angle);
          const y = 200 + 150 * Math.sin(angle);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              fill="rgba(243, 184, 85, 0.6)"
            />
          );
        })}
      </motion.svg>
      
      {/* Inner geometric pattern */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full"
      >
        {/* Hexagon */}
        <polygon
          points="200,80 304,140 304,260 200,320 96,260 96,140"
          fill="none"
          stroke="rgba(243, 184, 85, 0.25)"
          strokeWidth="1"
        />
        {/* Inner triangle */}
        <polygon
          points="200,120 269,240 131,240"
          fill="none"
          stroke="rgba(243, 184, 85, 0.2)"
          strokeWidth="0.5"
        />
        {/* Center circle */}
        <circle
          cx="200"
          cy="200"
          r="40"
          fill="none"
          stroke="rgba(243, 184, 85, 0.4)"
          strokeWidth="2"
        />
        <circle
          cx="200"
          cy="200"
          r="20"
          fill="rgba(243, 184, 85, 0.1)"
          stroke="rgba(243, 184, 85, 0.5)"
          strokeWidth="1"
        />
      </svg>
      
      {/* Decorative dots */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x = 50 + 40 * Math.cos(angle);
          const y = 50 + 40 * Math.sin(angle);
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold/40 rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export function FlowerOfLife({ className = '', size = 300 }: SacredGeometryProps) {
  return (
    <svg
      viewBox="0 0 300 300"
      className={`${className}`}
      style={{ width: size, height: size }}
    >
      {/* Central circle */}
      <circle cx="150" cy="150" r="30" fill="none" stroke="rgba(243, 184, 85, 0.3)" strokeWidth="1" />
      
      {/* Surrounding circles */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const cx = 150 + 30 * Math.cos(angle);
        const cy = 150 + 30 * Math.sin(angle);
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="30"
            fill="none"
            stroke="rgba(243, 184, 85, 0.25)"
            strokeWidth="1"
          />
        );
      })}
      
      {/* Outer ring of circles */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const cx = 150 + 60 * Math.cos(angle);
        const cy = 150 + 60 * Math.sin(angle);
        return (
          <circle
            key={`outer-${i}`}
            cx={cx}
            cy={cy}
            r="30"
            fill="none"
            stroke="rgba(243, 184, 85, 0.2)"
            strokeWidth="0.5"
          />
        );
      })}
    </svg>
  );
}

export function StarField({ className = '' }: { className?: string }) {
  const [stars] = useState(() =>
    Array.from({ length: 50 }, () => {
      const opacity = Math.random() * 0.5 + 0.2;

      return {
        size: Math.random() * 2 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      };
    })
  );

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {stars.map((star, i) => {
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.left}%`,
              top: `${star.top}%`,
              opacity: star.opacity
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: star.delay
            }}
          />
        );
      })}
    </div>
  );
}

export function RotatingGeometry({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {/* Outer geometric shape */}
        <polygon
          points="100,10 150,40 170,90 150,140 100,170 50,140 30,90 50,40"
          fill="none"
          stroke="rgba(243, 184, 85, 0.4)"
          strokeWidth="1"
        />
        {/* Inner rotating square */}
        <rect
          x="60"
          y="60"
          width="80"
          height="80"
          fill="none"
          stroke="rgba(243, 184, 85, 0.3)"
          strokeWidth="1"
          transform="rotate(45 100 100)"
        />
        {/* Center point */}
        <circle cx="100" cy="100" r="8" fill="rgba(243, 184, 85, 0.5)" />
      </motion.svg>
      
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        <polygon
          points="100,30 130,50 140,85 130,120 100,140 70,120 60,85 70,50"
          fill="none"
          stroke="rgba(243, 184, 85, 0.25)"
          strokeWidth="0.5"
        />
      </motion.svg>
    </div>
  );
}

export function GlowOrb({ className = '', size = 300 }: SacredGeometryProps) {
  return (
    <div 
      className={`relative ${className}`}
      style={{ width: size, height: size, maxWidth: '92vw', maxHeight: '92vw' }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(243, 184, 85, 0.2) 0%, rgba(243, 184, 85, 0.05) 50%, transparent 70%)'
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <div 
        className="absolute inset-8 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(243, 184, 85, 0.15) 0%, transparent 60%)'
        }}
      />
    </div>
  );
}
