import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './component/Layout/MainLayout'
// import Home from './component/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLayout />
    {/* <Home /> */}
  </StrictMode>,
)
