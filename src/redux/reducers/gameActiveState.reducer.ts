import { updateRandomDield } from './../../engine/core';
import { ActiveElements } from './../types/stateTypes';
import { GameActionsCreators, GameActionsType } from './../types/actionsTypes';

const initialGamePageState: ActiveElements = {
    activeCell: {
        pairId: 0,
        cell: []
    },
    totalTime: 0,
    currentGameField: [],
    timeCellDestroy: 5000,
    pairsOpened: 0
}

export const gameActiveState = (state = initialGamePageState, action: GameActionsCreators) => {
    switch (action.type) {
        case GameActionsType.SET_LEVEL: {
            return {
                ...state,
                activeLevel: action.payload
            }
        }
        case GameActionsType.SET_TOTAL_TIME: {
            return {
                ...state,
                totalTime: action.payload
            }
        }
        case GameActionsType.RESET_TOTAL_TIME: {
            return {
                ...state,
                totalTime: 0
            }
        }
        case GameActionsType.SET_ACTIVE_CELL: {
            return {
                ...state,
                activeCell: action.payload
            }
        }
        case GameActionsType.CLEAR_ACTIVE_CELL: {
            return {
                ...state,
                activeCell: {
                    ...state.activeCell,
                    cell: []
                }
            }
        } 
        case GameActionsType.RESET_ACTIVE_STATE: {
            return initialGamePageState
        } 
        case GameActionsType.ADD_GUESSED_PAIR: {
            return {
                ...state,
                pairsOpened: state.pairsOpened + 1
            }
        } 
        default:
            return state;
    }
}