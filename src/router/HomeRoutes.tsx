import { Login } from "../components/pages/auth/Login";
import { Detail as UserDetail } from "../components/pages/user/Detail";
import { SignUp } from "../components/pages/auth/SignUp";
import { Top } from "../components/pages/Top";
import { Profile } from "../components/pages/user/Profile";

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
    path: "/users/:id",
    element: <UserDetail />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];
