import { CardPlate, NavMenu } from "../components";
import Bolachas from "../assets/imgs/bolachasDeFrutas.png";

export const HomePage = () => {
  const item = {
    uri: "../assets/menu/Maskgroup-2.png",
    title: "Salada Ravanello",
    price: "R$ 49,97",
  };
  return (
    <main className="bg-dark-400 flex flex-col h-screen justify-center items-center">
      <NavMenu />
      <div className=" flex bg-gradient-to-t from-dark-600 to-dark-1000 rounded-sm px-5 pt-8 pb-4 mr-4 ml-9">
        <div className="h-10 w-10">
          <img
            src={Bolachas}
            alt="teste"
            className="overflow-x-visible relative h-48 w-full -top-16 object-cover m-auto opacity-80"
          />
        </div>
        <div className="ml-20">
          <p className="text-light-300 text-base font-sans">
            Sabores inigualáveis
          </p>
          <span className="text-xs text-light-300 ">
            Sinta o cuidado do preparo com ingredientes selecionados.
          </span>
        </div>
      </div>
      <CardPlate item={item} />
    </main>
  );
};
