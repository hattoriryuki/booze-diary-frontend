import { Detail } from "../components/pages/post/Detail";
import { Index } from "../components/pages/post/Index";
import { Login } from "../components/pages/auth/Login";
import { Creation } from "../components/pages/post/Creation";
import { Detail as UserDetail } from "../components/pages/user/Detail";
import { SignUp } from "../components/pages/auth/SignUp";
import { Top } from "../components/pages/Top";

export const homeRoutes = [
  {
    path: "",
    element: <Top />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/posts",
    element: <Index />,
  },
  {
    path: "/posts/new",
    element: <Creation />,
  },
  {
    path: "/posts/:id",
    element: <Detail />,
  },
  {
    path: "/users/:id",
    element: <UserDetail />,
  },
];
