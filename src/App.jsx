
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/contact/Contact';
import NotFound from './components/NotFound/NotFound';

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Home></Home> },
        { path: "about", element: <About></About> },
        { path: "portfolio", element: <Portfolio></Portfolio> },
        { path: "contact", element: <Contact></Contact> },
        { path: "*", element: <NotFound></NotFound> },
      ],
    },
  ]);

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
