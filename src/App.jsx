import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from './pages/Home/Home'
import Services from "./pages/Services/Services"
import WhoWeAre from "./pages/WhoWeAre/WhoWeAre"
import ServiceRequest from "./pages/ServiceRequest/ServiceRequest"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../node_modules/sweetalert2/'
import WrongPath from "./pages/WrongPath/WrongPath" 
function App() {
  const routes = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "project",
        element: <Home />
      },
      {
        path: "services",
        element: <Services />

      },
      {
        path: "requestService",
        element: <ServiceRequest />
      },
      {
        path: "whoWeAre",
        element: <WhoWeAre />
      },

    ],
  },
  {
    path: "*",
    element: <WrongPath />
  }

  ])
  return <>
    <RouterProvider router={routes} />
  </>
}
export default App
