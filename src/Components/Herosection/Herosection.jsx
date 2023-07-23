import React from 'react'
import "./Herosection.css"

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

SwiperCore.use([EffectCoverflow, Pagination]);
function Herosection() {
  return (
    <div className='hero-section'>
        <div className='right-part'>
          
          <h1 className='heading'>Encourage ,Inspire and Innovate </h1>
          
          <p className='sub-heading'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo corporis, dignissimos adipisci recusandae inventore impedit repudiandae cupiditate amet modi ipsam, obcaecati optio quaerat accusamus, eius rerum placeat nihil nostrum eaque! Vero dignissimos eius voluptatum.</p>

          <div className='btn'>Join Team</div>
        </div>

        <div className="left-part">
          {/* <img src="../../public/Competitions_and_project_demostration_image/IMG_4202.jpg" alt="image" /> */}

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="./Competitions_and_project_demostration_image/cozmo.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Competitions_and_project_demostration_image/IMG_4164.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Competitions_and_project_demostration_image/IMG_4180.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Competitions_and_project_demostration_image/IMG_4180.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Competitions_and_project_demostration_image/IMG_4180.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Competitions_and_project_demostration_image/IMG_4180.jpg" alt="" />
            </SwiperSlide>

          </Swiper>

        </div>
    </div>
  )
}

export default Herosection;
