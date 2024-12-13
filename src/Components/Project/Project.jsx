import projectCSS from '../../Components/Project/Project.module.css'

import projectImg1 from '../../assets/images/Minecraft-style.webp'
import projectImg2 from '../../assets/images/_82cfd2ed-1e37-490b-9afc-2782db4754c3.jpeg';
import projectImg3 from '../../assets/images/_86284232-81c0-4c6a-855b-4b6160287324.jpeg';
import projectImg4 from '../../assets/images/diversite.webp';

function Project () {

return (
        <div className={`${projectCSS.project_wrapper} section`}>
            <h2>Atelier numérique</h2>
            <p className={projectCSS.paragraph}>Permet d'apprendre les bases du numérique, de la sécurité en ligne au codage, tout en favorisant l'inclusion et l'autonomie dans un monde digital.</p>
        <div className={projectCSS.projectCards}>

        <div className={projectCSS.projectCard}>
        <img src={projectImg1} alt="" />

        <div className={projectCSS.Content}>
            <h3>Minecraft Adventurer</h3>
            <p>Cet atelier est un jeu inspiré de Minecraft Adventurer, conçu pour initiation au code.</p>
        </div>

        </div>

         <div className={projectCSS.projectCard}>
        <img src={projectImg2} alt="" />
         <div className={projectCSS.Content}>
            <h3>Découverte de Scratch</h3>
            <p>Cet atelier initie aux bases de Scratch pour créer des projets interactifs.</p>
        </div>
        </div>

         <div className={projectCSS.projectCard}>
        <img src={projectImg3} alt="" />
         <div className={projectCSS.Content}>
            <h3>Lamb: Jam Session Intro</h3>
            <p>Cet atelier permet de créer de la musique et est conçu pour l'initiation au code.</p>
        </div>
        </div>


         <div className={projectCSS.projectCard}>
        <img src={projectImg4} alt="" />

         <div className={projectCSS.Content}>
            <h3>Atelier sur la cyberharcelement sur la discrimination</h3>
            <p> Apprendre c'est quoi la cyberharcelement concernant la discrimination</p>
        </div>

        </div>

        

        </div>


            {/* <div className={projectCSS.Project_all_button}>
              <button>Tous les ateliers <i className='ri-arrow-right-line'></i> </button>
            </div> */}

        </div>
    )

}

export default Project