import { createBrowserRouter } from "react-router-dom";
import Projects from "./pages/Projects/Projects";
import Hobbies from "./pages/Hobbies/Hobbies";
import Hero from "./pages/Hero/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/hobbies",
    element: <Hobbies />,
  },
]);

export default router;
