import aboutcss from './../About/About.module.css'
import  aboutImg from './../../assets/images/pexels-olly-3755440.jpg'
function About () {

return (
    <div className={`${aboutcss.About_wrapper} section`} id='about'>

    <div className={aboutcss.AboutCard}>
        <div className={aboutcss.About_Card_content}>
            <h1>Notre mission  est </h1>
            <p>Nous œuvrons pour une meilleure sensibilisation aux risques numériques en abordant des thèmes essentiels tels que le cyberharcèlement et la sécurité en ligne, afin de former les jeunes à une utilisation plus responsable et sécurisée du numérique.

À travers des ateliers d’initiation au codage, nous introduisons les bases du développement informatique en utilisant des outils accessibles comme Scratch, encourageant ainsi leur créativité numérique.

Enfin, nous proposons des formations sur l’utilisation constructive du numérique, permettant aux jeunes de mieux comprendre et maîtriser les outils digitaux pour les utiliser de manière efficace et positive.</p>
            <button>About us <i className='ri-arrow-right-up-line'></i></button>
        </div>
        <div className={aboutcss.About_Card_image}>
        <img src={aboutImg} alt="about-backgroound"  />
        </div>
    </div>

    <div className={aboutcss.About_Content}>

    <div className={aboutcss.about_card}>

    <h3>20k <span>Clients</span> </h3>
    <div className={aboutcss.line}></div>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, odit!</p>

    </div>

     <div className={aboutcss.about_card}>

    <h3>11 <span>Ateliers</span> </h3>
    <div className={aboutcss.line}></div>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, odit!</p>

    </div>

   

    </div>


    </div>

)

}

export default About;