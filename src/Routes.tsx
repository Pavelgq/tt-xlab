import { Routes, Route } from "react-router-dom";
import { Address } from "./pages/Address/Address";
import { News } from "./pages/News/News";

export const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<News />} />
      <Route path="/address" element={<Address />} />
    </Routes>
  );
};
