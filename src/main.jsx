
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './page/Home.jsx'
import RootLayout from './page/RootLayout'
import ModalProvider from '@Context/ModalProvider'




const router = createBrowserRouter([
  {
    element: <RootLayout />, // cấu hình các component chung
    children: [
      {
        path: "/",
        element: <Home />
      },

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <ModalProvider >
    <RouterProvider router={router} />
  </ModalProvider>


)
