import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

//import style
import 'swiper/css';
import '../css/Custom.css';

//images
import fnx1 from '../assets/fnx-01.jpeg'
import fnx2 from '../assets/fnx-02.jpeg'
import fnx4 from '../assets/fnx-04.jpeg'

const FullScreenSlide = () => {
  return (
    <>
      <div style={{width: '100%', height: '100vh', overflow: 'hidden', position: 'fixed'}}>
        <Swiper
          style={{
            "--swiper-navigation-color": "black",
            "--swiper-navigation-size": "1.3rem"
          }}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
          <img src={fnx1} style={{width: '100%'}} alt="logo" />
          </SwiperSlide>

          <SwiperSlide>
          <img src={fnx2} style={{width: '100%'}} alt="logo" />
          </SwiperSlide>

          <SwiperSlide>
          <img src={fnx4} style={{width: '100%'}} alt="logo" />
          </SwiperSlide>

        </Swiper>
      </div>
      <div>
        <div style={{width: '100%', background: '#ddd', height: '1000px', position: 'absolute', top: '71vh'}}/>
      </div>
    </>
  )
}

export default FullScreenSlide