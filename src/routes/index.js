import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../views/Home.jsx'

const router = () => {
  return( 
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default router