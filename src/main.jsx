
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './page/Home.jsx'
import RootLayout from './page/RootLayout'
import HomePage from '@compoents/Home'




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

    ]
  }
])
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <RouterProvider router={router} />


  //</StrictMode>,
)
