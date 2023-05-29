import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Error } from './pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "about",
        element: <About />
      },
    ]
  }
])
function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
