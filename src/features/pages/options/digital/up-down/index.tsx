import React from 'react'
import { Helmet } from 'react-helmet'
import { upAndDownContentItems, upAndDownFAQ, upAndDownMarkets, upAndDownPlatforms } from './data'
import { faq_schema } from './_faq-schema'
import AvailableMarketPlatforms from 'features/components/organisms/available-markets-platforms'
import DigitalOptionsLayout from 'features/components/templates/digital-options-layout'
import OptionsContent from 'features/components/templates/options-content'
import OptionsFaq from 'features/components/templates/options-faq'
import { SEO } from 'components/containers'
import useRegion from 'components/hooks/use-region'
import PageNotFound from 'features/pages/404-error'

const UpAndDownDigitalOptionsPage = () => {
    const { is_row } = useRegion()

    if (is_row) {
        return (
            <DigitalOptionsLayout>
                <SEO
                    title="_t_Up/Down | Digital options contract | Deriv_t_"
                    description="_t_Open a digital options contract with an Up/Down trade type on Deriv’s trading platforms and earn payouts with accurate market predictions._t_"
                />
                <Helmet>
                    <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
                </Helmet>
                <OptionsContent items={upAndDownContentItems} />
                <AvailableMarketPlatforms
                    markets={upAndDownMarkets}
                    platforms={upAndDownPlatforms}
                />
                <OptionsFaq faqs={upAndDownFAQ} />
            </DigitalOptionsLayout>
        )
    }
    return <PageNotFound />
}

export default UpAndDownDigitalOptionsPage