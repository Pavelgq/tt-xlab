import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { Address } from "./pages/Address/Address";
import { News } from "./pages/News/News";

export const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<News />} />
        <Route path="address" element={<Address />} />
      </Route>
    </Routes>
  );
};
