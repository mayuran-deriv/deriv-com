import React from 'react'
import { item_container } from './styles.module.scss'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Link from 'features/components/atoms/typography/link'
import Flex from 'features/components/atoms/flex-box'
import Box from 'features/components/atoms/box'
import Image from 'features/components/atoms/image'
import DerivGOIcon from 'images/svg/deriv-go-icon.svg'
import useBreakpoints from 'components/hooks/use-breakpoints'

const GoTextBox = () => {
    const { is_mobile } = useBreakpoints()
    return (
        <Flex.Box
            className={item_container}
            direction="col"
            align="center"
            md={{ direction: 'row', align: 'start' }}
        >
            <Image src={DerivGOIcon} width="64px" height="64px" />
            <Box pl="8x">
                <Typography.Heading
                    as="h3"
                    size="small"
                    align={is_mobile ? 'center' : 'left'}
                    mb="8x"
                    textcolor="inverted"
                >
                    <Localize translate_text="_t_Want to trade <br/> Options on the go?_t_" />
                </Typography.Heading>
                <Typography.Paragraph
                    size="large"
                    textcolor="inverted"
                    mb="8x"
                    align={is_mobile ? 'center' : 'left'}
                >
                    <Localize translate_text="_t_You need Deriv GO Ultimate for Android. Trade Options, in addition to CFDs and Multipliers, on your favourite markets._t_" />
                </Typography.Paragraph>
                <Typography.Paragraph align={is_mobile ? 'center' : 'left'}>
                    <Link textcolor="inverted" size="large">
                        <Localize translate_text="_t_Download now >_t_" />
                    </Link>
                </Typography.Paragraph>
            </Box>
        </Flex.Box>
    )
}

export default GoTextBox