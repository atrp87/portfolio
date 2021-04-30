import SideNavCSS from './SideNav.module.css';
import React from 'react'

import TestCV from '../../../assets/test.pdf';

const SideNav = () => {
  return ( 
<aside id={SideNavCSS.stickySocial}>
  <ul>
      <li>
        <a 
          href='https://linkedin.com/in/andrew-peattie' 
          className={`${SideNavCSS} entypo-linkedin`} 
          target='_blank' rel='noreferrer'>
          <span>LinkedIn</span>
        </a>
      </li>
      <li>
        <a 
          href='https://github.com/atrp87' 
          className={`${SideNavCSS} entypo-github`} 
          target='_blank' rel='noreferrer'>
          <span>GitHub</span>
        </a>
      </li>
      <li>
        <a 
          href='mailto:drewpeattie@hotmail.com?subject=Hello Andrew' 
          className={`${SideNavCSS} entypo-mail`} 
          target='_blank' rel='noreferrer'>
          <span>Email</span>
        </a>
    </li>
    <li>
      <a 
        href={TestCV} 
        className={`${SideNavCSS} entypo-user`}
        target='_blank' rel='noreferrer'>
        <span>Resume</span>
      </a>
    </li>
  </ul>
</aside>
  );
}

export default SideNav;
