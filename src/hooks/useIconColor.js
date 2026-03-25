import { useState, useEffect } from 'react';
import { getColorSync } from 'colorthief';

export default function useIconColor(iconUrl) {
  const [color, setColor] = useState(null);

  useEffect(() => {
    if (!iconUrl) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = iconUrl;
    img.onload = () => {
      try {
        const [r, g, b] = getColorSync(img);
        setColor(`rgb(${r},${g},${b})`);
      } catch {
        // fallback: caller uses app.color
      }
    };
  }, [iconUrl]);

  return color;
}
