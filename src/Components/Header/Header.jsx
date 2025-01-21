import headerCSS from './../Header/Header.module.css'
import {Swiper, SwiperSlide} from 'swiper/react';

import headerSlide1 from "./../../assets/images/Unis-Cite-DSC_5516.jpg";
import headerSlide2 from "./../../assets/images/Unis-Cite-DSC_5300.jpg";
import headerSlide3 from "./../../assets/images/ARO0598079-768x512.jpg";

import "swiper/css"

import { Autoplay } from 'swiper/modules';

function Header () {

return (
    <div className={headerCSS.header_wrapper} id='home' >

    <Swiper
    speed={1500}
    loop={true}
    autoplay={{delay: 3000,}}
    modules={[Autoplay]}
>

        <SwiperSlide>

       <div className={headerCSS.HeaderSlide}>

             <img src={headerSlide1} alt='Headerslide1' />


            <div  className={headerCSS.header_content} >

                <small>À travers nos ateliers, nous sensibilisons et formons aux bonnes pratiques du numérique, pour un futur plus sûr, inclusif et responsable.</small>
                <h1>Engager pour un monde numérique meilleur</h1>
                <button>Tous les ateliers <i className='ri-arrow-right-line'></i> </button>
            </div>

        </div>

        </SwiperSlide>
        <SwiperSlide>

       <div className={headerCSS.HeaderSlide}>

             <img src={headerSlide2} alt='Headerslide1' />


            <div  className={headerCSS.header_content} >

                <small>Ensemble, nous luttons contre les inégalités numériques et promouvons un usage responsable de la technologie.</small>
                <h1>Former, sensibiliser, inspirer</h1>
                <button>Tous les ateliers <i className='ri-arrow-right-line'></i> </button>
            </div>

        </div>

        </SwiperSlide>
        <SwiperSlide>

       <div className={headerCSS.HeaderSlide}>

             <img src={headerSlide3} alt='Headerslide1' />


            <div  className={headerCSS.header_content} >

                <small>Avec Unis-Cité, nous créons des ateliers qui rapprochent, protègent et responsabilisent.</small>
                <h1>Agir pour un numérique accessible à tous.</h1>
                <button>Tous les ateliers <i className='ri-arrow-right-line'></i> </button>
            </div>

        </div>

        </SwiperSlide>
</Swiper>


    </div>

)

}

export default Header;