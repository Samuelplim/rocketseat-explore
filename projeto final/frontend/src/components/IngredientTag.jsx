import { useState } from "react";
import { PlusSmallIcon, XMarkIcon } from "@heroicons/react/24/outline";

export const IngredientTag = ({ isNew, value, onClick, ...rest }) => {
  const [onFocus, setonFocus] = useState(false);
  return (
    <div
      className={`flex flex-col px-4 py-2 justify-center items-start rounded-lg ${
        isNew ? " border-light-500 border-2 border-dashed" : "bg-light-600"
      }`}
    >
      <div className="flex items-center gap-2">
        <input
          type="text"
          className={`w-20 rounded-lg outline-none ${
            isNew ? "bg-transparent" : "bg-light-600"
          }`}
          placeholder={value}
          value={value}
          readOnly={!isNew}
          {...rest}
        />

        <button type="button" onClick={onClick}>
          {isNew ? (
            <PlusSmallIcon className="h-5 w-5" />
          ) : (
            <XMarkIcon className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
};
