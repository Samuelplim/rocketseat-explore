import { ListHorizontal, NavMenu } from "../components";
import Bolachas from "../assets/imgs/bolachasDeFrutas.png";
import { useEffect, useState } from "react";
import { indexPlates } from "../services/plates.service";

export const HomePage = () => {
  const [plates, setPlates] = useState([]);

  useEffect(() => {
    const fetchPlates = async () => {
      const response = await indexPlates();
      setPlates(response.data);
    };

    fetchPlates();
  }, []);
  return (
    <main className="bg-dark-400 flex flex-col h-screen justify-center items-center">
      <NavMenu />
      <div className="relative ml-4">
        <div className="absolute  bottom-0 -left-16 opacity-80 overflow-hidden w-48 h-36">
          <img src={Bolachas} alt="teste" className="w-full translate-y-1/1" />
        </div>
        <div className="w-[376px] h-[120px] rounded-sm px-5 pt-8 pb-4 pl-32 bg-gradient-to-t from-dark-600 to-dark-1000">
          <p className="text-light-300 text-base font-sans font-semibold">
            Sabores inigualáveis
          </p>
          <span className="text-xs text-light-300 ">
            Sinta o cuidado do preparo com ingredientes selecionados.
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-14">
        <p>Refeições</p>
        <ListHorizontal data={plates} />
      </div>
    </main>
  );
};
