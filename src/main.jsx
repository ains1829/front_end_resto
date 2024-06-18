import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail_Cart from "./components/cart/detail/Detail_Cart.jsx";
import AllCart from "./components/cart/AllCart.jsx";
import Home from "./components/home/Home.jsx";
import BoiteCart from "./components/cart/BoiteCart.jsx";
const rooter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element : <Home />
      },
      {
        path: "Carts",
        element: <BoiteCart />,
        children: [
          {
            index : true ,
            element : <AllCart />
            
          },
          {
            path: ":id/detail",
            element : <Detail_Cart />
          }
        ]
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={rooter} />
  </React.StrictMode>
);
