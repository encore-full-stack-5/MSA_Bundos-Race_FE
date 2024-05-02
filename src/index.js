import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import App from './App';
import Home from './pages/Home';
import ProductSearch from './pages/ProductSearch';
import Test1 from './pages/test1';
import Test2 from './pages/test2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/home", element: <Home/> },
      { path: "/search/category", element: <ProductSearch/> },
      { path: "/1", element: <Test1/> },
      { path: "/2", element: <Test2/> },
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);