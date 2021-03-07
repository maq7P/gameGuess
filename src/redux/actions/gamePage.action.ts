import { GameActionsType, GameOverType, GameStartType } from './../types/actionsTypes';

export const game_over = (): GameOverType => ({
    type: GameActionsType.GAME_OVER
})
export const game_start = (): GameStartType => ({
    type: GameActionsType.GAME_START
})