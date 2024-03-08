import Button, { ButtonII } from "../components/Button";
import Header from "../components/Header";
import HeroBG from "../assets/HeroBG.png";
import CheckBox from "../components/CheckBox";
import { ArrowDown } from "lucide-react";
import Companies from "../assets/Companies.png";
const ScreenOne = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#022635] to-[#084660] h-screen py-12 ">
        <div className="h-full w-11/12 mx-auto xl:px-16">
          <Header />
          <div className="pt-16 px-4 flex items-center relative">
            <div className="w-1/2 text-white">
              <h1 className="text-[40px]  font-bold w-2/3">
                Premium is not for the faint hearted!
              </h1>
              <p className="mt-8">
                India's most rigorous training on DSA & CP, Web Development and
                System Design so that you crack the toughest tests like a piece
                of cake!
              </p>
              <div className="flex items-center gap-8 mt-5">
                <Button text={"Join Now"} />
                <ButtonII />
              </div>
              <div className=" mt-10 flex gap-10">
                <div className="flex flex-col gap-8">
                  <CheckBox text={"10x Engineer Preparation"} />
                  <CheckBox text={"Exhaustive Topic Coverage"} />
                </div>
                <div className="flex flex-col gap-8">
                  <CheckBox text={"Alums as Mentors to Guide"} />
                  <CheckBox text={"Interview & Referral support"} />
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <div className="flex items-center gap-1 text-[#9AAFB7] text-sm">
                  <p>Our alumni are placed at top companies</p>
                  <ArrowDown size={18} />
                </div>
                <img src={Companies} alt="" className="w-80" />
              </div>
            </div>
            <div className="absolute pointer-events-none right-0 w-1/2 top-1/2 -translate-y-1/2 ">
              <img src={HeroBG} alt="" className=" object-cover scale-125" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenOne;
