import { PolygonIcon } from "../assets/icons";

export const Footer = () => {
  return (
    <footer className="text-sm text-light-700 bg-dark-600 flex gap-1 items-center justify-center py-6">
      <PolygonIcon className="fill-light-700 h-5 w-5" />
      <p className="font-roboto mr-5">food explorer</p>
      <p className="text-light-200">© 2023 - Todos os direitos reservados.</p>
    </footer>
  );
};
