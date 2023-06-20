import React, { FC } from 'react'
import { DerivProductContentType } from './types'
import { hero_desktop_image } from './deriv-products-hero.module.scss'
import FlexBox from 'features/components/atoms/flex-box'

interface ProductsBannerType {
    contentData: DerivProductContentType
}

const ProductsBanner: FC<ProductsBannerType> = ({ contentData: { hero, hero_mobile } }) => {
    return (
        <>
            <FlexBox.Box ml={'17x'} className={hero_desktop_image} visible="larger-than-tablet">
                {hero}
            </FlexBox.Box>
            <FlexBox.Box className="visible-phone-and-tablet">{hero_mobile}</FlexBox.Box>
        </>
    )
}
export default ProductsBanner
