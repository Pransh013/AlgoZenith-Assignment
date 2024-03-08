import { MoveRight } from "lucide-react";

const Button = ({ text }) => {
  return (
    <div className="flex w-80 sm:w-96 lg:w-52 justify-center shadow-[rgba(255,255,255,_0.6)_0px_0px_150px] hover:shadow-[rgba(255,255,255,_0.2)_0px_0px_50px] items-center bg-white py-2.5 rounded-md gap-1 font-medium border-2 text-[#053D57] cursor-pointer hover:text-white hover:bg-[#053D57] transition-all ease-in-out duration-300">
      <p>{text}</p>
      <MoveRight />
    </div>
  );
};

export const ButtonII = () => {
  return (
    <div className="flex w-80 sm:w-96 lg:w-52 justify-center items-center bg-gradient-to-r from-[#022635] to-[#084660] py-3 rounded-md gap-1 font-medium border-2 border-[#084660] text-white cursor-pointer hover:from-[#00283A] hover:to-[#00283A] transition-all ease-in-out duration-300 hover:shadow-[rgba(255,255,255,_0.4)_0px_0px_100px] shadow-[rgba(255,255,255,_0.1)_0px_0px_30px]">
      <p>Try Platform</p>
    </div>
  );
};

export default Button;
