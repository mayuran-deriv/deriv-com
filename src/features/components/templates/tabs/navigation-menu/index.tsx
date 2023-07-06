import React from 'react'
import { OptionNavigationType } from '../../navigation/tab-nav-without-border/types'
import { Localize } from 'components/localization'
import FlexBox from 'features/components/atoms/flex-box'
import Tab from 'features/components/atoms/tab'
import { TString } from 'types/generics'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import Link from 'features/components/atoms/link'
import useBreakpoints from 'components/hooks/use-breakpoints'
import dclsx from 'features/utils/dclsx'

export type TabMenuProps = {
    class_name?: string
    tab_items: OptionNavigationType
    current_tab: TString | string
    icon?: string
    is_no_border_bottom?: boolean
}
const NavigationTabMenu = ({
    class_name,
    tab_items,
    current_tab,
    icon,
    is_no_border_bottom = false,
}: TabMenuProps) => {
    const { button_text, to } = tab_items
    const { is_mobile } = useBreakpoints()
    return (
        <Link
            className={dclsx(
                'flex',
                'flex-dir-col',
                'align-items-center',
                'tab',
                'menu-item',
                is_no_border_bottom && 'navigation-tabs',
                { selected: button_text == current_tab },
            )}
            url={{ type: 'internal', to: to }}
            no_hover
            key={button_text}
        >
            {icon && <Image src={icon} width="64px" height="64px" className={dclsx('margin-3x')} />}
            <Typography.Paragraph
                size={is_mobile ? 'medium' : 'small'}
                textcolor={button_text === current_tab ? 'brand' : 'light-black'}
            >
                <Localize translate_text={button_text} />
            </Typography.Paragraph>
        </Link>
    )
}

export default NavigationTabMenu
