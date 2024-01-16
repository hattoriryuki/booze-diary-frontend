import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "../components/templates/DefaultLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";
import { homeRoutes } from "./HomeRoutes";
import { postRoutes } from "./PostRoutes";

export const Router: FC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        {homeRoutes.map((route) => (
          <Route
            key={route.path}
            path={`${route.path}`}
            element={<DefaultLayout>{route.element}</DefaultLayout>}
          />
        ))}
        <Route path="/posts">
          {postRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<DefaultLayout>{route.element}</DefaultLayout>}
            />
          ))}
        </Route>
      </Routes>
    </LoginUserProvider>
  );
});
