'use client';

import { useDeviceType } from "@/hooks/useDeviceType";
import { DesktopView } from "@/components/DesktopView";
import { MobileView } from "@/components/MobileView";

export default function Home() {
  const { isMobile } = useDeviceType();

  return (
    <main>
      {isMobile ? <MobileView /> : <DesktopView />}
    </main>
  );
}
