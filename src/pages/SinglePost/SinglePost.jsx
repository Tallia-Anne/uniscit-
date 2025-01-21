import { useParams } from "react-router-dom";
import ateliers from "../../assets/ateliers";

import singlepostCSS from "./SinglePoste.module.css";
import Section_Atelier from "../../Components/Section/Section_Atelier";

function SinglePost() {
  const { id } = useParams();
  const atelier = ateliers.find((item) => item.id === parseInt(id));

  if (!atelier) {
    return <p>Atelier non trouvé</p>;
  }

  // Sélectionner 3 ateliers aléatoires
  const threeAteliers = [...ateliers].sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className={singlepostCSS.wrapperSingle}>
      <div className={singlepostCSS.data}>
        <p>{atelier.date}</p>
        <h1>{atelier.title}</h1>
        <p>{atelier.introduction}</p>
      </div>

      <div className={singlepostCSS.imageSingle}>
        <div className={singlepostCSS.box_image}>
          <img src={atelier.image} alt="" />
        </div>
      </div>

      <div className={singlepostCSS.singleContent}>
        <div className={singlepostCSS.SingleObj}>
          <h4>Objectifs Pédagogiques:</h4>
          {atelier.objectifs.map((objectif, index) => (
            <div className={singlepostCSS.objectiflist} key={index}>
              <ul>
                <li>{objectif}</li>
              </ul>
            </div>
          ))}
        </div>

        <div className={singlepostCSS.SingleObj}>
          <h4>Description:</h4>
          <p>{atelier.description}</p>
        </div>
      </div>

      {/* Passer les 3 ateliers à Section_Atelier */}
      <div  className={singlepostCSS.sectionPost}>
        <div className={singlepostCSS.viewAtelier} >

        <h4>Dernière Ateliers</h4>

        <button>Tous les ateliers</button>


      </div>
      <Section_Atelier ateliers={threeAteliers} />
      </div>
    </div>
  );
}

export default SinglePost;
