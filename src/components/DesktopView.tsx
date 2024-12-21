import Image from "next/image";
import FeaturesList from "./FeaturesList";

export const DesktopView = () => {
  return (
    <div className="min-h-screen bg-[#1A1D1A] text-white px-[130px] ">
      {/* 导航栏 */}
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center">
          <a href="https://tonbo.io/">
            <Image
              src="/home/icon.svg"
              alt="tonbo logo"
              width={202}
              height={34}
              className="mr-8"
            />
          </a>
          <input
            type="text"
            placeholder="Search"
            className="bg-[#2A2D2A] px-4 py-2 rounded-md text-gray-300"
          />
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-300 hover:text-white">
            Blogs
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Docs
          </a>
          <div className="h-5 w-px bg-gray-600 mx-4"></div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* 主要内容区域 */}
      <div className="container mx-auto  py-16">
        <div className="bg-[#CCFF00] rounded-xl p-16 relative overflow-hidden">
          <div className="max-w-2xl">
            <h2 className="text-black text-5xl font-bold mb-4">
              TonboLite:
              <br />
              Analysis-ready
              <br />
              SQLite tables,
              <br />
              scalable with S3
            </h2>
            <p className="text-black/80 text-lg mt-8 mb-12">
              Simple to transform data from existing SQL stack, running at the
              edge, and to scale into a vendor-agnostic data warehouse.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#7C3AED] text-white px-8 py-3 rounded-full hover:bg-[#6D28D9] transition">
                Star on GitHub
              </button>
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
                Join WaitList
              </button>
            </div>
          </div>

          {/* 装饰性图形 */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2">
            <div className="relative w-64 h-64">
              <div className="absolute transform rotate-45 bg-white w-32 h-32 border-2 border-black"></div>
              <div className="absolute top-8 left-8 transform -rotate-12 bg-[#7C3AED] w-8 h-24"></div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <button className="border border-[#CCFF00] text-[#CCFF00] px-8 py-3 rounded-full hover:bg-[#CCFF00] hover:text-black transition">
            Explore Architecture
          </button>
        </div>
      </div>

      {/* Features List */}
      <FeaturesList />

      {/* 底部 */}
      <div className="flex justify-between items-center text-[#78817A] box-content p-4 h-[66px] border-t border-[#444b46] border-solid relative mt-8">
        <div>Copyright Ⓒ 2024 – Tonbo IO, Inc.</div>
        <div>Edit this page on GitHub</div>
        <Image
          src="/home/footer-img.svg"
          alt="footer"
          width={143}
          height={66}
          className="absolute left-[-55px] top-[-34px]"
        />
      </div>
    </div>
  );
};
