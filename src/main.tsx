import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import RedirectPage from './Redirect.tsx'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
      <BrowserRouter>
      <Routes>
      <Route path={"/"} element={<RedirectPage />}/>      
      <Route path={"/redirect"} element={<RedirectPage />}/>      
      </Routes>
      </BrowserRouter>
  </StrictMode>,
)
