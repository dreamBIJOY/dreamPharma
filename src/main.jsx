import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root/Root'
import HomePage from './Pages/Home Page/HomePage'
import ShopPage from './Pages/Shop Page/ShopPage'
import DoctorsPage from './Pages/Doctors Page/DoctorsPage'
import AppointmentPage from './Pages/Appointment Page/AppointmentPage'
import BlogPage from './Pages/Blog Page/BlogPage'
import AboutPage from './Pages/About Page/AboutPage'
import ContactPage from './Pages/Contact Page/ContactPage'
import CartPage from './Pages/Cart Page/CartPage'
import LoginPage from './Pages/Login Page/LoginPage'
import SignUpPage from './Pages/SignUp Page/SignUpPage'
import ProductDetails from './Pages/Product Details/ProductDetails'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/shop",
        element: <ShopPage/>,
      },
      {
        path: "/product/:id",
        element: <ProductDetails/>,
      },
      {
        path: "/doctors",
        element: <DoctorsPage/>,
      },
      {
        path: "/appointment",
        element: <AppointmentPage/>,
      },
      {
        path: "/blog",
        element: <BlogPage/>,
      },
      {
        path: "/aboutus",
        element: <AboutPage/>,
      },
      {
        path: "/contactus",
        element: <ContactPage/>,
      },
      {
        path: "/cart",
        element: <CartPage/>,
      },
      {
        path: "/login",
        element: <LoginPage/>,
      },
      {
        path: "/signup",
        element: <SignUpPage/>,
      },
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
