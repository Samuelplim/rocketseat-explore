import { LinkLight, InputLarge, HeaderTitle, ButtonLarge } from ".";
import OptionsSVG from "../assets/options.svg";
import ReceiptSVG from "../assets/Receipt.svg";

export const NavMenu = () => {
  return (
    <nav className="absolute top-0 left-0 pt-16 pb-6 w-full flex justify-around items-center bg-dark-700">
      <img alt="Button Options" src={OptionsSVG} />
      <HeaderTitle heightH1="text-xl" heightImg="h-7" />
      <img alt="Button Receipts" src={ReceiptSVG} />
    </nav>
  );
};
