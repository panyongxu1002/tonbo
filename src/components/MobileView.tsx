import Image from "next/image";
import FeaturesList from "./FeaturesList";
import NavGroup from "./NavGroup";
import CodeBox from "./CodeBox";

const SearchSvg = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="search-alt" clipPath="url(#clip0_95_79)">
        <path
          id="Vector"
          d="M23.1239 20.8875L16.9364 15.8625C19.4864 12.375 19.2239 7.38749 16.0364 4.23749C14.3489 2.54999 12.0989 1.61249 9.69885 1.61249C7.29885 1.61249 5.04885 2.54999 3.36135 4.23749C-0.126147 7.72499 -0.126147 13.425 3.36135 16.9125C5.04885 18.6 7.29885 19.5375 9.69885 19.5375C11.9864 19.5375 14.1239 18.675 15.8114 17.1375L22.0739 22.2C22.2239 22.3125 22.4114 22.3875 22.5989 22.3875C22.8614 22.3875 23.0864 22.275 23.2364 22.0875C23.5364 21.7125 23.4989 21.1875 23.1239 20.8875ZM9.69885 17.85C7.74885 17.85 5.94885 17.1 4.56135 15.7125C1.71135 12.8625 1.71135 8.24999 4.56135 5.43749C5.94885 4.04999 7.74885 3.29999 9.69885 3.29999C11.6489 3.29999 13.4489 4.04999 14.8364 5.43749C17.6864 8.28749 17.6864 12.9 14.8364 15.7125C13.4864 17.1 11.6489 17.85 9.69885 17.85Z"
          fill="#78817A"
        />
      </g>
      <defs>
        <clipPath id="clip0_95_79">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.098877)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const MobileView = () => {
  return (
    <div className="bg-[#222623] text-white">
      {/* nav */}
      <div className="border-b border-solid border-[#444a46] p-4 flex justify-between items-center sticky top-0 bg-[#222623]">
        <a href="https://tonbo.io/">
          <Image
            src="/home/icon.svg"
            alt="tonbo logo"
            width={153}
            height={34}
            className="mr-8"
          />
        </a>
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-300 hover:text-white">
            <SearchSvg />
          </a>
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
          <NavGroup />
        </div>
      </div>

      {/* content */}
      <div className="bg-[#f5ff0b] mt-3 overflow-hidden pb-9">
        <Image
          src="/home/banner.png"
          alt="banner"
          width={478}
          height={380}
          className="mx-auto block"
        />
        <div className="text-[40px] font-bold text-[#222623] leading-[48px] px-3 text-center mt-3">
          TonboLite: <br /> Analysis-ready <br /> SQLite tables, <br /> scalable
          with S3
        </div>

        <div className="mt-6 flex justify-center">
          <a href="https://github.com/tonbo-io/sqlite-tonbo">
            <div className="w-[171px] h-[50px] bg-[#654FF0] rounded-[50px] leading-[50px] text-center cursor-pointer">
              Star on GitHub
            </div>
          </a>
          <div className="w-[164px] h-[50px] bg-[#222623] rounded-[50px] leading-[50px] text-center cursor-pointer ml-6">
            Join WaitList
          </div>
        </div>
      </div>

      {/* 简介 */}
      <div className="mt-8 px-6 bg-[#2f3330] pt-4 pb-6">
        <div className="leading-[26px] text-lg">
          TonboLite lets you create analysis-ready SQLite tables stored either
          locally or directly in S3-backed Parquet files. This makes it simple
          to transform data from your existing SQL stack—running at the edge—and
          to scale into a vendor-agnostic data warehouse. With TonboLite, you
          can use SQLite or any Parquet-compatible tool (e.g., Datafusion,
          Pandas, DuckDB) to build pay-as-you-go observability, visualization,
          AI training, and other data processing solutions.
        </div>
        <div className="mt-8 mx-auto w-[223px] h-[48px] text-center leading-[48px] bg-[#222623] rounded-[50px] border border-solid border-[#F5FF0B] cursor-pointer">
          Explore Architecture
        </div>
      </div>

      {/* Code Edit */}
      <CodeBox />

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
