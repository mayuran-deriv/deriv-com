import React, { FC } from 'react'
import { hero_image } from './deriv-products-hero.module.scss'
import { DerivProductContentType } from './types'
import FlexBox from 'features/components/atoms/flex-box'

interface ProductsLogoTextType {
    contentData: DerivProductContentType
}

const ProductsLogoAndText: FC<ProductsLogoTextType> = ({
    contentData: { mobile_logo, product_water_mark_logo_mobile, logo, product_water_mark_logo },
}) => {
    return (
        <FlexBox.Box className={hero_image} justify="start">
            <FlexBox.Box visible="phone-and-tablet" gap="10x" align="center">
                {mobile_logo} {product_water_mark_logo_mobile}
            </FlexBox.Box>
            <FlexBox.Box visible="larger-than-tablet" gap="10x" align="center">
                {logo} {product_water_mark_logo}
            </FlexBox.Box>
        </FlexBox.Box>
    )
}
export default ProductsLogoAndText
