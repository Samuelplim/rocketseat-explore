import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bars4Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import { Footer, HeaderTitle, InputLarge } from ".";

import ReceiptSVG from "../assets/Receipt.svg";
import { useAuth } from "../hooks/auth";

export const NavMenu = () => {
  const { signOut, user } = useAuth();
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const signOutApp = () => {
    const isSignOut = confirm("Você quer sair?");
    isSignOut && signOut();
  };

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
          <Link
            className="p-2 text-2xl w-full flex justify-self-start border-b-2 border-dark-1000"
            to={"/plates/new"}
          >
            Novo prato
          </Link>
          <button
            className="p-2 text-2xl w-full flex justify-self-start border-b-2 border-dark-1000"
            onClick={signOutApp}
          >
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
      <div className="pt-16 pb-6 w-full flex justify-around items-center bg-dark-700">
        <button onClick={(e) => setmodalIsOpen(true)}>
          <Bars4Icon className="h-8 w-8 text-white" />
        </button>
        <div className="flex items-center gap-2">
          <HeaderTitle heightH1="text-xl" heightImg="h-7" />
          <p className="text-tints-cake-200 font-roboto text-sm">admin</p>
        </div>
        {user.isAdmin ? (
          <div className="h-5 w-5"></div>
        ) : (
          <img alt="Button Receipts" src={ReceiptSVG} />
        )}
      </div>
    );
  }
  return (
    <nav className="w-full flex justify-around items-center bg-dark-700">
      {modalIsOpen ? modalOpen() : modalClose()}
    </nav>
  );
};
