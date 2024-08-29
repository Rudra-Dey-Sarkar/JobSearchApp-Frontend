import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PlatformProvider } from './components/Global Data/PlatformContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
//import Login from './components/Login/Login';
import SignUp from './components/Signup/Signup'
import User from './components/User/User';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Homepage />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login />
        <Footer />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Navbar />
        <SignUp />
        <Footer />
      </>
    ),
  },
  {
    path: "/user",
    element: (
      <>
        <Navbar />
        <User />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return (
    <div className="App">
   Test
    </div>

  );
}

export default App;
