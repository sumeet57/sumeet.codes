import React from "react";

const Page1 = () => {
  return (
    <>
      <div
        className="w-[90%] h-[100%] flex  font-[regular] bg-[var(--main)] text-[var(--pri)]
      justify-center items-center pt-20"
      >
        <div className="w-[68%] h-[100%] flex justify-center flex-col gap-4">
          <div className="flex gap-4 h-[50%]">
            <div className="profile-card w-[68%] h-[100%] bg-[var(--sec)] p-4 rounded-s-[30px] rounded-e-[30px] overflow-hidden">
              <div className="text1 w-[100%] h-[40%] flex justify-center items-center">
                <div className="img w-[30%] h-[100%] flex justify-center items-center">
                  <img src="/avatar.png" className="w-[100%] h-[100%] object-contain" alt="pic" />
                </div>
                <div className="name w-[70%] h-[100%] flex items-center">
                  {/* <p className="text-heading font-[heading-r] capitalize p-2 font-extrabold">sumeet umbalkar</p> */}
                </div>
              </div>
              <div className="text2">
                <p className="text-normal capitalize pt-4 p-2 font-light text-left">
                  Full-stack developer from Mumbai passionate about coding,
                  creating dynamic websites, and solving complex algorithms.
                  Always exploring new tech and striving for clean, efficient
                  code
                </p>
              </div>
            </div>
            <div className="theme w-[28%] h-[100%] bg-[var(--sec)] rounded-s-[30px] rounded-e-[30px]">
              theme
            </div>
          </div>
          <div className="flex gap-4 h-[50%]">
            <div className="timezone w-[28%] h-[100%] bg-[var(--sec)] rounded-full">
              timezone
            </div>
            <div className="social-links w-[68%] h-[100%] bg-[var(--sec)] rounded-s-[30px] rounded-e-[30px]">
              social links
            </div>
          </div>
        </div>
        <div className="w-[28%] h-[100%]">
          <div className="skills w-[100%] h-[100%] bg-[var(--sec)] rounded-s-[30px] rounded-e-[30px]"></div>
        </div>
      </div>
    </>
  );
};

export default Page1;
