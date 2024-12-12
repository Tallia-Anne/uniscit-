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

                <small>slide1</small>
                <h1>SLIDE1E</h1>
                <button>All Projects <i className='ri-arrow-right-line'></i> </button>
            </div>

        </div>

        </SwiperSlide>
        <SwiperSlide>

       <div className={headerCSS.HeaderSlide}>

             <img src={headerSlide2} alt='Headerslide1' />


            <div  className={headerCSS.header_content} >

                <small>slide2</small>
                <h1>SLIDE1E</h1>
                <button>All Projects <i className='ri-arrow-right-line'></i> </button>
            </div>

        </div>

        </SwiperSlide>
        <SwiperSlide>

       <div className={headerCSS.HeaderSlide}>

             <img src={headerSlide3} alt='Headerslide1' />


            <div  className={headerCSS.header_content} >

                <small>slide1</small>
                <h1>SLIDE3E</h1>
                <button>All Projects <i className='ri-arrow-right-line'></i> </button>
            </div>

        </div>

        </SwiperSlide>
</Swiper>


    </div>

)

}

export default Header;