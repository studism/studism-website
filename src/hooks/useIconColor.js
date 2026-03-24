import { useState, useEffect } from 'react';
import ColorThief from 'colorthief';

export default function useIconColor(iconUrl) {
  const [color, setColor] = useState(null);

  useEffect(() => {
    if (!iconUrl) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = iconUrl;
    img.onload = () => {
      try {
        const thief = new ColorThief();
        const [r, g, b] = thief.getColor(img);
        setColor(`rgb(${r},${g},${b})`);
      } catch {
        // fallback: do nothing, caller uses app.color
      }
    };
  }, [iconUrl]);

  return color;
}
