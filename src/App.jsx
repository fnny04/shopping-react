import Router from "./route/route";
import { RouterProvider } from "react-router";

const App = () => {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};

export default App;
