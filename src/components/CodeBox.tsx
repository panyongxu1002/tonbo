import CodeEdit from "./CodeEdit";
const CodeBox = () => {
  const init = `-- Create analytical-ready table on S3:
CREATE VIRTUAL TABLE t1 USING tonbo(
    create_sql='create table user(name TEXT PRIMARY KEY,  age INT, mail TEXT)',
);

-- Insert it:
INSERT INTO user (name, age, mail)
    VALUES("Alice Bob", 13, "alice.bob@gmail.com");

-- Query it:
SELECT * from user
    where name = "Alice Bob";`;

  const defaultValue = `INSERT INTO waitlist (name, mail, linkedin) VALUES("Your Name", "your.name@mail.box", NULL);`;
  const getCode = (code: string) => {
    console.log(code);
  };
  return (
    <>
      <div className="mt-8">
        <div className="md:hidden">
          <div className="py-8 px-2 space-y-12">
            <div>
              <div className="text-2xl font-semibold text-center ">
                Create analytical-ready table on S3
              </div>
              <div className="mt-8 py-8 rounded-2xl border border-solid border-[#444b46] bg-[#1e1e1e]">
                <CodeEdit value={init} disabled height="330px" />
              </div>
            </div>

            <div>
              <div className="text-2xl font-semibold text-center">
                Try TonboLite on <span className="text-[#F5FF0B]">WASM</span> demo in the browser
              </div>
              <div className="text-base font-normal mt-[10px] text-center text-[#E6E6E6]">
                And insert SQL to Join the waitlist!
              </div>
              <div className="mt-8 py-8 rounded-2xl border border-solid border-[#444b46] bg-[#1e1e1e]">
                <CodeEdit
                  value={defaultValue}
                  height="330px"
                  onChange={(value: string | undefined) => getCode(value || '')}
                />
              </div>
              <div className="mx-auto w-[362px] h-[50px] text-center leading-[50px] bg-[#1a1c1a] border border-solid border-[#444b46] rounded-[50px] mt-8 cursor-pointer" >
                Download Tales as Parquet Files on S3
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block mx-2 pt-8 pb-16">
          <div className="flex items-start justify-between gap-16">
            <div className="w-[503px]">
              <div className="text-2xl font-semibold h-[66px]">
                Create analytical-ready table on S3
              </div>
              <div className="mt-[65px] py-8 rounded-2xl border border-solid border-[#444b46] bg-[#1e1e1e]">
                <CodeEdit value={init} disabled height="330px" />
              </div>
            </div>
            <div className="w-[682px]">
            
              <div className="text-2xl font-semibold text-center">
                Try TonboLite on <span className="text-[#F5FF0B]">WASM</span> demo in the browser
              </div>
              <div className="text-base font-normal mt-[10px] text-center text-[#E6E6E6]">
                And insert SQL to Join the waitlist!
              </div>
              <div className="mt-[65px] py-8 rounded-2xl border border-solid border-[#444b46] bg-[#1e1e1e]">
                <CodeEdit
                  value={defaultValue}
                  height="330px"
                  onChange={(value: string | undefined) => getCode(value || '')}
                />
              </div>
              <div className="mx-auto w-[362px] h-[50px] text-center leading-[50px] bg-[#1a1c1a] border border-solid border-[#444b46] rounded-[50px] mt-8 cursor-pointer" >
                Download Tales as Parquet Files on S3
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeBox;
