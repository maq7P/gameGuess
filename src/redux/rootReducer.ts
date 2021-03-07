import { gameResultsReducer } from './reducers/gameResults.reducer';
import { gameField } from './reducers/gameField.reducer';
import { gameSettingsReducer } from './reducers/gameSetting.reducer';
import { gameActiveState } from './reducers/gameActiveState.reducer';
import { testReducer } from './reducers/test.reducer';
import { gamePageReducer } from './reducers/gamePage.reducer';
import { mainPageReducer } from './reducers/mainPage.reducer';
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    mainPageReducer,
    gamePageReducer,
    gameSettingsReducer,
    gameActiveState,
    gameField,
    gameResultsReducer,

    testReducer,
})

export type IRootState = ReturnType<typeof rootReducer>