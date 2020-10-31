import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../views/Home.jsx'
import About from '../views/About.jsx'  

const router = () => {
  return( 
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default router