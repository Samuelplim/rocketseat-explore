export const ButtonLarge = ({ title, ...rest }) => {
  return (
    <button
      {...rest}
      className="w-full px-3.5 py-3 rounded-md text-sm bg-tints-tomato-100 hover:bg-tints-tomato-200 disabled:bg-tints-tomato-400"
    >
      {title}
    </button>
  );
};
