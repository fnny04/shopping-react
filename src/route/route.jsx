import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Payment from "../views/Payment";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Payment",
    element: <Payment />,
  },
]);

export default Router;
