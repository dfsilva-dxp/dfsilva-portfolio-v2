import { Route, Routes } from "react-router-dom";

import { Base } from "../template";

const DefaultRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<p>Home</p>} />
      </Route>
    </Routes>
  );
};

export default DefaultRoutes;
