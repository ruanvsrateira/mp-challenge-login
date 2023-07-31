export const Title = ({ text }) => {
  return (
    <div className="flex items-center gap-3">
      <h1 className="text-white text-[42px] font-dmSans">{text}</h1>
      <div className="flex items-end h-[22px]">
        <div className="w-[12px] h-[12px] rounded-[50%] bg-gradient-to-br from-blue-500 via-pink-500 to-yellow-300"></div>
      </div>
    </div>
  );
};
