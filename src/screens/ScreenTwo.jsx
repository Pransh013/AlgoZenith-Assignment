import Button from "../components/Button";
import CheckBox, { CheckBoxII } from "../components/CheckBox";
import Bottom from "../assets/Bottom.png";
const ScreenTwo = () => {
  return (
    <>
      <div className="w-full h-screen py-12 ">
        <div className="h-full flex w-11/12 mx-auto xl:px-28">
          <div className="w-1/2 h-full flex items-center justify-center">
            <div className="flex flex-col gap-8 ">
              <h1 className="text-4xl font-bold max-w-[56%]">
                Invest in skills,
                <span className="text-[#235A91]"> earn 10X </span>of what you
                paid.
              </h1>
              <p className="text-sm max-w-[75%]">
                The range of topic and variations covered in problems cannot be
                matched anywhere else! that too for all Topics!! Educators
                themselves are best in the domains and can teach things others
                might not even know about. High-learning driven system with all
                materials and problemsneeded to learn, Top peers group and
                gamification element to keep you motivated.
              </p>
              <div className=" mt-10 flex gap-10">
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
          <div className="w-1/2 h-full flex items-center justify-end">
            <div className="w-96 rounded-lg border border-gray-400 overflow-hidden">
              <div className="w-full h-40 flex items-center justify-between relative py-6 overflow-hidden">
                <div className="w-full h-full absolute z-30 bg-gradient-to-r from-[#ffffff] to-[#ffffff57] "></div>
                <div className="absolute z-50 left-4">
                  <p>Premium Victory Batch</p>
                  <p className="line-through text-[#818181] text-4xl font-bold">
                    ₹19,999
                  </p>
                  <p
                    className=" text-5xl font-bold"
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
              <div className="bg-[#03405B] w-full text-sm font-light flex flex-col gap-5 p-6">
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