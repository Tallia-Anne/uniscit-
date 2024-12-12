import { useRef } from 'react';
import navCSS from './../Nav/Nav.module.css';

function Nav() {
 
  const menu = useRef();

  const menuHandler = () => {
  menu.current.classList.toggle(navCSS.ShowMenu);
}


  return (
    <div className={navCSS.nav_wrapper}>
   <div className={navCSS.logo}>
    <i className="ri-arrow-up-down-line"></i>
    <a href="#">Unis-cité</a>
  </div>

  <ul ref={menu}>
    <li><a href="#home">Home</a></li>
     <li><a href="#about">About</a></li>
       <li><a href="/atelier">Projects</a></li>
       <li><a href="#features">Features</a></li>
       <li><a href="#gallery">Gallery</a></li>
       <li><a href="#testimonials">Testimonials</a></li>
  </ul>


    <div className={navCSS.Nav_btns}>

    <div className={navCSS.social}>
    <i className="ri-facebook-circle-fill"></i>
    <i className="ri-instagram-fill"></i>
    <i className="ri-twitter-x-line"></i>
    </div>

    <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuHandler} ></i>

    </div>

</div>
  )
}

export default Nav