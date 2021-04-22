import Unknown from '../components/navigation/unknown/Unknown';
import { Route, Switch, useLocation } from 'react-router-dom';
import Navbar from '../components/navigation/navbar/Navbar';
import Social from '../components/navigation/social/social';
import Portfolio from '../components/portfolio/Portfolio';
import Contact from '../components/contact/Contact';
import { AnimatePresence } from 'framer-motion';
import About from '../components/about/About';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <main className="App">
      <nav>
        <Navbar />
        <Social />
      </nav>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
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
        </AnimatePresence>
    </main>
  );
}

export default App;
