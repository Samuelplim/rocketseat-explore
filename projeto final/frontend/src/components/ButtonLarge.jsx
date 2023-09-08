export const ButtonLarge = ({ title, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={`w-full px-3.5 py-3 rounded-md text-sm ${className} hover:bg-tints-tomato-200 disabled:bg-tints-tomato-400`}
    >
      {title}
    </button>
  );
};
