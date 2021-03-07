import { AddGuessedPair, ResetActiveState } from './../types/actionsTypes';
import { ActiveCell } from '../types/stateTypes';
import { GameActionsType, 
    SetLevel, ResetTotalTimeType, SetTotalType, 
    SetActiveCell, InitialActiveFeildType, FieldType, 
    ClearActiveCell, InitialBasicFieldType 
} from '../types/actionsTypes';

export const set_level = (level: number): SetLevel => ({
    type: GameActionsType.SET_LEVEL,
    payload: level
})
export const set_total_time = (time: number): SetTotalType => ({
    type: GameActionsType.SET_TOTAL_TIME,
    payload: time
})
export const reset_timer = (): ResetTotalTimeType => ({
    type: GameActionsType.RESET_TOTAL_TIME
})
export const set_active_cell = (activeCel: ActiveCell): SetActiveCell => ({
    type: GameActionsType.SET_ACTIVE_CELL,
    payload: activeCel
})
export const clear_active_cell = (): ClearActiveCell => ({
    type: GameActionsType.CLEAR_ACTIVE_CELL
})
export const reset_active_state = (): ResetActiveState => ({
    type: GameActionsType.RESET_ACTIVE_STATE
})
export const add_guessed_pair = (): AddGuessedPair => ({
    type: GameActionsType.ADD_GUESSED_PAIR
})

