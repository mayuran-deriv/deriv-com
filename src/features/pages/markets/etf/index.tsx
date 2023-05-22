import React from 'react'
import ETFSteps from './etf-steps'
import WhyETFTrade from './why-etf-trade'
import HomePage from './home-page'
import InstrumentsTableEtf from './instruments-etf'
import InstrumentsContentEtf from './instruments-etf/instrumental-table-content.tsx'

const ETFMarket = () => {
    return (
        <>
            <HomePage />
            <InstrumentsTableEtf />
            <InstrumentsContentEtf />
            <WhyETFTrade />
            <ETFSteps />
        </>
    )
}

export default ETFMarket
