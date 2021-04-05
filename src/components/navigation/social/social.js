import SocialCSS from './Social.module.css'
import TestCV from '../../../assets/test.pdf';
import React from 'react'

const Social = () => {
  return ( 
    <div className={SocialCSS.socialWrapper}>
      <ul>
        <li tabIndex='1' className={SocialCSS.linkedin}>
          <a href="https://linkedin.com/in/andrew-peattie">
            <span>
              <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            </span>
            <div className={SocialCSS.slider}>
              <p>LINKEDIN</p>
            </div>
          </a>
        </li>
        <li tabIndex='2' className={SocialCSS.github}>
          <a href="https://github.com/atrp87">
            <span>
              <i className="fab fa-github" aria-hidden="true"></i>
            </span>
            <div className={SocialCSS.slider}>
              <p>GITHUB</p>
            </div>
          </a>
        </li>
        <li tabIndex='2' className={SocialCSS.email}>
          <a href="mailto:drewpeattie@hotmail.com?subject=Hello Andrew">
            <span>
              <i className="far fa-envelope" aria-hidden="true"></i>
            </span>
            <div className={SocialCSS.slider}>
              <p>EMAIL</p>
            </div>
          </a>
        </li>

        {/* Link CV PDF  */}

        <li tabIndex='4' className={SocialCSS.resume}>
          <a href={TestCV}>
          <i className="fas fa-file" aria-hidden="true"></i>
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