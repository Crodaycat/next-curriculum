import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Children, FC, ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

export interface CarouselProps {
  children?: ReactNode;
}

export const Carousel: FC<CarouselProps> = ({ children }) => {
  const childrenList = Children.toArray(children);

  return (
    <div className='w-full flex flex-col'>
      <Swiper
        autoplay={true}
        slidesPerView={'auto'}
        spaceBetween={72}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className='w-full'
      >
        {childrenList.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
