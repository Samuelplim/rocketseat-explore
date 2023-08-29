import { useState } from "react";

export const InputLarge = ({ title, placeholder, icon, ...rest }) => {
  const [onFocus, setonFocus] = useState(false);
  return (
    <div className="w-full flex flex-col items-start gap-2">
      <span className="text-light-400">{title}</span>
      <div
        className={`w-full flex bg-dark-900 items-center rounded-lg px-2 py-2 ${
          onFocus ? "border-2 border-light-600" : "border-2 border-dark-600"
        }`}
      >
        {icon}
        <input
          placeholder={placeholder}
          type="text"
          className="w-full px-2 bg-dark-900 outline-none"
          onFocus={(e) => setonFocus(true)}
          onBlur={(e) => setonFocus(false)}
          {...rest}
        ></input>
      </div>
    </div>
  );
};
