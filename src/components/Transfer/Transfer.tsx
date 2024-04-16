import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Block from '../Block/Block';
import TransferUser from './TransferUser';
import TransferForm from './TransferForm';
import 'swiper/css/navigation';

const Transfer: FC = () => {
  return (
    <Block title="Quick Transfer" className="mb-5 lg:mb-0">
      <div className="bg-white rounded-2xl p-4 lg:py-8 lg:px-5">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={20}
          // navigation={true}
          // modules={[Navigation]}
          className="mb-7 lg:mb-14"
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
      </div>
    </Block>
  );
};

export default Transfer;
