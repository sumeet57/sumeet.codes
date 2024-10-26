import React from "react";

const Page1 = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.1) 0.5px, transparent 0.5px), linear-gradient(to right, rgba(255, 255, 255, 0.1) 0.5px, transparent 0.5px)",
          backgroundSize: "180px 180px",
          backgroundColor: "#261722",
        }}
        className="page1 w-full h-screen relative flex justify-center items-center"
      >
        {/* <img
          className="w-full h-full object-cover opacity-30 blur-sm absolute top-0 left-0"
          src="./back.png"
          alt="Background"
        /> */}
        <div className="cont w-full leading-tight text-white flex justify-center items-center flex-col pt-10">
          <h1
            style={{ transform: "scaleX(1)", fontFamily: "SofadiOne" }}
            className="text-8xl uppercase px-4 max-lg:text max-sm:text-[15vw]"
          >
            sumeet
          </h1>
          <h2
            style={{ transform: "scaleX(0.75)" }}
            className="text-8xl uppercase px-4 max-sm:text-[15vw]"
          >
            fullstack
          </h2>
        </div>
      </div>
    </>
  );
};

export default Page1;
