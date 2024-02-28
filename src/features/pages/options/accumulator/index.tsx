import React from 'react'
import { BlockWrapper, Features } from '@deriv-com/blocks'
import { FluidContainer } from '@deriv/quill-design'
import {
    DerivProductDerivTraderBrandLightLogoHorizontalIcon,
    IllustrativeDerivedIcon,
} from '@deriv/quill-icons'
import { CardContent } from '@deriv-com/components'
import { StaticImage } from 'gatsby-plugin-image'
import {
    accumulatorFAQ,
    accumulatorMarkets,
    accumulatorOptionsContentItems,
    accumulatorPlatforms,
} from './data'
import AccumulatorOptions from 'images/svg/trade-types/accumulator-options.svg'
import { Localize, localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import OptionsLayout from 'features/components/templates/options-layout'
import OptionsContent from 'features/components/templates/options-content'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import OptionsFaq from 'features/components/templates/options-faq'
import Flex from 'features/components/atoms/flex-box'
import Box from 'features/components/atoms/box'
import TradersHubCtaButton from 'features/components/molecules/traders-hub-cta-button'
import Link from 'features/components/atoms/link'

const AccumulatorsOptions = () => {
    const AccumulatorOptionsCard: CardContent[] = [
        {
            id: 1,
            header: <Localize translate_text="_t_Watch: Accumulator options in action_t_" />,
            description: (
                <Localize translate_text="_t_Check out our quick video walkthrough of how to trade accumulators on Deriv Trader._t_" />
            ),
            content: (
                <div style={{ position: 'relative' }}>
                    <StaticImage
                        src="../../../../images/common/trade-types/accumulator-video-bg.png"
                        alt={localize('_t_Step-by-step guide to trade on accumulator options_t_')}
                        loading="lazy"
                        formats={['webp', 'auto']}
                        quality={100}
                        style={{ position: 'relative' }}
                    />
                    <iframe
                        src="https://player.vimeo.com/video/917007011?h=5cd6ecb94c"
                        frameBorder="0"
                        width="100%"
                        height="200"
                        style={{ position: 'absolute', top: '0', left: '0', zIndex: '9999999' }}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ),
            size: 'md',
            align: 'start',
            color: 'gray',
            link: {
                content: <Localize translate_text="_t_Learn more_t_" />,
                href: 'https://blog.deriv.com/videos/how-to-trade-accumulator-options-on-deriv-trader/',
                descriptiveText: 'How to trade accumulator options on deriv trader',
            },
        },
        {
            id: 2,
            header: <Localize translate_text="_t_Read: Guide to trading accumulator options_t_" />,
            description: (
                <Localize translate_text="_t_Open your first accumulator options trade with our step-by-step guide._t_" />
            ),
            content: (
                <StaticImage
                    src="../../../../images/common/trade-types/accumulator-video-bg.png"
                    alt={localize('_t_Step-by-step guide to trade on accumulator options_t_')}
                    loading="lazy"
                    formats={['webp', 'auto']}
                    quality={100}
                />
            ),
            size: 'md',
            align: 'start',
            color: 'gray',
            link: {
                content: <Localize translate_text="_t_Learn more_t_" />,
                href: 'https://blog.deriv.com/posts/a-guide-to-accumulator-options-trading-on-deriv/',
                descriptiveText: 'A guide to accumulator options trading on deriv',
            },
        },
    ]
    return (
        <>
            <OptionsLayout
                heading="_t_What are accumulator options?_t_"
                description="_t_Accumulator options allow you to predict whether the current spot price remains within a predefined range from the previous spot price._t_"
            >
                <Typography.Heading
                    as="h2"
                    align="center"
                    padding_block="6x"
                    md={{ padding_block: '20x' }}
                    size="small"
                >
                    <Localize translate_text="_t_How do accumulator options work?_t_" />
                </Typography.Heading>
                <OptionsContent items={accumulatorOptionsContentItems} />
                <Flex.Box justify="center" align="center" direction="col">
                    <AvailableMarketPlatforms
                        markets={accumulatorMarkets}
                        platforms={accumulatorPlatforms}
                    />
                </Flex.Box>
                <BlockWrapper
                    title={<Localize translate_text="_t_What are accumulator options?_t_" />}
                    background="light"
                >
                    <FluidContainer className="flex flex-col py-general-2xl gap-gap-xl">
                        <div className="flex max-lg:flex-col justify-between gap-gap-xl">
                            <div className="w-full md:w-1/2">
                                <div>
                                    <Box
                                        as="iframe"
                                        src="https://player.vimeo.com/video/915479906?h=bf070a3ff6"
                                        frameBorder="0"
                                        width={'100%'}
                                        height={'360'}
                                        allowFullScreen
                                    ></Box>
                                </div>

                                <script src="https://player.vimeo.com/api/player.js"></script>
                            </div>
                            <div className="flex flex-col w-full md:w-1/2 gap-gap-md">
                                <div className="flex flex-row gap-gap-md">
                                    <img
                                        src={AccumulatorOptions}
                                        alt={localize('_t_Accumulator options icon_t_')}
                                        width="32"
                                        height="32"
                                    />
                                    <Typography.Heading size={'xs'}>
                                        <Localize translate_text="_t_Accumulator_t_" />
                                    </Typography.Heading>
                                </div>

                                <Typography.Paragraph size={'medium'}>
                                    <Localize translate_text="_t_With accumulator options, your payout grows exponentially as long as the current market spot price stays within a set range from the previous spot price. Choose between 1-5% growth rate - a higher growth rate means a narrower range for your price movements and higher risk. With volatility indices, you can also choose the volatility of your market._t_" />
                                </Typography.Paragraph>
                                <Typography.Paragraph size={'medium'}>
                                    <Localize translate_text="_t_Secure your gains with manual or automatic profit-taking. With durations of up to 230 ticks, accumulator options are ideal for those looking for fast-paced, strategic trades while balancing risk and reward._t_" />
                                </Typography.Paragraph>
                            </div>
                        </div>
                        <div className="flex max-lg:flex-col justify-between gap-gap-xl">
                            <div className="flex flex-col w-full md:w-1/2 gap-gap-xl">
                                <Typography.Heading size={'xs'}>
                                    <Localize translate_text="_t_Markets available_t_" />
                                </Typography.Heading>
                                <div className="flex gap-gap-md">
                                    <IllustrativeDerivedIcon fill="#000000" iconSize="sm" />
                                    <Link
                                        url={{
                                            type: 'internal',
                                            to: '/markets/synthetic/',
                                        }}
                                        size="medium"
                                        font_family="UBUNTU"
                                    >
                                        <Localize translate_text="_t_Derived indices_t_" />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col w-full md:w-1/2 gap-gap-xl">
                                <Typography.Heading size={'xs'}>
                                    <Localize translate_text="_t_Trade on_t_" />
                                </Typography.Heading>
                                <div className="flex gap-gap-md">
                                    <DerivProductDerivTraderBrandLightLogoHorizontalIcon
                                        height="24px"
                                        width="24px"
                                    />
                                    <Link
                                        url={{
                                            type: 'internal',
                                            to: '/dtrader/',
                                        }}
                                        size="medium"
                                        font_family="UBUNTU"
                                    >
                                        <Localize translate_text="_t_Deriv Trader_t_" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block m-auto pt-general-md">
                            <TradersHubCtaButton className="flex" />
                        </div>
                    </FluidContainer>
                </BlockWrapper>
                <Features.Card
                    hasPadding
                    className="xl:[&>*:nth-child(1)]:!px-50"
                    title={<Localize translate_text="_t_How to trade accumulator options_t_" />}
                    cols="two"
                    variant="ContentTop"
                    cards={AccumulatorOptionsCard}
                />

                <OptionsFaq faqs={accumulatorFAQ} />
            </OptionsLayout>
        </>
    )
}

export default AccumulatorsOptions
