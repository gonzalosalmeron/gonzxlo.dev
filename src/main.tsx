import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import ReactDOM from 'react-dom/client'

import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

import Home from '@/pages/Home/Page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='min-h-screen bg-black'>
      <Nav />
      <RouterProvider router={router} />
      <Footer />
    </div>
  </React.StrictMode>
)
