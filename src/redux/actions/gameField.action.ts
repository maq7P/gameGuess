import { ActiveCell } from '../types/stateTypes';
import { GameActionsType, InitialActiveFeildType, FieldType, ClearActiveCell, InitialBasicFieldType, SetNextField 
} from '../types/actionsTypes';

export const initial_basic_feild = (
    size: number, countPairs: number
): InitialBasicFieldType => ({
    type: GameActionsType.INITIAL_BASIC_FEILD,
    payload: {
        size,
        countPairs
    }
})
export const initial_active_feild = (field: FieldType): InitialActiveFeildType => ({
    type: GameActionsType.INITIAL_ACTIVE_FEILD,
    payload: field
})
export const set_next_field = (activeCel: FieldType): SetNextField => ({
    type: GameActionsType.SET_NEXT_FIELD,
    payload: activeCel // example: [[0,1], [2,1]]
})