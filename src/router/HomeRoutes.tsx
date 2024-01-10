import { Detail } from "../components/pages/Detail";
import { Index } from "../components/pages/Index";
import { Login } from "../components/pages/Login";
import { PostCreation } from "../components/pages/PostCreation";
import { UserDetail } from "../components/pages/UserDetail";
import { SignUp } from "../components/pages/SignUp";
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
    path: "/new",
    element: <PostCreation />,
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
