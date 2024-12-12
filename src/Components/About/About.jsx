import aboutcss from './../About/About.module.css'
import  aboutImg from './../../assets/images/pexels-olly-3755440.jpg'
function About () {

return (
    <div className={`${aboutcss.About_wrapper} section`} id='about'>

    <div className={aboutcss.AboutCard}>
        <div className={aboutcss.About_Card_content}>
            <h1>Notre mission  est </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam aut eligendi sit?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus fuga reiciendis iste?</p>
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

    <h3>564 <span>Ateliers</span> </h3>
    <div className={aboutcss.line}></div>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, odit!</p>

    </div>

     <div className={aboutcss.about_card}>

    <h3>564 <span>Ateliers</span> </h3>
    <div className={aboutcss.line}></div>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, odit!</p>

    </div>

    </div>


    </div>

)

}

export default About;