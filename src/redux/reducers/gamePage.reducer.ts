import { GameActionsCreators, GameActionsType } from './../types/actionsTypes';
import { GamePageState } from "../types/stateTypes";

const initialGamePageState: GamePageState = {
    title: 'Игра...',
    loading: false,
    gameOver: false
}

export const gamePageReducer = (state = initialGamePageState, action: GameActionsCreators) => {
    switch (action.type) {
        case GameActionsType.GAME_START: {
            return {
                ...state,
                gameOver: false
            }
        }
        case GameActionsType.GAME_OVER: {
            return {
                ...state,
                gameOver: true
            }
        }
        default:
            return state;
    }
}