import Button, { ButtonII } from "../components/Button";
import Header from "../components/Header";
import HeroBG from "../assets/HeroBG.png";
import CheckBox from "../components/CheckBox";
import { ArrowDown } from "lucide-react";
import Companies from "../assets/Companies.png";
const ScreenOne = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#022635] to-[#084660] 2xl:h-screen  py-12 ">
        <div className="h-full  w-11/12 mx-auto xl:px-16">
          <Header />
          <div className="pt-8 w-full h-full xl:pt-6 2xl:pt-6 px-4 flex flex-col lg:flex-row items-center relative">
            <div className="sm:px-20 2xl:h-full lg:px-0 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:gap-12 text-center lg:text-left w-full lg:w-1/2 text-white">
              <h1 className="text-3xl sm:text-[34px] xl:text-[40px] 2xl:text-6xl w-full font-bold lg:w-2/3 2xl:w-full">
                Premium is not for the faint hearted!
              </h1>
              <p className="mt-5 xl:mt-8 2xl:mt-0 2xl:text-2xl">
                India's most rigorous training on DSA & CP, Web Development and
                System Design so that you crack the toughest tests like a piece
                of cake!
              </p>
              <div className="flex flex-col lg:flex-row items-center gap-8 mt-5 2xl:mt-0">
                <Button text={"Join Now"} />
                <ButtonII />
              </div>
              <div className="mt-8 xl:mt-10 2xl:mt-0 flex gap-10">
                <div className="flex flex-col gap-8">
                  <CheckBox text={"10x Engineer Preparation"} />
                  <CheckBox text={"Exhaustive Topic Coverage"} />
                </div>
                <div className="flex flex-col gap-8">
                  <CheckBox text={"Alums as Mentors to Guide"} />
                  <CheckBox text={"Interview & Referral support"} />
                </div>
              </div>
              <div className="mt-5 2xl:mt-0 items-center lg:items-start flex flex-col gap-2 2xl:gap-5">
                <div className="flex items-center gap-1 text-[#9AAFB7] text-sm 2xl:text-2xl">
                  <p className="">Our alumni are placed at top companies</p>
                  <ArrowDown size={18} />
                </div>
                <img src={Companies} alt="" className="w-80 2xl:w-[35rem]" />
              </div>
            </div>
            <div className="relative 2xl:h-full w-full lg:w-1/2 h-[22rem] sm:h-[40rem] mt-8 lg:mt-0 lg:h-[35rem]">
              <div className="absolute w-full h-full pointer-events-none ">
                <img
                  src={HeroBG}
                  alt=""
                  className=" object-cover scale-110 lg:scale-125"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenOne;
