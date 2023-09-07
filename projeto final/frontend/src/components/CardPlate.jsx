import { useState } from "react";
import {
  HeartIcon,
  PencilSquareIcon,
  ChevronRightIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";

import { useAuth } from "../hooks/auth";
import { useNavigate } from "react-router-dom";

export const CardPlate = ({ item }) => {
  const [amount, setAmount] = useState(1);
  const { user } = useAuth();
  const navigate = useNavigate();

  const goEditPlate = (id) => {
    navigate(`/plates/new/${id}`);
  };
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
    <div className="relative">
      {user.IsAdmin ? (
        <button className="absolute right-4 top-4" onClick={linkedPlate}>
          <HeartIcon className="h-5 w-5" />
        </button>
      ) : (
        <button
          className="absolute right-4 top-4"
          onClick={() => goEditPlate(item.id)}
        >
          <PencilSquareIcon className="h-5 w-5" />
        </button>
      )}

      <div className="h-full w-52 p-6 flex flex-col gap-3 justify-between items-center">
        {item.uri ? (
          <img src={() => require(item.uri)} alt="Foto da comida" />
        ) : (
          <div className="h-20 w-20 m-auto flex justify-center items-center  bg-slate-700 rounded-full">
            <p>Sem foto</p>
          </div>
        )}
        <div className="flex items-center gap-1">
          <p className="text-sm">{item.name}</p>{" "}
          <ChevronRightIcon className="h-3 w-3" />
        </div>

        <p className="font-roboto text-tints-cake-200">R$ {item.price}</p>

        <div className="flex justify-center gap-2">
          <button onClick={incrementAmount}>
            <PlusIcon className="h-5 w-5" />
          </button>
          <p>{amount}</p>
          <button onClick={decrementAmount}>
            <MinusIcon className="h-5 w-5" />
          </button>
        </div>

        <button className="bg-tints-tomato-100 w-full rounded-md text-sm py-1">
          incluir
        </button>
      </div>
    </div>
  );
};
