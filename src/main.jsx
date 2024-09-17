
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './page/Home.jsx'
import RootLayout from './page/RootLayout'
import Abc from '@page/Abc'
import Edf from '@page/Edf'



const router = createBrowserRouter([
  {
    element: <RootLayout />, // cấu hình các component chung
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/acb",
        element: <Abc/>
      },
      {
        path: "/def",
        element: <Edf/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <RouterProvider router={router} />


  //</StrictMode>,
)
