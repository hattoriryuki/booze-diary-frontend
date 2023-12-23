import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "../components/templates/DefaultLayout";
import { Login } from "../components/pages/Login";
import { Top } from "../components/pages/Top";
import { LoginUserProvider } from "../providers/LoginUserProvider";
import { SignUp } from "../components/pages/SignUp";
import { Index } from "../components/pages/Index";

export const Router: FC = memo(() => {
  return (
    <LoginUserProvider>
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
        <Route
          path="/signup"
          element={
            <DefaultLayout>
              <SignUp />
            </DefaultLayout>
          }
        />
        <Route
          path="/index"
          element={
            <DefaultLayout>
              <Index />
            </DefaultLayout>
          }
        />
      </Routes>
    </LoginUserProvider>
  );
});
