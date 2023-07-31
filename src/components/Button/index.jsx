export const Button = (props) => {
  return (
    <button
      style={{
        backgroundImage:
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      }}
      className="h-[50px] w-[100%] rounded-lg text-white font-dmSasns font-bold"
      {...props}
    >
      {props.text}
    </button>
  );
};
