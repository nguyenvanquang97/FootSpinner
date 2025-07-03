import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, PartyPopper, Gift } from 'lucide-react';

interface SuccessAnimationProps {
  color: string;
}

const SuccessAnimation: React.FC<SuccessAnimationProps> = ({ color }) => {
  // Mảng các icon sẽ hiển thị xung quanh kết quả
  const icons = [
    { Icon: Star, delay: 0 },
    { Icon: Award, delay: 0.2 },
    { Icon: PartyPopper, delay: 0.4 },
    { Icon: Gift, delay: 0.6 },
    { Icon: Star, delay: 0.8 },
    { Icon: Award, delay: 1 },
    { Icon: PartyPopper, delay: 1.2 },
    { Icon: Gift, delay: 1.4 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Vòng tròn phát sáng */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: `${color}20` }} // Màu với độ trong suốt
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Các icon xoay tròn */}
      {icons.map((IconObj, index) => {
        const angle = (index / icons.length) * Math.PI * 2;
        const x = Math.cos(angle) * 120; // Bán kính
        const y = Math.sin(angle) * 120;

        return (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2"
            style={{ color }}
            initial={{ x, y, scale: 0, opacity: 0 }}
            animate={{
              x,
              y,
              scale: 1,
              opacity: 1,
              rotate: [0, 360],
            }}
            transition={{
              delay: IconObj.delay,
              duration: 1,
              rotate: { repeat: Infinity, duration: 3, ease: 'linear' },
            }}
          >
            <IconObj.Icon size={24} />
          </motion.div>
        );
      })}

      {/* Hiệu ứng lấp lánh */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: `${color}10` }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default SuccessAnimation;