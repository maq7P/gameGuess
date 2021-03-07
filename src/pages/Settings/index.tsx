import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChooseLevel from '../../components/Choose'
import NavigateArrow from '../../components/NavigateArrow'
import SwitchTheme from '../../components/SwitchTheme'
import { set_level } from '../../redux/actions/gameActiveState.action'
import { initial_results } from '../../redux/actions/gameResults.action'
import { initial_settings, switch_theme } from '../../redux/actions/gameSettings.action'
import { IRootState } from '../../redux/rootReducer'
import { GameSettings } from '../../redux/types/stateTypes'
import './style.scss'

const Settings = () => {
    const dispatch = useDispatch()

    const handleClickSwitchLevel = React.useCallback((lvl: number) => {
        dispatch(set_level(lvl))
    }, [])
    const handleClickSwitchTheme = React.useCallback((themeIdx: number) => {
        dispatch(switch_theme(themeIdx))
    }, [])

    const {
        themes, currentTheme,
        levels, currentLevel
    } = useSelector<IRootState, GameSettings>(state => (
        state.gameSettingsReducer
    ))


    console.log('cr LEVEL',currentLevel);
    console.log('cr THEME', currentTheme);

    return (
        <>
        <div>
            <NavigateArrow to="/"/>
            <div className="settings__wraper">
                <div className="settings-block">
                    <ChooseLevel
                        handleClickSwitchLevel={handleClickSwitchLevel}
                        levels={levels}
                        currentLvl={currentLevel}
                        title={'Установить уровень сложности'}
                    />
                    <SwitchTheme
                        themes={themes}
                        activeTheme={currentTheme}
                        handleClickSwitchTheme={handleClickSwitchTheme}
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Settings
