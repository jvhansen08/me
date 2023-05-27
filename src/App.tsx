import { Root } from './pages/Root';
import { Home } from './pages/Home';
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/home",
        element: <Home />
      }
    ]
  }
])
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
