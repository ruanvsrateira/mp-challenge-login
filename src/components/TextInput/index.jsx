export const TextInput = (props) => {
  return (
    <div className="flex flex-col w-[100%]">
      <label className="text-[#9CA3AF] font-dmSans">{props.label}</label>
      <input
        {...props}
        type={props.type}
        className="w-[100%] h-[50px] rounded-lg pl-4 bg-[#2e3440]"
      />
    </div>
  );
};
