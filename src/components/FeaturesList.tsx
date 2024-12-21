export default function FeaturesList() {
  return (
    <>
      <div className="md:py-6 md:px-8 md:flex md:justify-between pt-12 pb-16 grid gap-8 justify-center">
        <div
          className="p-8 w-[321px] h-[284px] border border-[#444b46] border-solid rounded-2xl"
          style={{ boxShadow: "4px 8px 0px 0px #F5FF0B" }}
        >
          <div className="text-2xl text-white font-semibold">
            No Vendor Lock-In
          </div>
          <div className="mt-4 text-base text-[#E6E6E6]">
            TonboLite relies on standard object storage protocols and
            open-source formats. Store data on AWS, Cloudflare, or your own
            MinIO setup—maintaining full control and flexibility.
          </div>
        </div>
        <div
          className="p-8 w-[321px] h-[284px] border border-[#444b46] border-solid rounded-2xl"
          style={{ boxShadow: "4px 8px 0px 0px #F5FF0B" }}
        >
          <div className="text-2xl text-white font-semibold">
            Scale Costs Down to Zero
          </div>
          <div className="mt-4 text-base text-[#E6E6E6]">
            Use low-cost object storage and pay only for what you use. Run
            computations on serverless functions billed by the second, or
            leverage existing devices to reduce costs to zero.
          </div>
        </div>
        <div
          className="p-8 w-[321px] h-[284px] border border-[#444b46] border-solid rounded-2xl"
          style={{ boxShadow: "4px 8px 0px 0px #F5FF0B" }}
        >
          <div className="text-2xl text-white font-semibold">
            Non-zero but Minimal cost ETL
          </div>
          <div className="mt-4 text-base text-[#E6E6E6]">
            While zero-ETL is not possible, TonboLite integrates into your
            current SQLite, PostgreSQL or other OLTP workflows. This keeps ETL
            costs and complexity as low as possible.
          </div>
        </div>
      </div>
    </>
  );
}
