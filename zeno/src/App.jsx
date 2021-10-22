import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./components/pages/Home"
import Products from "./components/pages/Products"
import Cart from "./components/pages/Cart"
import About from "./components/pages/About"



function App() {
  

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path ="/product" component={Products} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/About" component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
