import clsx from 'clsx'
import React from 'react'
import { generateID } from '../../utils/utils'

import './style.scss'

interface ChooseLevelProps {
    levels: Array<number>
    handleClickSwitchLevel: (lvl: number) => void
    currentLvl: number
    title: string
}

const ChooseLevel: React.FC<ChooseLevelProps> = ({
    levels, handleClickSwitchLevel, currentLvl, title
}) : React.ReactElement=> {

    const handleClick = (lvl: number): void => {
        handleClickSwitchLevel(lvl)
    }

    return (
        <>
        <h2>{title}: </h2>
        <div className="сhooseLvl-block">
            {levels?.map((lvl, idx) => (
                <div 
                    className={clsx({
                        'сhooseLvl__item': true, 
                        'сhooseLvl__item--active': currentLvl === idx+1
                    })}
                    key={generateID()}
                    onClick={() => handleClick(lvl)}
                >
                    {lvl}
                </div>
            ))}
        </div>
        </>
    )
}

export default ChooseLevel
