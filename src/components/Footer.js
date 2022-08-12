import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container '>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <i class='fab fa-typo3 mr-3' />
             Bomba
            </Link>
          </div>
          <small class='website-rights'>Desa Bomba © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link instagram'
              to={{ pathname: "https://www.instagram.com/jelajahbomba/" }}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to={{ pathname: "https://youtube.com/channel/UCBUgsY_TbIHu0BP1K6SLqNQ" }}
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;