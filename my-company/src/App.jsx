import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pagelayout from './components/layout/PageLayout';
import Home from './Home';
import Contact from './Contact';
import Services from './Services'
import About from './About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Pagelayout/>,
    children: [
      {
        path: '/',
        index: true,
        element: <Home/>
      },

      {
        path: '/contact',
        element: <Contact/>
      },

      {
        path: '/services',
        element: <Services/>
      }, 
      
      {
        path: '/about',
        element: <About/>
      },
    ],
  },
]);

function App() {
    return  <RouterProvider router={router}/>;
}

export default App;
