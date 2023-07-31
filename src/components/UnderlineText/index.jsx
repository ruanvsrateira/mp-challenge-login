export const UnderlineText = ({ alignment, text }) => {
  const style = `text-[#9CA3AF] text-${alignment} underline mt-4 mb-4`;
  return <p className={style}>{text}</p>;
};
