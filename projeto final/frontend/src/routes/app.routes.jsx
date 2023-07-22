import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { MenuPage } from "../pages/MenuPage";
import { PlatesPage } from "../pages/PlatesPage";
import { OrderedPage } from "../pages/OrderedPage";
import { FavoritesPage } from "../pages/FavoritesPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/plates" element={<PlatesPage />} />
      <Route path="/ordered" element={<OrderedPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}
