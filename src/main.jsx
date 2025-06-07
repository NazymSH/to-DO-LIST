import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Kino from './Kino'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Kino/>
  </StrictMode>,
)
