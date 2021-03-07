import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generateDinamicStyleCell, generateDinamicStyleWrapper, generateDinamicStyleWrapperRow } from '../../engine/core'
import { game_over, game_start } from '../../redux/actions/gamePage.action'
import { IRootState } from '../../redux/rootReducer'
import { FieldType } from '../../redux/types/actionsTypes'
import { generateID } from '../../utils/utils'
import Cell from '../Cell'
import Timer from '../Timer'
import './style.scss'

import home from '../../assets/images/home.svg'
import replay from '../../assets/images/replay.svg'
import statistic from '../../assets/images/statistic.svg'
import { NavLink } from 'react-router-dom'
import { GameResultsTypes } from '../../redux/types/stateTypes'
import { reset_active_state } from '../../redux/actions/gameActiveState.action'
import { motion } from "framer-motion"
import { initial_basic_feild } from '../../redux/actions/gameField.action'
import { initial_results } from '../../redux/actions/gameResults.action'

interface GameFieldProps {
    size: number
    gameField: FieldType
    currentLevel: number
    countPairs: number
    sideSquare: number
    side: number
    rowHight: number,
    space: number,
    colorsPairs: {
        [name: number]: string
    },
    emptySmile: string
    activeSmile: string
    guessedSmile: string
    gameOver: boolean
}
const GameFiled: React.FC<GameFieldProps> = ({
    size,
    gameField,
    countPairs,
    sideSquare,
    side,
    rowHight,
    space,
    colorsPairs,
    emptySmile,
    activeSmile,
    currentLevel,
    guessedSmile,
    gameOver
}): React.ReactElement => {
    const dispatch = useDispatch()
    const totalTime = useSelector<IRootState, number>(
        (state: IRootState) => state.gameActiveState.totalTime
    )
    
    const pairsOpened = useSelector<IRootState, number>(
        (state: IRootState) => state.gameActiveState.pairsOpened
    )
    React.useEffect(() => {
        if(pairsOpened === countPairs && !gameOver){
            dispatch(game_over())
            dispatch(reset_active_state())
            dispatch(initial_results())
        }
    })

    const fadeIn = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
    
    const isStart = totalTime === 0
    return (
        <div className="field">
            {gameOver && totalTime > 0 && (
                
                    <motion.div 
                        className="filed-gameover"
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1 }}
                    >
                        <div className="filed-gameover__title">
                            ИГРА ЗАКОНЧЕНА
                        </div>
                        <div className="filed-gameover__result">
                            Итоговое время: {totalTime}
                        </div>
                        <nav className="filed-gameover__nav">
                            <NavLink to="/">
                                <img 
                                    src={home} 
                                    alt="home"
                                    className="filed-gameover__icon"
                                    title="На галвную"
                                />
                            </NavLink>
                            <NavLink to="/results">
                                <img 
                                    src={statistic} 
                                    alt="statistic"
                                    className="filed-gameover__icon"
                                    title="Посмотреть статистику"
                                />
                            </NavLink>
                        </nav>
                    </motion.div>
            )}
            {gameOver && totalTime === 0 && (
                <motion.h2
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                >Победа
                </motion.h2>
            )}
            {isStart && (
            <div
                className="field-wrapper"
                style={generateDinamicStyleWrapper(side)}
            >   
                {gameField.map((row, idx) => (
                    <div 
                        key={generateID()}
                        className="field__row"
                        style={generateDinamicStyleWrapperRow(rowHight, space, size, idx)}
                    >
                        {row.map((cell, jdx) => (
                            <Cell 
                                key={generateID()}
                                pairValue={cell}
                                cell={[idx, jdx]}
                                emptySmile={emptySmile}
                                activeSmile={activeSmile}
                                guessedSmile={guessedSmile}
                                colorsPairs={colorsPairs}
                                pairsOpened={pairsOpened}
                                countPairs={countPairs}
                                style={generateDinamicStyleCell(sideSquare, space, size, jdx)}
                            />
                        ))}
                    </div>
                ))}
            </div>
            )} 
            <div 
                className="field__rest"
                style={
                    {
                        display: !isStart ? 'none' : ''
                    }
                }
            >
                <div className="field__rest-el">
                    Секунд прошло: <Timer 
                        gameOver={gameOver}
                        lvl={currentLevel}
                    />
                </div>
                <div className="field__rest-el">
                    Пар осталось: {countPairs - pairsOpened}
                </div>
            </div> 
        </div>
    )
}
export default GameFiled
