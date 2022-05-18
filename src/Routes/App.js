import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import { Routers } from './Routers'

export const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routers/>
        </BrowserRouter>        
    </div>
  )
}