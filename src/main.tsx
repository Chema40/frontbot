import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FrontBot } from './FrontBot'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FrontBot />
  </StrictMode>,
)
