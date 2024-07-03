import { useState } from 'react'
import "./index.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  } from "react-router-dom";
import Home from '../components/home'
import About from '../components/About';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Finder from '../components/Finder';
import Contact from '../components/contact';
import Profile from '../components/profile';

function App() {
  const routes = createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/feed" element={<Finder />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </>
  )

  const router = createBrowserRouter(routes);


  return (
    <>
            <RouterProvider router={router} />
    </>
  )
}

export default App;
