import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import type { Swiper as SwiperInstance } from 'swiper'
import 'swiper/css'
import './carousel.scss'

import { LeftArrowIcon } from '../../icons/LeftArrowIcon'
import { RightArrowIcon } from '../../icons/RightArrowIcon'

type Card = {
  title: string
  author: string
  views: string
  date: string
  duration: string
  imgSrc: string
  link: string
}

type CarouselProps = {
  cards: Card[]
  slideWidth?: number
  slideHeight?: number
  children: (card: Card) => React.ReactNode
}

const Carousel = ({ cards, slideWidth = 250, slideHeight = 200, children }: CarouselProps) => {
  const swiperRef = useRef<SwiperInstance | null>(null)

  return (
    <div className="carouselContainer">
      <div className="customArrows">
        <div className="arrowLeft" onClick={() => swiperRef.current?.slidePrev()}>
          <LeftArrowIcon />
        </div>
        <div className="arrowRight" onClick={() => swiperRef.current?.slideNext()}>
          <RightArrowIcon />
        </div>
      </div>

      <div className="swiperWrapper">
        <Swiper
          modules={[Navigation]}
          slidesPerView="auto"
          spaceBetween={40}
          onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
          navigation={false}
          className="customSwiper"
        >
          {cards.map((card, index) => (
            <SwiperSlide
              key={'card' + index}
              className="customSlide"
              style={{
                width: `${slideWidth}px`,
                height: `${slideHeight}px`,
              }}
            >
              {children(card)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Carousel
