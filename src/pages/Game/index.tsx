import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import GameFiled from '../../components/GameField'
import NavigateArrow from '../../components/NavigateArrow'
import { generateSizeFieldValues } from '../../engine/core'
import { reset_active_state } from '../../redux/actions/gameActiveState.action'
import { initial_basic_feild } from '../../redux/actions/gameField.action'
import { game_start } from '../../redux/actions/gamePage.action'
import { IRootState } from '../../redux/rootReducer'
import { GameFieldTypes, GamePageState, GameSettings } from '../../redux/types/stateTypes'
import './style.scss'

const Game = () => {
    const dispatch = useDispatch()
    const {
        size,
        countPairs, sideSquare, 
        space, colorsPairs,
        emptySmile, activeSmile, guessedSmile,
        currentLevel
    } = useSelector<IRootState, GameSettings>(
        (state: IRootState) => state.gameSettingsReducer
    )

    const {title, gameOver} = useSelector<IRootState, GamePageState>(
        (state: IRootState) => state.gamePageReducer
    )

    React.useEffect(() => {
        const Reloaded  = function(){
            dispatch(game_start())
            dispatch(reset_active_state())
            dispatch(initial_basic_feild(size, countPairs))
        }
        window.onload = function() {
            var loaded = sessionStorage.getItem('loaded');
            if(loaded) {
                Reloaded();
            } else {
                // @ts-ignore
                sessionStorage.setItem('loaded', true);
            }
        }
        dispatch(initial_basic_feild(size, countPairs))
    }, [dispatch, countPairs, size])
    
    const {side, rowHight} = generateSizeFieldValues(sideSquare, size, space)
    
    const {
        gameField, 
    } = useSelector<IRootState, GameFieldTypes>(
        (state: IRootState) => state.gameField
    )

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <NavigateArrow to="/"/>
            {gameField.length && (<GameFiled
                size={size}
                gameField={gameField}
                currentLevel={currentLevel}
                countPairs={countPairs}
                sideSquare={sideSquare}
                side={side}
                rowHight={rowHight}
                space={space}
                colorsPairs={colorsPairs}
                emptySmile={emptySmile}
                activeSmile={activeSmile}
                guessedSmile={guessedSmile}
                gameOver={gameOver}
            />)}
        </div>
    )
}

export default React.memo(Game)
