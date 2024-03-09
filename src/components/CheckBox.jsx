const CheckBox = ({ text }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16  border flex-shrink-0 border-[#89b8cb] border-r-[#aac6d2] border-l-[#aac6d2] border-t-2 border-t-[#CEF0FE] rounded-md"></div>
      <p className="text-white text-sm xl:text-md 2xl:text-xl text-wrap">
        {text}
      </p>
    </div>
  );
};

export const CheckBoxII = ({ top, bottom }) => {
  return (
    <div className="flex border-2 items-center gap-2 sm:gap-4">
      <div className="w-9 h-9 sm:w-12 sm:h-12 2xl:w-20 2xl:h-20 bg-[#D9D9D9] flex-shrink-0 rounded-md"></div>
      <div className="text-black flex flex-col">
        <p className="text-[13px] sm:text-md text-wrap 2xl:text-2xl">{top}</p>
        <p className="text-[9px] sm:text-xs text-wrap 2xl:text-xl">{bottom}</p>
      </div>
    </div>
  );
};

export default CheckBox;
