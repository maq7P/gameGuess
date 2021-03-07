import { GameFieldTypes } from './../types/stateTypes';

import { createRandomField, updateRandomDield } from './../../engine/core';
import { GameActionsCreators, GameActionsType } from './../types/actionsTypes';

const initialGameField: GameFieldTypes = {
    currentGameField: [],
    gameField: [],
}

export const gameField = (state = initialGameField, action: GameActionsCreators) => {
    switch (action.type) {
        case GameActionsType.INITIAL_BASIC_FEILD: {
            // Generate array
            const {size, countPairs} = action.payload
            const gameField = createRandomField(size, countPairs)
            return {
                ...state,
                gameField
            }
        }
        case GameActionsType.INITIAL_ACTIVE_FEILD: {
            return {
                ...state,
                currentGameField: action.payload
            }
        }
        case GameActionsType.SET_NEXT_FIELD: {
            const field = updateRandomDield(state.gameField, action.payload)

            return {
                ...state,
                gameField: field
            }
        }
        default:
            return state;
    }
}