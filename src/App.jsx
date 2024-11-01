import React from 'react'
import {
  Route,
  createBrowserRouter ,
  createRoutesFromElements ,
  RouterProvider
} from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Homepage from './pages/Homepage'
import ViewPost from './pages/ViewPost'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
      <Route index element={<Homepage/>}/>
      <Route path='/posts/:postId' element={<ViewPost/>}/>
  </Route>)
)

const App = () => {
  return <RouterProvider router={router}/>
}

export default App

