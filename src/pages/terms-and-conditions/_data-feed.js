import React from 'react'
import {
    StyledSection,
    StyledHeader,
    StyledOrder,
    TncListText,
    TncLink,
} from './_styles'
import { Header } from 'components/elements/typography'
import { localize, Localize } from 'components/localization'

export const DataFeed = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Data feed')}
        </Header>
        <StyledHeader as="h4" weight="500">
            {localize('A. Differences with other data feeds')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'Our data feed may at times differ slightly from other data feeds found on the Internet (that may themselves differ from each other). Reasons for differences in feed providers include:',
                    )}
                </TncListText>
            </li>
            <StyledOrder type="lower-alpha">
                <li>
                    <TncListText>
                        {localize(
                            "For forex: The forex market is an OTC (over the counter) market, where banks and other major financial institutions trade currencies amongst themselves without there being any central clearing house. Accordingly, there is no 'official' price source for forex quotes. Different data feeds will contain quotes from a different sub-set of international banks. As a result, prices may differ among providers, depending on which bank(s) they obtain prices from.",
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {/* TODO: [add-link]: link to trading times page once available */}
                        <Localize
                            translate_text="Market-closing times: Please refer to <0>Trading times</0> page for the exact time of settlement for all trades. Other websites may adopt a different convention (for example, some websites choose 4 o'clock NY time or 5 o'clock London time). As a result, the open, high, low, and closing prices displayed on Our website may differ from those on other websites, due to the market-closing-time convention."
                            components={[
                                <TncLink
                                    key={0}
                                    to="/terms-and-conditions/#data-feed"
                                />,
                            ]}
                        />
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'Use of Bid/Ask: When the market is illiquid, the data feed may contain many bid and ask prices, without there actually being any traded price for quite a while. By taking an average of the bid/ask price (i.e. bid + ask, divided by 2), a market quote is generated that reflects the current market, without it actually being a traded price. Our system will generate prices from these bid and ask prices, whereas other websites might not. As a result, Our website might display ticks that do not appear in the data feeds of other websites.',
                        )}
                    </TncListText>
                </li>
            </StyledOrder>
        </StyledOrder>
        <StyledHeader as="h4" weight="500">
            {localize('B. Weekend quotes')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'Please note that weekend quotes are ignored for the purpose of trade settlement. During weekends, the forex markets may occasionally generate prices; however, these prices are often artificial (traders sometimes take advantage of the illiquidity of the markets during weekends to push prices up or down). To avoid settling prices based on such artificial prices, it is Our policy not to count weekend prices towards trade settlement values (except for Volatility Indices, which are open during weekends).',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
    </StyledSection>
)
