import Card_Atelier from '../Card/Card_Atelier';
import sectionAtelierCSS from './Section_Atelier.module.css'
import ateliers from '../../assets/ateliers';

function Section_Atelier () {

return (
   <div className={sectionAtelierCSS.wrapper_sectionAtelier}>
      {ateliers.map((atelier) => (
        <Card_Atelier
          key={atelier.id}
          title={atelier.title}
          description={atelier.description}
          technologies={atelier.technologies}
          year={atelier.year}
            image={atelier.image}
            lien ={atelier.lien}
        />
      ))}
    </div>

)

}

export default Section_Atelier;