import React from 'react'
import {
    StyledCard,
    StyledCalculatedButton,
    StyledTrap,
    StyledText,
    StyledButtonWrap,
} from '../_style'
import { Table, TRAPREVERSE, TC } from '../_table'
import { Localize } from 'components/localization'
import { Header } from 'components/elements/typography'
import { Li, Ul } from 'components/elements'
import { TString } from 'types/generics'

type AffiliateType = {
    title: TString
    data: TString[]
}[]

const revenue_data: AffiliateType = [
    {
        title: '_t_Net revenue_t_',
        data: ['_t_USD ≤ 20,000 per month_t_', '_t_USD > 20,000 per month_t_'],
    },
    {
        title: '_t_Commission_t_',
        data: ['_t_30%_t_', '_t_45%_t_'],
    },
]

const DefaultCard = ({ toggleCalculated }: { toggleCalculated: () => void }) => {
    return (
        <StyledCard height="110rem" tabletHeight="auto" padding="2.4rem">
            <div>
                <Header as="h4" type="sub-section-title" mb="0.8rem">
                    <Localize translate_text="_t_Revenue share_t_" />
                </Header>
                <Header as="p" type="paragraph-1" weight="normal">
                    <Localize translate_text="_t_Earn based on the monthly net revenue generated by your clients._t_" />
                </Header>
                <Table grid_col_number={2}>
                    {revenue_data.map(({ title, data }, index) => (
                        <TC grid_area={'area' + index} key={index}>
                            <StyledTrap isTitle="true">
                                <StyledText weight="bold">
                                    <Localize translate_text={title} />
                                </StyledText>
                            </StyledTrap>
                            {data.map((data, idx) => (
                                <TRAPREVERSE even={idx % 2 ? 'true' : ''} key={idx}>
                                    <StyledText>
                                        <Localize translate_text={data} />
                                    </StyledText>
                                </TRAPREVERSE>
                            ))}
                        </TC>
                    ))}
                </Table>
                <Header as="p" type="paragraph-1" mb="0.8rem" mt="2.4rem">
                    <Localize translate_text="_t_Disclaimer:_t_" />
                </Header>
                <Ul>
                    <Li>
                        <Header as="p" type="paragraph-1">
                            <Localize
                                translate_text="_t_This plan is not available for affiliates who promote to clients residing in the EU._t_"
                                components={[<strong key={0} />]}
                            />
                        </Header>
                    </Li>
                    <Li>
                        <Header as="p" type="paragraph-1">
                            <Localize
                                translate_text="_t_Affiliates residing in the EU may sign up for the Revenue share plan. However, only clients residing outside of the EU can be referred under this plan._t_"
                                components={[<strong key={0} />]}
                            />
                        </Header>
                    </Li>
                    <Li>
                        <Header as="p" type="paragraph-1">
                            <Localize
                                translate_text="_t_Only the revenue generated from your clients' multipliers trades on synthetic indices are included in this commission plan._t_"
                                components={[<strong key={0} />]}
                            />
                        </Header>
                    </Li>
                </Ul>
            </div>
            <StyledButtonWrap>
                <StyledCalculatedButton flat onClick={toggleCalculated}>
                    <Localize translate_text="_t_How it’s calculated_t_" />
                </StyledCalculatedButton>
            </StyledButtonWrap>
        </StyledCard>
    )
}

export default DefaultCard
