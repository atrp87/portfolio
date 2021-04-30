import Unknown from '../components/navigation/unknown/Unknown';
import { Route, Switch, useLocation } from 'react-router-dom';
import Navbar from '../components/navigation/navbar/Navbar';
import SideNav from '../components/navigation/sidenav/SideNav';
import Portfolio from '../components/portfolio/Portfolio';
import Contact from '../components/contact/Contact';
import { AnimatePresence } from 'framer-motion';
import Home from '../components/home/Home';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <main className="App">
      <nav>
        <Navbar />
        <SideNav />
      </nav>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path="/">
              <Home />
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
