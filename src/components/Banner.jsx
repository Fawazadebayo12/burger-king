import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import magic from "../assets/Magic-web.jpeg"
import haveit from "../assets/Have-it-.jpg"
import haveit2 from "../assets/Have-it-2.jpg"
import hero from "../assets/hero-section.jpg"
import website from "../assets/website-345k.png"
 function Banner() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay={{delay: 3000, disableOnInteraction: false}} className="mySwiper">
      <SwiperSlide><img src= { website } alt="a pic" /></SwiperSlide>
        <SwiperSlide><img src= { haveit } alt="a pic" /></SwiperSlide>
        <SwiperSlide><img src= { haveit2 } alt="a pic" /></SwiperSlide>
        <SwiperSlide><img src= { hero } alt="a pic" /></SwiperSlide>
        <SwiperSlide><img src= { magic } alt="a pic" /></SwiperSlide>
      </Swiper>
    </>
  );
}


export default Banner