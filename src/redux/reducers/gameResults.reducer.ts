import { sortByAsc } from './../../utils/utils';
import { userStore, LocalStorageType } from './../../utils/localstorage';
import { GameResultsTypes } from './../types/stateTypes';
import { GameActionsCreators, GameActionsType } from './../types/actionsTypes';

const initialResults: GameResultsTypes = {
    results: [],
    countGame: 0,
    filterResults: []
}

export const gameResultsReducer = (state = initialResults, action: GameActionsCreators) => {
    switch (action.type) {
        case GameActionsType.INITIAL_RESULTS: {
            const nextState = userStore.getResults(LocalStorageType.results, initialResults)
            return nextState
        }
        case GameActionsType.UPDATE_RESULTS: {
            const nextState = {
                ...state,
                results: [
                    ...state.results,
                    action.payload
                ],
                countGame: state.countGame + 1
            }
            userStore.setResults(LocalStorageType.results, nextState)
            return nextState
        }
        case GameActionsType.FLTER_RESULTS:{
            return  {
                ...state,
                filterResults: sortByAsc([...state.results].filter(res => (
                    res.level === action.payload
                )))
            }
        }
        default:
            return state;
    }
}