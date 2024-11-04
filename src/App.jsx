import { createBrowserRouter, RouterProvider } from "react-router-dom"
import  Home  from "./components/Home"
import  Order  from "./orders/Order"
import Menu from "./components/Menu/Menu"
import Career from "./components/Career/Career"
import Offer from "./components/Offers/Offer"
import Restaurant from "./components/Restaurant/Restaurant"
import Realnews from "./components/News/Realnews"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "order",
    element: <Order/>
  },
  {
    path: "menu",
    element: <Menu />
  },
  {
    path: "Career",
    element: <Career />
  },
  {
    path: "offer",
    element: <Offer />
  },
  {
    path: "restaurant",
    element: <Restaurant />
  },
  {
    path: "news",
    element: <Realnews />
  }
])
function App() {

  return (
    <RouterProvider router= { router } />
  )
}

export default App