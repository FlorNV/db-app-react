import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";

const Header = lazy(() => import("../components/Header"));
const MenScreen = lazy(() => import("../pages/MenScreen"));
const WomenScreen = lazy(() => import("../pages/WomenScreen"));
const SearchScreen = lazy(() => import("../pages/SearchScreen/SearchScreen"));
const CharacterScreen = lazy(() =>
  import("../pages/CharacterScreen/CharacterScreen")
);

const AppRouter = () => {
  return (
    <Suspense fallback={<h1 className="text-center mt-5">Loading...</h1>}>
      <Header />
      <Routes>
        <Route path="/men" element={<MenScreen />} />
        <Route path="/women" element={<WomenScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/character/:id" element={<CharacterScreen />} />
        <Route path="*" element={<Navigate to="/men" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
