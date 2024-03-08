const CheckBox = ({ text }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 border flex-shrink-0 border-[#89b8cb] border-r-[#aac6d2] border-l-[#aac6d2] border-t-2 border-t-[#CEF0FE] rounded-md"></div>
      <p className="text-white text-wrap">{text}</p>
    </div>
  );
};

export const CheckBoxII = ({ top, bottom }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-[#D9D9D9] flex-shrink-0 rounded-md"></div>
      <div className="text-black flex flex-col">
        <p className="text-wrap">{top}</p>
        <p className="text-xs text-wrap">{bottom}</p>
      </div>
    </div>
  );
};

export default CheckBox;
