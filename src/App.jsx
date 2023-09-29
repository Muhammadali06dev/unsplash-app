import { createBrowserRouter, RouterProvider } from "react-router-dom"
//pages
import RootLayout from "./pages/RootLayout/RootLayout"
import Home from "./pages/Home/Home"
import Search from "./pages/Search/Search"
function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "search",
          element: <Search />
        }
      ]
    }
  ])
  return <RouterProvider router={routes} />
}

export default App
