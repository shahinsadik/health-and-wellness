import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Event from './Components/Pages/Event/Event';
import Events from './Components/Pages/Events/Events';
import Team from './Components/Pages/Team/Team';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=>fetch("../data.json")
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/event/:id",
        element:<Event></Event>,
        loader: ()=>fetch("../data.json")
      },
      {
        path:"/events",
        element:<Events></Events>,
        loader: ()=>fetch("../data.json")
      },
      {
        path:"/team",
        element:<Team></Team>,
        loader: ()=>fetch("../data.json")
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
