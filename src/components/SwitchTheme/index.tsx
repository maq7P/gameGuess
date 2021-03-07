import clsx from 'clsx'
import React from 'react'
import { ThemeType } from '../../redux/types/stateTypes'

import './style.scss'

interface SwitchThemeProps {
    activeTheme: number
    themes: Array<ThemeType>
    handleClickSwitchTheme: (themeIdx: number) => void
}
const SwitchTheme: React.FC<SwitchThemeProps> = ({
    activeTheme, themes, handleClickSwitchTheme
}): React.ReactElement=> {
    //const [active, setActive] = React.useState(activeTheme)
    const handleClick = (idx: number) => {
        handleClickSwitchTheme(idx)      
    }
   return ( <>
        <h2>Сменить тему: </h2>
        <div className="switchTheme-block">
            {themes.map((theme, idx) => 
            (
                <div 
                    // results-block__item results-block__item--active
                    className={clsx({
                        'switchTheme__item': true, 
                        'switchTheme__item--active': activeTheme === idx
                    })}
                    key={theme.name}
                    onClick={() => handleClick(idx)}
                    style={{
                        backgroundColor: theme.color,
                    }}
                >
                </div>
            ))}
        </div>
    </>)
}
export default SwitchTheme
