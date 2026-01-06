import React from 'react'

// Import Swiper React components
import hero1 from '../img/banner_Hero1.jpg'
import hero2 from '../img/banner_Hero2.jpg'
import hero3 from '../img/banner_Hero3.jpg'
// axios

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../style.css'



function HomePage() {
  return (
    <div style={{maxWidth: '1100px', margin: ' 20px auto 0'}}>
       <Swiper
      //  loop={true}
      //   spaceBetween={10}
      //   centeredSlides={true}
      //   autoplay={{
      //     delay: 2500,
      //     disableOnInteraction: false,
      //   }}
      //   pagination={{
      //     clickable: true,
      //   }}
      //   // navigation={true}
      //   modules={[Autoplay, Pagination, Navigation]}
      //   className="mySwiper"
      >
        <SwiperSlide>
            <div style={{position: 'relative'}}>
                <div style={{position: 'absolute', top: '150px' , left: '50px'}}>
                    <h1 className='text-primary' style={{marginBottom: '25px'}} >INTROUDICING NEW</h1>
                    <h4>Microsoft Xbox </h4>
                    <p>Windows xp /10/7/11 ps3, Tv3 Box</p>
                    <button type="button" class="btn btn-primary">Shop Now</button>
                </div>
                <img src={hero1} alt='..........' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div style={{position: 'relative'}}>
                <div style={{position: 'absolute', top: '150px' , left: '50px'}}>
                    <h1 className='text-primary' style={{marginBottom: '25px'}} >INTROUDICING NEW</h1>
                    <h4>Microsoft Xbox </h4>
                    <p>Windows xp /10/7/11 ps3, Tv3 Box</p>
                    <button type="button" class="btn btn-primary">Shop Now</button>
                </div>
                <img src={hero2} alt='..........' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div style={{position: 'relative'}}>
                <div style={{position: 'absolute', top: '150px' , left: '50px'}}>
                    <h1 className='text-primary' style={{marginBottom: '25px'}} >INTROUDICING NEW</h1>
                    <h4>Microsoft Xbox </h4>
                    <p>Windows xp /10/7/11 ps3, Tv3 Box</p>
                    <button type="button" class="btn btn-primary">Shop Now</button>
                </div>
                <img src={hero3} alt='..........' />
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomePage