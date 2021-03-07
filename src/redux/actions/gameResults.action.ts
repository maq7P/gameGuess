import { ResultType } from './../types/stateTypes';
import { GameActionsType, UpdateResults, InititalResults, FilterResults } from './../types/actionsTypes';


export const update_results = (result: ResultType): UpdateResults => ({
    type: GameActionsType.UPDATE_RESULTS,
    payload: result
})
export const initial_results = (): InititalResults => ({
    type: GameActionsType.INITIAL_RESULTS,
})
export const filter_results = (level: number): FilterResults => ({
    type: GameActionsType.FLTER_RESULTS,
    payload: level
})
