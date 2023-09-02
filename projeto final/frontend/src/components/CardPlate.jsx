import { useState } from "react";
import {
  HeartIcon,
  PencilSquareIcon,
  ChevronRightIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";

import { useAuth } from "../hooks/auth";
import { Link } from "react-router-dom";

export const CardPlate = ({ item }) => {
  const [amount, setAmount] = useState(1);
  const { user } = useAuth();

  const incrementAmount = () => {
    if (amount === 10) return;
    setAmount((prevAmount) => prevAmount + 1);
  };

  const decrementAmount = () => {
    if (amount > 1) {
      setAmount((prevAmount) => prevAmount - 1);
    }
  };
  const linkedPlate = () => {};

  return (
    <div className="relative p-6 w-52">
      {user.IsAdmin ? (
        <button className="absolute right-4 top-4" onClick={linkedPlate}>
          <HeartIcon className="h-5 w-5" />
        </button>
      ) : (
        <Link className="absolute right-4 top-4" to={"/edit"}>
          <PencilSquareIcon className="h-5 w-5" />
        </Link>
      )}

      <div>
        <div className="flex flex-col gap-3 mb-4">
          {item.uri ? (
            <img src={() => require(item.uri)} alt="Foto da comida" />
          ) : (
            <div className="h-20 w-20 m-auto flex items-center justify-center bg-slate-700 rounded-full">
              <p className="">Sem foto</p>
            </div>
          )}
          <div className="flex items-center justify-center">
            <p>{item.name}</p> <ChevronRightIcon className="h-5 w-5" />
          </div>

          <p className="text-center font-roboto text-tints-cake-200">
            {item.price}
          </p>

          <div className="flex justify-center gap-2">
            <button onClick={incrementAmount}>
              <PlusIcon className="h-5 w-5" />
            </button>
            <p>{amount}</p>
            <button onClick={decrementAmount}>
              <MinusIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <button className="bg-tints-tomato-100 w-full rounded-md text-sm py-1">
          incluir
        </button>
      </div>
    </div>
  );
};
