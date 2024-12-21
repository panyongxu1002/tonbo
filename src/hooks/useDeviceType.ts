import { useState, useEffect } from 'react';

export const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 初始检查
    checkDevice();
    
    // 监听窗口大小变化
    window.addEventListener('resize', checkDevice);
    
    // 清理监听器
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return { isMobile };
}; 