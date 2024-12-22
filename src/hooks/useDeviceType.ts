'use client';

import { useState, useEffect } from 'react';

export const useDeviceType = () => {
  // 初始状态设置为 null，表示还未确定
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 468);
    };

    // 初始检查
    checkDevice();
    
    // 监听窗口大小变化
    window.addEventListener('resize', checkDevice);
    
    // 清理监听器
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // 在客户端渲染之前返回默认值
  if (isMobile === null) {
    return { isMobile: false };
  }

  return { isMobile };
}; 