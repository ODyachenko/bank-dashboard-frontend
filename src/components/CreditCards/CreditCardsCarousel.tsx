import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CreditCard from './CreditCard';

const CreditCardsCarousel: FC = () => {
  return (
    <Swiper
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
      <SwiperSlide className="max-w-[260px] lg:max-w-none">
        <CreditCard />
      </SwiperSlide>
      <SwiperSlide className="max-w-[260px] lg:max-w-none">
        <CreditCard />
      </SwiperSlide>
      <SwiperSlide className="max-w-[260px] lg:max-w-none">
        <CreditCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default CreditCardsCarousel;
