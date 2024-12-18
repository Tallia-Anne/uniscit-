import cardAtelierCss from '../Card/Card_Atelier.module.css'



function Card_Atelier ({ title, description, technologies, year, image, lien })  {
  
    return (
      <div className={cardAtelierCss.cardAtelier_wrapper}
        >  
       



        <div className={cardAtelierCss.cardAtelier_image} >
             <img src={image} alt="" />
        </div>
        <div className={cardAtelierCss.content} >

        <h6>{title}</h6>
        <p>{description}</p>
        
        <a href={lien}><button>En savoir plus</button></a>


        </div>       



        </div>
    );

}

export default Card_Atelier;
