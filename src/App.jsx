import React from 'react'
import { InputTask } from './Components/InputTask'
import { DisplayTask } from './Components/DisplayTask'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout} from './Pages/Layout'
import {Home} from './Pages/Home'
import { Details } from './Pages/Details'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route index element={<Home /> } />
          <Route path='details' element={<Details /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
