import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Blog } from './blog/Blog'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
        </Route>
        <Route path='/blog' element={<Blog/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
