import { motion } from 'framer-motion'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Button from '../../components/Button'
import Hint from '../../components/Hint'
import { reset_active_state } from '../../redux/actions/gameActiveState.action'
import { game_start } from '../../redux/actions/gamePage.action'
import { initial_results } from '../../redux/actions/gameResults.action'
import { initial_settings } from '../../redux/actions/gameSettings.action'
import { IRootState } from '../../redux/rootReducer'
import { MainPageState } from '../../redux/types/stateTypes'
import './style.scss'


const MainPage = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(initial_results())
        dispatch(initial_settings())
    }, [dispatch])

    const {
        gameDescription, 
        title,
        navigation
    } = useSelector<IRootState, MainPageState>(
        (state: IRootState) => state.mainPageReducer
    )

    
    const handleStartClick = () => {
        dispatch(game_start())
        dispatch(reset_active_state())
    }

    return (
        <motion.div 
            className="MainPage"
            initial={{
                scale: 0
            }}
            animate={{
                scale: 1
            }}
            transition={{ duration: 1 }}
        >
            <Helmet>
                <title>{title}</title>
            </Helmet>

            <nav className="mainPage-nav">
                <ul className="mainPage-nav__list">
                    {navigation.length > 0 && (
                        navigation.map(nav => (
                            <li 
                                key={nav.title}
                                className="mainPage-nav__item"
                            >
                                <NavLink to={nav.link}>
                                    <span className="mainPage-nav__item-title">
                                        {nav.title}
                                    </span>
                                </NavLink>
                            </li>
                        ))
                    )}
                    <Hint 
                        top
                        right
                        modalRight
                        modalWidth={'320px'}
                    >
                        {gameDescription}
                    </Hint>
                </ul>
                <NavLink to='/game'>
                    <Button 
                        className="mainPage-nav__btn"
                        onClick={handleStartClick}
                    >
                            <span>Старт</span>
                    </Button>
                </NavLink>
            </nav>

        </motion.div>
    )
}

export default MainPage
