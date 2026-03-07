'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export default function LayoutAnimation() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <button
      style={{
        ...container,
        // Solo animamos el color del fondo aquí usando CSS nativo
        backgroundColor: isOn ? 'rgba(153, 17, 255, 0.3)' : '#e5e7eb',
      }}
      onClick={toggleSwitch}
    >
      <motion.div
        style={handle}
        // Animación directa: mueve el círculo en el eje X
        // 44px es la distancia exacta para llegar al otro lado (90 ancho - 40 círculo - 6 padding)
        animate={{
          x: isOn ? 44 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500, // Fuerza del rebote
          damping: 30, // Resistencia para que no rebote infinitamente
        }}
      />
    </button>
  );
}

/**
 * ==============   Styles   ================
 */

const container = {
  width: 90,
  height: 46,
  borderRadius: 50,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center', // Asegura que el círculo esté centrado verticalmente
  padding: '0 3px', // 3px de margen a los lados
  border: 'none',
  transition: 'background-color 0.3s ease',
};

const handle = {
  width: 40,
  height: 40,
  backgroundColor: '#9911ff',
  borderRadius: '50%',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
};
