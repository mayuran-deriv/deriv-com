import React from 'react'
import Symbol from '../components/helper/_symbol'
import { range_break } from '../static/content/_market-symbols'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import dclsx from 'features/utils/dclsx'

const RangeBreak = () => {
    return (
        <>
            <Typography.Paragraph
                mb="4x"
                weight="bold"
                size="small"
                className={dclsx('visible-larger-than-phone')}
            >
                <Localize translate_text={'_t_Deriv MT5 and Deriv X:_t_'} />
            </Typography.Paragraph>
            <Typography.Paragraph
                mb="4x"
                weight="bold"
                size="xs"
                className={dclsx('visible-phone-only')}
            >
                <Localize translate_text={'_t_Deriv MT5 and Deriv X:_t_'} />
            </Typography.Paragraph>
            {range_break.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default RangeBreak
