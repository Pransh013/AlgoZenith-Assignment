import { ChevronDown, Menu } from "lucide-react";
import HeaderLogo from "../assets/HeaderLogo.svg";
import Button from "./Button";
const Header = () => {
  return (
    <div className=" w-full flex justify-between items-center xl:px-4">
      <div className="flex items-center gap-4">
        <img
          src={HeaderLogo}
          alt=""
          className="w-10 md:w-12 xl:w-16 2xl:w-24"
        />
        <h1 className="text-3xl md:text-4xl 2xl:text-7xl font-bold text-white">
          AlgoZenith
        </h1>
      </div>
      <div className="hidden lg:flex w-3/5 xl:w-1/2 justify-between 2xl:text-2xl items-center text-[#9AAFB7] text-lg">
        <div>Home</div>
        <div className="flex items-center gap-1">
          <p>Courses</p>
          <ChevronDown />
        </div>
        <div>Mock</div>
        <div>Premium</div>
        <Button text={"Start Solving"} />
      </div>
      <div className="lg:hidden">
        <Menu size={36} color="#fffafa" strokeWidth={2.25} />
      </div>
    </div>
  );
};

export default Header;
