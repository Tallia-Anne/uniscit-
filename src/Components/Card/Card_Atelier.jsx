import cardAtelierCss from '../Card/Card_Atelier.module.css'
import { Link } from 'react-router-dom';


function Card_Atelier ({ id, title, description, technologies, year, image, lien })  {
  
    return (
      <div className={cardAtelierCss.cardAtelier_wrapper}
        >  
       



        <div className={cardAtelierCss.cardAtelier_image} >
             <img src={image} alt="" />
        </div>
        <div className={cardAtelierCss.content} >

        <h6>{title}</h6>
        <p>{description}</p>
        <Link to={`/atelier/${id}`}>
        <button>En savoir plus</button>
        </Link>

        </div>       



        </div>
    );

}

export default Card_Atelier;
