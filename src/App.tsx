import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Error } from './pages/Error';

const router = createBrowserRouter([
  {
    path: "/me",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/me/home",
        element: <Home />
      },
      {
        path: "/me/projects",
        element: <Projects />
      },
      {
        path: "/me/about",
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
