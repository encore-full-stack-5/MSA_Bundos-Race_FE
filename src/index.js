import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import ProductSearch from "./pages/ProductSearch";
import ProductDetail from "./pages/ProductDetail";
import Test1 from "./pages/test1";
import Test2 from "./pages/test2";
import MyCart from "./pages/MyCart";
import MyOrder from "./pages/MyOrder";
import MyReview from "./pages/MyReview";
import Login from "./pages/Login";
<<<<<<< HEAD
import Payment from "./pages/Payment";
=======
import CanWriteReview from "./pages/CanWriteReview";
import ReviewWrite from "./pages/ReviewWrite";
>>>>>>> fd4061b007a617cc626f162383288fdecfcea531

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
<<<<<<< HEAD
      { path: "/login", element: <Login /> },
=======
>>>>>>> fd4061b007a617cc626f162383288fdecfcea531
      { path: "/search/category/*", element: <ProductSearch /> },
      { path: "/products/*", element: <ProductDetail /> },
      { path: "/my/cart", element: <MyCart /> },
      { path: "/my/orders", element: <MyOrder /> },
<<<<<<< HEAD
      { path: "/orders", element: <Payment /> },
      { path: "/my/review", element: <MyReview /> },
=======
      { path: "/my/review", element: <MyReview /> },
      { path: "/my/writable-review", element: <CanWriteReview /> },
      { path: "/review-write", element: <ReviewWrite /> },
>>>>>>> fd4061b007a617cc626f162383288fdecfcea531
      { path: "/1", element: <Test1 /> },
      { path: "/2", element: <Test2 /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
