import SocialCSS from './Social.module.css';
import React from 'react'

import TestCV from '../../../assets/test.pdf';


const Social = () => {
  return ( 
    <div className={SocialCSS.socialWrapper}>
      <ul>
        <li className={SocialCSS.linkedin}>
          <a href="https://linkedin.com/in/andrew-peattie">
            <i className="fab fa-linkedin-in"></i>
            <div className={SocialCSS.slider}>
              <p>LINKEDIN</p>
            </div>
          </a>
        </li>
        <li className={SocialCSS.github}>
          <a href="https://github.com/atrp87">
            <i className="fab fa-github"></i>
            <div className={SocialCSS.slider}>
              <p>GITHUB</p>
            </div>
          </a>
        </li>
        <li className={SocialCSS.email}>
          <a href="mailto:drewpeattie@hotmail.com?subject=Hello Andrew">
            <i className="far fa-envelope"></i>
            <div className={SocialCSS.slider}>
              <p>EMAIL</p>
            </div>
          </a>
        </li>

{/* Link CV PDF  */}

        <li className={SocialCSS.resume}>
          <a href={TestCV}>
            <i className="far fa-file-alt"></i>
            <div className={SocialCSS.slider}>
              <p>RESUME</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;