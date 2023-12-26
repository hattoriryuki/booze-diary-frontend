import { Index } from "../components/pages/Index";
import { Login } from "../components/pages/Login";
import { PostCreation } from "../components/pages/PostCreation";
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
    path: "/index",
    element: <Index />,
  },
  {
    path: "/new",
    element: <PostCreation />,
  },
];