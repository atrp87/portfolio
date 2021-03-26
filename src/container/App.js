import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Portfolio from '../components/portfolio/Portfolio';
import Navbar from '../components/navigation/Navbar';
import Contact from '../components/contact/Contact';
import About from '../components/about/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <About />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
