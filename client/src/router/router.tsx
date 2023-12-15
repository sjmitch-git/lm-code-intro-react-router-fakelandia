import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Confession from "../pages/confession";
import Misdemeanour from "../pages/misdemeanour ";
import NotFound from "../pages/notfound";
import MainLayout from "../layouts/main_layout";

const Router = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="confession" element={<Confession />} />
      <Route path="misdemeanour" element={<Misdemeanour />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default Router;
