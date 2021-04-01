import { Link } from 'react-router-dom';
import UnknownCSS from "./Unknown.module.css";

const Unknown = () => {
  return ( 
    <div className={UnknownCSS.unknown}>
        <h1>404</h1>
        <p>I'm afraid you've found a page that 
          doesn't exist on my website. That can happen 
          when you follow a link to something that has 
          since been deleted. Or the link was incorrect
          to begin with.
        </p>
        <p>Sorry about that. Click on one of the links 
          below to be redirected.
        </p>
        <ul>
          <li>
            <Link to="/">about</Link>
          </li>
          <li>
            <Link to="/portfolio">portfolio</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
    </div>
  );
}

export default Unknown;