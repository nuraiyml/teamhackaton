import React from "react";
import { Route, Routes } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";
import Catalog from "./components/Каталог/Catalog";
import Myivi from "./components/Мой ivi/Myivi";
import Profile from "./components/Профиль/Profile";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/myivi" element={<Myivi />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
