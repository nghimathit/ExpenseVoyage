
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './page/Home.jsx'
import RootLayout from './page/RootLayout'
import HomePage from '@compoents/Home'
import ModalProvider from '@Context/ModalProvider'
import PlanStrip from '@compoents/PlanTrip'
import Overview from '@compoents/overview'
import Login from '@compoents/Login';
import Register from '@compoents/Register'




const router = createBrowserRouter([
  {
    element: <RootLayout />, // cấu hình các component chung
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/home",
        element: <HomePage />
      },
      {
        path: "/plant/new",
        element: <PlanStrip />
      },
      {
        path: "/overview",
        element: <Overview />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <ModalProvider >
    <RouterProvider router={router} />
  </ModalProvider>


)
