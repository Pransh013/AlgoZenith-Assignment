import Button from "../components/Button";
import CheckBox, { CheckBoxII } from "../components/CheckBox";
import Bottom from "../assets/Bottom.png";
const ScreenTwo = () => {
  return (
    <>
      <div className="w-full h-screen mt-10 2xl:mt-0 mb-24">
        <div className="h-full flex flex-col gap-16 lg:gap-0 lg:flex-row w-11/12 mx-auto xl:px-28">
          <div className="w-full sm:px-28 lg:px-0 lg:w-1/2 h-full flex items-center justify-center">
            <div className="flex flex-col  items-center lg:items-start gap-3 lg:gap-8 ">
              <h1 className="text-3xl text-center lg:text-left max-w-[75%] sm:text-4xl font-bold 2xl:text-7xl lg:max-w-[56%] 2xl:max-w-[75%]">
                Invest in skills,
                <span className="text-[#235A91]"> earn 10X </span>of what you
                paid.
              </h1>
              <p className="text-sm text-center lg:text-left 2xl:text-2xl max-w-[85%] lg:max-w-[75%] 2xl:max-w-full">
                The range of topic and variations covered in problems cannot be
                matched anywhere else! that too for all Topics!! Educators
                themselves are best in the domains and can teach things others
                might not even know about. High-learning driven system with all
                materials and problemsneeded to learn, Top peers group and
                gamification element to keep you motivated.
              </p>
              <div className=" mt-10 flex gap-3 sm:gap-10">
                <div className="flex flex-col gap-8">
                  <CheckBoxII
                    top={"1.2 Cr/Year"}
                    bottom={"highest fresher package"}
                  />
                  <CheckBoxII
                    top={"1000+ Offers"}
                    bottom={"from top companies"}
                  />
                </div>
                <div className="flex flex-col gap-8">
                  <CheckBoxII
                    top={"Multiple < 100 ranks"}
                    bottom={"in kickstart last year"}
                  />
                  <CheckBoxII
                    top={"Trusted by IITians"}
                    bottom={"for their career prep"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pb-12 lg:pb-0 lg:w-1/2 h-full mt-16 lg:mt-0 flex items-center justify-center lg:justify-end">
            <div className="w-96 2xl:w-[32rem] rounded-lg border 2xl:border-2 border-gray-400 overflow-hidden">
              <div className="w-full h-40 2xl:h-48 flex items-center justify-between relative py-6 overflow-hidden">
                <div className="w-full h-full absolute z-30 bg-gradient-to-r from-[#ffffff] to-[#ffffff57] "></div>
                <div className="absolute z-50 left-4">
                  <p className="2xl:text-xl">Premium Victory Batch</p>
                  <p className="line-through text-[#818181] text-4xl 2xl:text-5xl font-bold">
                    ₹19,999
                  </p>
                  <p
                    className=" text-5xl 2xl:text-6xl font-bold"
                    style={{
                      background: "linear-gradient(to right, #3a6cba, #074662)",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    ₹13,999
                  </p>
                </div>
                <div className="absolute z-10 right-0 scale-150">
                  <img src={Bottom} alt="" className="" />
                </div>
              </div>
              <div className="bg-[#03405B] w-full text-sm font-light flex flex-col gap-5 2xl:gap-10 p-6">
                <CheckBox text={"100+ Hrs Live Content"} />
                <CheckBox text={"500+ Problems"} />
                <CheckBox
                  text={
                    "Includes an interview bootcamp and access to a mentor network"
                  }
                />
                <CheckBox
                  text={
                    "Enjoy access to our content for one year (paid extension available)"
                  }
                />
                <CheckBox
                  text={
                    "Flexible payment options, including no-cost EMI, areavailable"
                  }
                />
                <div className="mx-auto">
                  <Button text={"Join now"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenTwo;
