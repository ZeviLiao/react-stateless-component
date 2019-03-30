import React from 'react'
import Hello from './Hello';
import Header from './Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const Router = props => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" 
                // component={Header}
                component={() => <Header text="this is banner" age={16} />}
            />
            <Route path="/store/:stored" 
                component={Hello}
            />
        </Switch>
    </BrowserRouter>
  )
}

export default Router
