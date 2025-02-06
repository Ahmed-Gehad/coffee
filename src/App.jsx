import React from 'react'

// import for react router to navbar
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'

import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Footer from './components/Footer'
import ContactPage from './pages/ContactPage'
import SupportPage from './pages/SupportPage'
import PricingPage from './pages/PricingPage'

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route >

      <Route path="/" element={<Layout />} >

        <Route index element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='/pricing' element={<PricingPage />} />

      </Route>

      <Route path='/contact' element={<ContactPage />} />

    </Route>

  ))
  return (
    <div >

      <RouterProvider router={router}  />

    </div>
  )
}

export default App