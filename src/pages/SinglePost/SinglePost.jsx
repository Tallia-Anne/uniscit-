import { useParams } from 'react-router-dom';
import ateliers from '../../assets/ateliers';

import singlepostCSS from './SinglePoste.module.css'

function SinglePost() {
  const { id } = useParams();
  const atelier = ateliers.find((item) => item.id === parseInt(id));

  if (!atelier) {
    return <p>Atelier non trouvé</p>;
  }

  return (
    <div className={singlepostCSS.wrapper_singlePost  }>

    <div className={singlepostCSS.singlePost_image  }>
           <img src={atelier.image} alt={atelier.title} />
    </div>

<div className={singlepostCSS.singlePost_content }>
      <h1>{atelier.title}</h1>
    <p>Technologies : {atelier.technologies.join(', ')}</p>
      <p>Année : {atelier.year}</p>
      <p>{atelier.description}</p>
   
      
</div>
    </div>
  );
}

export default SinglePost;
