import { useState, useEffect } from 'react';
import { getColorSync } from 'colorthief';

export default function useIconColor(iconUrl) {
  const [color, setColor] = useState(null);

  useEffect(() => {
    if (!iconUrl) return;
    const img = new Image();
    img.onload = () => {
      try {
        const [r, g, b] = getColorSync(img);
        setColor(`rgb(${r},${g},${b})`);
      } catch (e) {
        console.warn('useIconColor: failed to extract color', e);
      }
    };
    img.src = iconUrl;
  }, [iconUrl]);

  return color;
}
