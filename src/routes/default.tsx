import { Route, Routes } from "react-router-dom";

import { Base } from "../template";

import { Home } from "../pages";

const DefaultRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default DefaultRouter;
