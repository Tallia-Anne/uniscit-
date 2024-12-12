import projectCSS from '../../Components/Project/Project.module.css'

import projectImg1 from '../../assets/images/téléchargement.jpeg'
import projectImg2 from '../../assets/images/ScreenShot Tool -20241211111146.png';
import projectImg3 from '../../assets/images/ScreenShot Tool -20241211111146.png';
import projectImg4 from '../../assets/images/ScreenShot Tool -20241211111146.png';

function Project () {

return (
        <div className={`${projectCSS.project_wrapper} section`}>
            <h2>Atelier numérique</h2>
            <p className={projectCSS.paragraph}>Lorem ipsum dolor sit amet.</p>
        <div className={projectCSS.projectCards}>

        <div className={projectCSS.projectCard}>
        <img src={projectImg1} alt="" />

        <div className={projectCSS.Content}>
            <h3>Atelier nom</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit laudantium quidem.</p>
        </div>

        </div>

         <div className={projectCSS.projectCard}>
        <img src={projectImg2} alt="" />
         <div className={projectCSS.Content}>
            <h3>Atelier nom</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit laudantium quidem.</p>
        </div>
        </div>

         <div className={projectCSS.projectCard}>
        <img src={projectImg3} alt="" />
         <div className={projectCSS.Content}>
            <h3>Atelier nom</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit laudantium quidem.</p>
        </div>
        </div>


         <div className={projectCSS.projectCard}>
        <img src={projectImg4} alt="" />

         <div className={projectCSS.Content}>
            <h3>Atelier nom</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit laudantium quidem.</p>
        </div>

        </div>


        </div>

        </div>
    )

}

export default Project