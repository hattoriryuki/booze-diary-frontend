import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "../components/templates/DefaultLayout";
import { Login } from "../components/pages/Login";
import { Top } from "../components/pages/Top";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        }
      />
      <Route
        path="/login"
        element={
          <DefaultLayout>
            <Login />
          </DefaultLayout>
        }
      />
    </Routes>
  );
});
