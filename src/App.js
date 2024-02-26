import {BrowserRouter, Route, Switch} from 'react-router-dom'

import CreateAccount from './components/CreateAccount'

import Home from './components/Home'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={CreateAccount} />

      <Route exact path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App
