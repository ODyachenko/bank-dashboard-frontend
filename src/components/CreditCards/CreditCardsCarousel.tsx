import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CreditCard from './CreditCard';

const CreditCardsCarousel: FC = () => {
  return (
    <Swiper
      className="lg:max-w-[480px] xl:max-w-[660px]"
      slidesPerView={'auto'}
      spaceBetween={20}
      breakpoints={{
        1024: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        // 1440: {
        //   slidesPerView: 3,
        //   spaceBetween: 40,
        // },
      }}
    >
      <SwiperSlide className="max-w-[265px] xl:max-w-[350px]">
        <CreditCard />
      </SwiperSlide>
      <SwiperSlide className="max-w-[265px] xl:max-w-[350px]">
        <CreditCard />
      </SwiperSlide>
      <SwiperSlide className="max-w-[265px] xl:max-w-[350px]">
        <CreditCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default CreditCardsCarousel;
