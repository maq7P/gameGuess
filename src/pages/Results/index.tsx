import clsx from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import Choose from '../../components/Choose'
import NavigateArrow from '../../components/NavigateArrow'
import { set_level } from '../../redux/actions/gameActiveState.action'
import { filter_results } from '../../redux/actions/gameResults.action'
import { IRootState } from '../../redux/rootReducer'
import { GameResultsTypes, GameSettings } from '../../redux/types/stateTypes'
import { convertArrIn, generateID } from '../../utils/utils'
import './style.scss'

const Results = () => {
    const dispatch = useDispatch()

    const handleClickSwitchLevel = React.useCallback((lvl: number) => {
        dispatch(set_level(lvl))
        dispatch(filter_results(lvl))
    }, [])

    const {filterResults} = useSelector<IRootState, GameResultsTypes>(state => (
        state.gameResultsReducer
    ))
    const {numbers, highPoints, levels, currentLevel} = useSelector<IRootState, GameSettings>(state => (
        state.gameSettingsReducer
    ))

    React.useEffect(() => {
        handleClickSwitchLevel(currentLevel)
    }, [])

    return (
        <>
            <NavigateArrow to="/" style={{marginRight: '5px'}}/>
            <Helmet>
                <title>Статистика</title>
            </Helmet>
            <div className="results__wrapper">
                <Choose
                    handleClickSwitchLevel={handleClickSwitchLevel}
                    levels={levels}
                    currentLvl={currentLevel}
                    title={'Выберете уровень сложности'}
                />

                {!filterResults?.length && 
                    <motion.h3
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{ duration: 2 }}
                    >
                        Вы еще не играли на этом уровне
                    </motion.h3>
                }

                {filterResults && filterResults.length > 0 && <div className="results-main">
                    {filterResults.map((res, idx) => 
                        <motion.div 
                            key={generateID()}
                            className={clsx({
                                "results-main__item": true,
                                "results-main__item--first": idx === 0,
                                "results-main__item--second": idx === 1,
                                "results-main__item--third": idx === 2,
                            })}
                            initial={{
                                y: 50,
                                opacity: 0
                                
                            }}
                            animate={{
                                y: 0,
                                opacity: 1
                            }}
                            transition={{ duration: 1 }}
                        >
                            <span 
                                className={clsx({
                                    "results-main__place": true,
                                    "results-main__place--first": idx === 0,
                                    "results-main__place--second": idx === 1,
                                    "results-main__place--third": idx === 2,
                                })}
                            > {idx <= 2 ? highPoints[idx] : convertArrIn(numbers, idx)}
                            </span>
                            <div>{res.totalTime} секунд</div>
                        </motion.div>
                    )}
                </div>}
            </div>
        </>
    )
}

export default Results
