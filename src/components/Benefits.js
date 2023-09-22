import React, { useMemo, useCallback } from "react";

const benefit = [
  {
    amount: "₹15000+",
    position: "1ST",
  },
  {
    amount: "₹10000+",
    position: "2ND",
  },
  {
    amount: "₹5000+",
    position: "3RD",
  },
];

const Prizes = ({ amount, position, color }) => {
  const memoizedAmount = useMemo(() => amount, [amount]);
  const memoizedPosition = useMemo(() => position, [position]);

  return (
    <React.Fragment>
      <div className="relative hover:scale-110 cardShadow w-64 rounded-lg bg-[#222222] overflow-hidden p-4 z-[1]">
        <h2 className="text-[#FF884B] text-[36px] font-black tracking-wide mb-2">
          {memoizedAmount}
        </h2>
        <div className="flex justify-center">
          <p className="text-white font-semibold text-[15px] whitespace-nowrap tracking-widest w-fit">
            GOODIES FOR
          </p>
          <span className="text-[#FF884B]"> {memoizedPosition}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

const Benefits = () => {
  const memoizedPrizes = useCallback(
    () => (
      <React.Fragment>
        {benefit.map((benefit, i) => (
          <Prizes
            key={i}
            amount={benefit.amount}
            position={benefit.position}
            color={benefit.color}
          />
        ))}
      </React.Fragment>
    ),
    [benefit]
  );

  return (
    <div className="w-full flex items-center text-center flex-col py-24 px-6 sm:px-10 bg-black relative  bg-opacity-90 ">
      <div className="w-full flex items-center text-center flex-col py-24 px-6 sm:px-10 rounded rounded-[40px] bg-black ">
        <h2 className="text-white font-black md:text-[28px] sm:text-[26px]  text-[24px] pb-4 tracking-wide">
          BENEFITS AND REWARDS
        </h2>
        <h2 className=" text-[#E5F358] font-black md:text-[50px] sm:text-[46px] text-[38px] pb-6 tracking-wider">
          PRICES WORTH ₹50K
        </h2>
        <div className="w-full flex justify-around items-center max-w-7xl gap-y-6 flex-wrap py-10 ">
          {benefit.map((benefit, i) => (
            <Prizes
              key={i}
              amount={benefit.amount}
              position={benefit.position}
              color={benefit.color}
            />
          ))}
        </div>
        <div className="mid-glow z-[0] absolute mt-[250px]  h-56"></div>
      </div>
      <div className="z-[2]">
        <p className=" text-[#F0FF59] text-[18px] max-w-lg font-medium pt-12 tracking-widest ">
          Gift Hampers for completing certain targets.
        </p>
        <p className=" text-[#F0FF59] text-[18px] max-w-lg font-medium pt-12 tracking-widest ">
          Free access to Dhishna ProShows
        </p>
        <p className=" text-[#F0FF59] text-[18px] max-w-lg font-medium pt-12 tracking-widest ">
          Top 10 people will receive a special certificate
          <p>
            Certificate for individuals who finished a specific tier (percentage
            of work) Extra rewards for performing well at work.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Benefits;
