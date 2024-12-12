
import galleryCSS from '../Gallery/Gallery.module.css';

import galleryImg01 from './../../assets/images/pexels-shvetsa-5029919.jpg'
import galleryImg02 from './../../assets/images/pexels-shvetsa-5029919.jpg'
import galleryImg03 from './../../assets/images/pexels-shvetsa-5029919.jpg'
import galleryImg04 from './../../assets/images/pexels-shvetsa-5029919.jpg'
import galleryImg05 from './../../assets/images/pexels-shvetsa-5029919.jpg'
import galleryImg06 from './../../assets/images/pexels-shvetsa-5029919.jpg'
function Gallery () {


return (
    <div className={`${galleryCSS.Gallery_wrapper } section`}>
    <h2>Gallerie</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eos esse vel suscipit totam consequatur itaque voluptatem expedita quam sit?</p>

    <div className={galleryCSS.gallery_cards}>

     <div className={galleryCSS.gallery_card}>
    
    <img src={galleryImg01} alt="gallery-image" />

    </div>

     <div className={galleryCSS.gallery_card}>
    
    <img src={galleryImg02} alt="gallery-image" />

    </div>


     <div className={galleryCSS.gallery_card}>
    
    <img src={galleryImg03} alt="gallery-image" />

    </div>

     <div className={galleryCSS.gallery_card}>
    
    <img src={galleryImg04} alt="gallery-image" />

    </div>

     <div className={galleryCSS.gallery_card}>
    
    <img src={galleryImg05} alt="gallery-image" />

    </div>

     <div className={galleryCSS.gallery_card}>
    
    <img src={galleryImg06} alt="gallery-image" />

    </div>

    </div>


    </div>

)

}

export default Gallery;