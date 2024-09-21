
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './page/Home.jsx'
import RootLayout from './page/RootLayout'
import RootLayoutAdmin from './page/RootLayoutAdmin'
import HomePage from '@compoents/Home'
import ModalProvider from '@Context/ModalProvider'
import PlanStrip from '@compoents/PlanTrip'
import Overview from '@compoents/overview'
import Login from '@compoents/Login';
import Register from '@compoents/Register'
import Viewbyid from '@compoents/overview/viewbyid'

import Dashboard from '@compoents/Admin/Doashboard'
import UserList from '@compoents/Admin/UserList'
import TourList from '@compoents/Admin/TourList'
import AddTour from '@compoents/Admin/AddTour'
import Edit from '@compoents/Admin/TourList/Edit'
import TripList from '@compoents/Admin/TripList'
import ForgotPassword from '@compoents/Login/ForgotPassword'
import TourView from '@compoents/overview/tour'






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
      {
        path: "/forgotpassword",
        element: <ForgotPassword/>
      },
      {
        path: "/tour",
        element: <TourView />
      },
      {
        path: "/overview/:tripid",
        element: <Viewbyid />
      },

    ]
  },
  {
    element: <RootLayoutAdmin />,
    children: [
      {
        path: "/admin",
        element: <Dashboard/>
      },
      {
        path: "/admin/users",
        element: <UserList/>
      },
      {
        path: "/admin/tours/all",
        element: <TourList/>
      },
      {
        path: "/admin/tours/add",
        element: <AddTour/>
      },
      {
        path: "/admin/tours/edit/:id",
        element: <Edit/>
      },
      {
        path: "/admin/trip",
        element: <TripList/>
      },
    ]
  },
])
const clientId ='902729761307-c9kib0ukl904i7la1s81hh1201e4ch6t.apps.googleusercontent.com';
createRoot(document.getElementById('root')).render(
  <ModalProvider >
    {/* <GoogleOAuthProvider clientId={clientId}> */}
      <RouterProvider router={router} />
      {/* </GoogleOAuthProvider> */}
  </ModalProvider>


)
