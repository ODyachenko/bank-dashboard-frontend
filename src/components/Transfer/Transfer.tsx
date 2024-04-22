import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Block from '../Block/Block';
import TransferUser from './TransferUser';
import TransferForm from './TransferForm';
import 'swiper/css/navigation';

const Transfer: FC = () => {
  return (
    <Block title="Quick Transfer" className="mb-5 lg:mb-0">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        // navigation={true}
        // modules={[Navigation]}
        className="mb-7"
      >
        <SwiperSlide className="max-w-[60px]">
          <TransferUser />
        </SwiperSlide>
        <SwiperSlide className="max-w-[60px]">
          <TransferUser />
        </SwiperSlide>
        <SwiperSlide className="max-w-[60px]">
          <TransferUser />
        </SwiperSlide>
        <SwiperSlide className="max-w-[60px]">
          <TransferUser />
        </SwiperSlide>
      </Swiper>
      <TransferForm />
    </Block>
  );
};

export default Transfer;
