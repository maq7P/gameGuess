import { userStore, LocalStorageType } from './../../utils/localstorage';
import { createRandomField, defineValuesDependLvl } from './../../engine/core';
import { GameSettings } from './../types/stateTypes';
import { GameActionsType, GameActionsCreators } from './../types/actionsTypes';
const initialGamePageState: GameSettings = {
    levels: [1, 2, 3],
    currentLevel: 1,
    size: 2,//6
    gameField: [],
    countPairs: 1,//9
    sideSquare: 75,//50
    space: 10,//5
    colorsPairs: {
        0: 'grey',
        1: '#f36565',
        2: 'rgb(160, 255, 160)',
        3: 'rgb(241, 186, 82)',
        4: 'rgb(121, 121, 243)',
        5: 'red',
        6: '#fff',
        7: 'pink',
        8: 'rgb(188, 239, 252)',
        9: 'rgb(131, 233, 224)'
    },
    emptySmile: '◯',
    guessedSmile: '✅',
    variantsOfActiveSmile: {
        'roket': '🚀',
        'plane': '✈️',
        'comet': '☄',
        'heart': '❤'
    },
    activeSmile: '🚀',
    numbers: [
        '0️⃣','1️⃣','2️⃣',`3️⃣`,`4️⃣`,`5️⃣`,`6️⃣`,`7️⃣`,`8️⃣`,`9️⃣`
    ],
    highPoints: [
        '🏆', '🥈', '🥉'
    ],
    themes: [
        {
            name: 'default',
            color: 'rgb(109, 109, 202)'
        },
        {
            name: 'red',
            color: 'rgb(146, 23, 23)'
        },
        {
            name: 'blue',
            color: 'rgb(23, 107, 146)'
        },
    ],
    currentTheme: 0
}
export const gameSettingsReducer = (state = initialGamePageState, action: GameActionsCreators) => {
    switch (action.type) {
        case GameActionsType.INITIAL_SETTINGS: {
            const {size, countPairs} = defineValuesDependLvl(1)
            const userSettings = userStore.getResults(LocalStorageType.settings, {
                currentLevel: state.currentLevel,
                size: size,
                countPairs: countPairs,
                activeSmile: state.activeSmile,
                currentTheme: state.currentTheme
            })
            return {
                ...state,
                ...userSettings
            }
        }
        case GameActionsType.INITIAL_FEILD: {
            // Generate array
            const {size, countPairs} = state
            const gameField = createRandomField(size, countPairs)
            return {
                ...state,
                gameField,
            }
        }
        case GameActionsType.SET_LEVEL: {
            const {size, countPairs} = defineValuesDependLvl(action.payload)

            const stateForLocalStore = {
                ...userStore.getResults(LocalStorageType.settings,{}),
                ...{
                    currentLevel: action.payload,
                    size: size,
                    countPairs: countPairs,
                }
            }

            userStore.setResults(LocalStorageType.settings, stateForLocalStore)
            return {
                ...state,
                currentLevel: action.payload,
                size,
                countPairs
            }
        }
        case GameActionsType.SWITCH_THEME: {
            const stateForLocalStore = {
                ...userStore.getResults(LocalStorageType.settings,{}),
                ...{
                    currentTheme: action.payload,
                }
            }
            userStore.setResults(LocalStorageType.settings, stateForLocalStore)
            return {
                ...state,
                currentTheme: action.payload,
            }
        }
        default:
            return state;
    }
}