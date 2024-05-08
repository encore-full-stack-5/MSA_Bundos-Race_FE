import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import './index.css';
import App from './App';
import Home from './pages/Home';
import ProductSearch from './pages/ProductSearch';
import ProductDetail from './pages/ProductDetail';
import Test1 from './pages/test1';
import Test2 from './pages/test2';
import MyCart from './pages/MyCart';
import MyOrder from './pages/MyOrder';
import MyReview from './pages/MyReview';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/home", element: <Home/> },
      { path: "/search/category/*", element: <ProductSearch/> },
      { path: "/products/*", element: <ProductDetail/> },
      { path: "/my/cart", element: <MyCart/> },
      { path: "/my/orders", element: <MyOrder/> },
      { path: "/my/review", element: <MyReview/> },
      { path: "/1", element: <Test1/> },
      { path: "/2", element: <Test2/> },
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);