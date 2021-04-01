import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Unknown from '../components/navigation/unknown/Unknown';
import Navbar from '../components/navigation/navbar/Navbar';
import Social from '../components/navigation/social/social';
import Portfolio from '../components/portfolio/Portfolio';
import Contact from '../components/contact/Contact';
import About from '../components/about/About';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Social />
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
              <Route path="*">
                <Unknown />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
