import Image from "next/image";
import FeaturesList from "./FeaturesList";
export const MobileView = () => {
  return (
    <div className="bg-black">
      {/* Features List */}
      <FeaturesList />
      {/* 底部 */}
      <div className="text-[#78817A] border-t border-[#444b46] border-solid relative mt-4 py-8 px-4">
        <div>Copyright Ⓒ 2024 – Tonbo IO, Inc.</div>
        <div className="mt-4">Edit this page on GitHub</div>
        <Image
          src="/home/footer-img.svg"
          alt="footer"
          width={143}
          height={66}
          className="absolute right-4 top-[-34px]"
        />
      </div>
      <div className="w-full h-4"></div>
    </div>
  );
};
