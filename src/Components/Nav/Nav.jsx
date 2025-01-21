import { useRef } from 'react'; 
import navCSS from './../Nav/Nav.module.css';
import { Link } from "react-router-dom";

function Nav() {
  const menu = useRef();

  const menuHandler = () => {
    if (menu.current) {
      menu.current.classList.toggle(navCSS.ShowMenu);
    }
  }

  return (
    <div className={navCSS.nav_wrapper}>
      <div className={navCSS.logo}>
        <i className="ri-arrow-up-down-line"></i>
        <Link to="/">Unis-cité</Link>
      </div>

      <ul ref={menu}>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">A propos</Link></li>
        <li><Link to="/atelier">Ateliers</Link></li>
        <li><a href="#gallery">Galerie</a></li>
        <li><a href="#testimonials">Témoignages</a></li>
      </ul>

      <div className={navCSS.Nav_btns}>
        <div className={navCSS.social}>
          <a><i className="ri-facebook-circle-fill"></i></a>
          <a href="https://www.instagram.com/uniscite95/"><i className="ri-instagram-fill"></i></a>
          <a href=""><i className="ri-twitter-x-line"></i></a>
        </div>

        <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuHandler}></i>
      </div>
    </div>
  );
}

export default Nav;
