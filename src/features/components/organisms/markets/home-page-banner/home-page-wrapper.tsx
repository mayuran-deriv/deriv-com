import React from 'react'
import ImageBanner from './image-banner'
import BannerText from './banner-text'
import { HomepageBannerType } from './types'
import { item_container, flex_container } from './styles.module.scss'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'

interface HomepageBannerProps {
    item: HomepageBannerType
}

const HomePageWrapper = ({ item }: HomepageBannerProps) => {
    return (
        <Container.Fixed as="section" bgcolor="white">
            <Flex.Box
                className={flex_container}
                direction="col-reverse"
                lg={{ direction: 'row' }}
                justify="between"
            >
                <BannerText item={item} />
                <ImageBanner item={item} />
            </Flex.Box>
        </Container.Fixed>
    )
}

export default HomePageWrapper
