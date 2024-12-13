
import galleryCSS from '../Gallery/Gallery.module.css';

import galleryImg01 from './../../assets/images/441456388_18316244557177672_8210526858808920439_n.jpg'
import galleryImg02 from './../../assets/images/WhatsApp Image 2024-12-13 à 12.48.48_5a228c28.jpg'
import galleryImg03 from './../../assets/images/447870305_3169605873176848_937472579814033578_n.jpg'
import galleryImg04 from './../../assets/images/WhatsApp Image 2024-12-13 à 12.48.48_9b23e8ce.jpg'
import galleryImg05 from './../../assets/images/453063782_1693602234515268_4477529359746311169_n.jpg'
import galleryImg06 from './../../assets/images/445955167_8141142392586706_7292123323858210305_n.jpg'
import galleryImg07 from './../../assets/images/448732654_454678597178611_3402660740287865193_n.jpg'

function Gallery () {


return (
    <div className={`${galleryCSS.Gallery_wrapper } section`}>
    <h2>Gallerie</h2>
    <p>Des moments de partage, d’apprentissage et de convivialité autour du numérique, avec le sourire et la bonne humeur toujours au rendez-vous !</p>

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

     <div className={galleryCSS.gallery_card}>
    
    <img src={galleryImg07} alt="gallery-image" />

    </div>

    

    </div>


    </div>

)

}

export default Gallery;