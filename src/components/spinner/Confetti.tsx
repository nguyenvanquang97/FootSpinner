import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
}

interface ConfettiProps {
  duration?: number;
  pieces?: number;
}

const COLORS = [
  '#FF6B6B', '#4ECDC4', '#FFD166', '#06D6A0', '#118AB2', 
  '#EF476F', '#FFC43D', '#1B9AAA', '#6A0572', '#AB83A1',
  '#F15BB5', '#9B5DE5', '#00BBF9', '#00F5D4', '#FEE440'
];

const Confetti: React.FC<ConfettiProps> = ({ duration = 3000, pieces = 100 }) => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [active, setActive] = useState(true);

  useEffect(() => {
    // Tạo các mảnh confetti
    const newConfetti: ConfettiPiece[] = [];
    for (let i = 0; i < pieces; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 100, // Vị trí ngẫu nhiên theo chiều ngang (0-100%)
        y: Math.random() * -50, // Bắt đầu từ trên màn hình
        size: Math.random() * 1 + 0.5, // Kích thước ngẫu nhiên
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rotation: Math.random() * 360, // Góc quay ngẫu nhiên
      });
    }
    setConfetti(newConfetti);

    // Tắt hiệu ứng sau khoảng thời gian duration
    const timer = setTimeout(() => {
      setActive(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [pieces, duration]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}rem`,
            height: `${piece.size}rem`,
            backgroundColor: piece.color,
            borderRadius: '2px',
            transform: `rotate(${piece.rotation}deg)`,
          }}
          initial={{ y: '-10vh', opacity: 1 }}
          animate={{
            y: '100vh',
            opacity: [1, 1, 0],
            rotate: piece.rotation + Math.random() * 360,
            x: piece.x + (Math.random() * 20 - 10),
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            ease: 'easeOut',
            delay: Math.random() * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;