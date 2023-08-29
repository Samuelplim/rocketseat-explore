import { useState } from "react";
import {
  Bars4Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { ButtonLarge, Footer, HeaderTitle, InputLarge } from ".";
import ReceiptSVG from "../assets/Receipt.svg";

export const NavMenu = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  function modalOpen() {
    return (
      <div className="fixed inset-0 z-10 bg-dark-400 overflow-auto">
        <div className="pt-16 pb-6 w-full flex bg-dark-700">
          <button onClick={(e) => setmodalIsOpen(false)}>
            <XMarkIcon className="h-8 w-8 text-white mr-4" />
          </button>
          <p className="text-light-100 text-xl font-roboto">Menu</p>
        </div>
        <div className="px-7 pt-9 flex flex-col gap-9">
          <InputLarge
            placeholder="Busque por pratos ou ingredientes"
            icon={<MagnifyingGlassIcon className="h-8 w-8 text-white" />}
          />
          <button className="p-2 text-2xl w-full flex justify-self-start">
            Sair
          </button>
        </div>
        <div className="w-full absolute left-0 bottom-0">
          <Footer />
        </div>
      </div>
    );
  }
  function modalClose() {
    return (
      <div className="absolute top-0 left-0 pt-16 pb-6 w-full flex justify-around items-center bg-dark-700">
        <button onClick={(e) => setmodalIsOpen(true)}>
          <Bars4Icon className="h-8 w-8 text-white" />
        </button>
        <HeaderTitle heightH1="text-xl" heightImg="h-7" />
        <img alt="Button Receipts" src={ReceiptSVG} />
      </div>
    );
  }
  return (
    <nav className="absolute top-0 left-0 pt-16 pb-6 w-full flex justify-around items-center bg-dark-700">
      {modalIsOpen ? modalOpen() : modalClose()}
    </nav>
  );
};
