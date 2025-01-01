import { memo } from "react";

import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router";

import BaseLayout from "@/components/BaseLayout";
import Login from "@/containers/Authentication/screens/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Login />} />
        </Route>
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default memo(Routes);
