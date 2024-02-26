import {BrowserRouter, Route, Switch} from 'react-router-dom'

import CreateAccount from './components/CreateAccount'

import Home from './components/Home'

import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={CreateAccount} />

      <Route exact path="/home" component={Home} />

      <NotFound />
    </Switch>
  </BrowserRouter>
)

export default App
