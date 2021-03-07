import { 
    GameActionsType, SetLevel, SetGuessedSmile, 
    InititalSettings, SwitchTheme 
} from './../types/actionsTypes';


export const set_level = (level: number): SetLevel => ({
    type: GameActionsType.SET_LEVEL,
    payload: level
})
export const set_guessed_smile = (): SetGuessedSmile => ({
    type: GameActionsType.SET_GUESSED_SMILE
})
export const initial_settings = (): InititalSettings => ({
    type: GameActionsType.INITIAL_SETTINGS
})
export const switch_theme = (themeIdx: number): SwitchTheme => ({
    type: GameActionsType.SWITCH_THEME,
    payload: themeIdx
})