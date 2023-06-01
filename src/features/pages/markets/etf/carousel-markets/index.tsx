import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import * as styles from './styles.module.scss'
import CardBasic from 'features/components/atoms/card/card-primary'
import { CardType } from 'features/components/atoms/card/card-primary/type'

interface MarketsMainSliderProps {
    cards: CardType[]
}

const MarketsMainSlider = ({ cards }: MarketsMainSliderProps) => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={20}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            speed={1200}
            modules={[Autoplay]}
            breakpoints={{
                1200: {
                    slidesPerView: 4,
                },
            }}
            className={styles.swiper_wrapper}
        >
            {cards.map((card) => (
                <SwiperSlide key={card.id}>
                    <CardBasic item={card} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default MarketsMainSlider
