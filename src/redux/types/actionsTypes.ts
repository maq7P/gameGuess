import { ActiveCell, ResultType } from './stateTypes';
import { Action } from "redux";

// GameActionsType
export enum GameActionsType {
  INITIAL_FEILD = 'game/INITIAL_FEILD',
  SET_LEVEL = 'game/SET_LEVEL',
  SET_TOTAL_TIME = 'game/SET_TOTAL_TIME',
  RESET_TOTAL_TIME = 'game/RESET_TOTAL_TIME',
  SET_ACTIVE_CELL = 'game/SET_ACTIVE_CELL',
  INITIAL_ACTIVE_FEILD = 'game/INITIAL_ACTIVE_FEILD',
  SET_NEXT_FIELD = 'game/SET_NEXT_FIELD',
  CLEAR_ACTIVE_CELL = 'game/CLEAR_ACTIVE_CELL',
  INITIAL_BASIC_FEILD = 'game/INITIAL_BASIC_FEILD',
  SET_GUESSED_SMILE = 'game/SET_GUESSED_SMILE',
  GAME_OVER = 'game/GAME_OVER',
  GAME_START = 'game/GAME_START',
  UPDATE_RESULTS = 'game/UPDATE_RESULTS',
  RESET_ACTIVE_STATE = 'game/RESET_ACTIVE_STATE',
  ADD_GUESSED_PAIR = 'game/ADD_GUESSED_PAIR',
  INITIAL_RESULTS = 'game/INITIAL_RESULTS',
  FLTER_RESULTS = 'game/FLTER_RESULTS',
  INITIAL_SETTINGS = 'game/INITIAL_SETTINGS',
  SWITCH_THEME = 'game/SWITCH_THEME'
}
export type FieldType = Array<Array<Number>>

export interface InitialFeildType extends Action<GameActionsType> {
  type: GameActionsType.INITIAL_FEILD
}
export interface InitialBasicFieldType extends Action<GameActionsType> {
  type: GameActionsType.INITIAL_BASIC_FEILD,
  payload: {
    size: number
    countPairs: number
  }
}
export interface InitialActiveFeildType extends Action<GameActionsType> {
  type: GameActionsType.INITIAL_ACTIVE_FEILD,
  payload: FieldType
}
export interface SetTotalType extends Action<GameActionsType> {
  type: GameActionsType.SET_TOTAL_TIME
  payload: number
}
export interface ResetTotalTimeType extends Action<GameActionsType> {
  type: GameActionsType.RESET_TOTAL_TIME
}
export interface SetLevel extends Action<GameActionsType> {
  type: GameActionsType.SET_LEVEL,
  payload: number
}
export interface SetActiveCell extends Action<GameActionsType> {
  type: GameActionsType.SET_ACTIVE_CELL,
  payload: ActiveCell
}
export interface ClearActiveCell extends Action<GameActionsType> {
  type: GameActionsType.CLEAR_ACTIVE_CELL
}
export interface SetNextField extends Action<GameActionsType> {
  type: GameActionsType.SET_NEXT_FIELD,
  payload: FieldType
}
export interface SetGuessedSmile extends Action<GameActionsType> {
  type: GameActionsType.SET_GUESSED_SMILE,
}
export interface GameOverType extends Action<GameActionsType> {
  type: GameActionsType.GAME_OVER,
}
export interface GameStartType extends Action<GameActionsType> {
  type: GameActionsType.GAME_START,
}
export interface UpdateResults extends Action<GameActionsType> {
  type: GameActionsType.UPDATE_RESULTS,
  payload: ResultType
}
export interface ResetActiveState extends Action<GameActionsType> {
  type: GameActionsType.RESET_ACTIVE_STATE,
}
export interface AddGuessedPair extends Action<GameActionsType> {
  type: GameActionsType.ADD_GUESSED_PAIR,
}
export interface InititalResults extends Action<GameActionsType> {
  type: GameActionsType.INITIAL_RESULTS,
}
export interface InititalSettings extends Action<GameActionsType> {
  type: GameActionsType.INITIAL_SETTINGS,
}
export interface FilterResults extends Action<GameActionsType> {
  type: GameActionsType.FLTER_RESULTS,
  payload: number
}
export interface SwitchTheme extends Action<GameActionsType> {
  type: GameActionsType.SWITCH_THEME,
  payload: number
}

export type GameActionsCreators = 
  InitialFeildType | SetLevel | SetTotalType |
  ResetTotalTimeType | SetActiveCell | InitialActiveFeildType |
  SetNextField | ClearActiveCell | InitialBasicFieldType |
  SetGuessedSmile | GameOverType | GameStartType |UpdateResults | 
  ResetActiveState | AddGuessedPair | InititalResults | FilterResults| 
  InititalSettings | SwitchTheme

