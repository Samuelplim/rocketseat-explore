import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ChevronLeftIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";

import { useAuth } from "../hooks/auth";
import { ButtonLarge, Footer, NavMenu } from "../components";
import { findByIdPlate } from "../services/plates.service";
import { api } from "../apis/api";
import { ReceiptIcon } from "../assets/icons";

export const PreviewPlate = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [plate, setPlate] = useState({
    category: "",
    created_at: "",
    description: "",
    id: 0,
    image: "",
    ingredients: [],
    name: "",
    price: "",
    updated_at: "",
  });
  const [amount, setAmount] = useState(1);

  const imageUrl = plate.image && `${api.getUri()}/files/${plate.image}`;
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const goEditPlate = (id) => {
    navigate(`/plates/new/${id}`);
  };

  const renderIngredients = (item) => {
    return (
      <div
        className="place-self-start bg-dark-1000 px-2 py-1 rounded-md"
        key={item}
      >
        <p>{item}</p>
      </div>
    );
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

  useEffect(() => {
    const fetchPlateById = async (id) => {
      const response = await findByIdPlate(id);
      setPlate(response.data);
    };

    fetchPlateById(id);
  }, []);

  return (
    <>
      <NavMenu />
      <main className="bg-dark-400 px-8 pt-3 pb-12 flex flex-col gap-6">
        <button className="flex items-center" onClick={goBack}>
          <ChevronLeftIcon className="h-5 w-5" />
          <p>voltar</p>
        </button>
        {plate.image && (
          <img src={imageUrl} className="" alt="Foto da comida" />
        )}
        <p className="text-xl text-light-300">{plate.name}</p>
        <p className="text-light-300">{plate.description}</p>
        <div className="grid grid-cols-3 gap-4">
          {plate.ingredients.map(renderIngredients)}
        </div>
        {user.isAdmin ? (
          <ButtonLarge
            title={"Editar prato"}
            className={"bg-tints-tomato-100"}
            onClick={() => goEditPlate(id)}
          />
        ) : (
          <div className="flex w-full gap-4 items-center justify-stretch">
            <div className="flex gap-4">
              <MinusIcon className="h-7 w-7" onClick={decrementAmount} />
              <p className="text-2xl">{amount < 10 ? `0${amount}` : amount}</p>
              <PlusIcon className="h-7 w-7" onClick={incrementAmount} />
            </div>
            <button className="w-full text-center py-3 flex gap-1 bg-tints-tomato-100 rounded-md items-center justify-center">
              <ReceiptIcon />
              <p className="text-xs ">pedir ∙ {plate.price}</p>
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};
