'use client';

import { useDeviceType } from "@/hooks/useDeviceType";
import { DesktopView } from "@/components/DesktopView";
import { MobileView } from "@/components/MobileView";

export default function Home() {
  const { isMobile } = useDeviceType();

  // 在确定设备类型之前显示默认视图
  return (
    <main>
      {isMobile !== null && (
        isMobile ? <MobileView /> : <DesktopView />
      )}
    </main>
  );
}
