import { Creation } from "../components/pages/post/Creation";
import { Detail } from "../components/pages/post/Detail";
import { Index } from "../components/pages/post/Index";

export const postRoutes = [
  {
    path: "",
    element: <Index />,
  },
  {
    path: "new",
    element: <Creation />,
  },
  {
    path: ":id",
    element: <Detail />,
  },
];
