import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { MenuPage } from "../pages/MenuPage";
import { PreviewPlate } from "../pages/PreviewPlate";
import { OrderedPage } from "../pages/OrderedPage";
import { FavoritesPage } from "../pages/FavoritesPage";
import { PlatesNewPage } from "../pages/PlatesNewPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/plates/:id?" element={<PreviewPlate />} />
      <Route path="/plates/new/:id?" element={<PlatesNewPage />} />
      <Route path="/ordered" element={<OrderedPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}
