import { FieldType } from './actionsTypes';
export enum LoadingState {
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}
//  MainPageState
interface MainPageLink {
    link: string
    title: string 
}
export interface MainPageState {
    title: string
    navigation: Array<MainPageLink>
    gameDescription: string
    loading: boolean
}

//  GamePageState
export interface ActiveCell {
    pairId: number,
    cell: Array<number>
}
export interface GamePageState {
    title: string
    loading: boolean
    gameOver: boolean,
}

// Game settings
export interface ThemeType {
    name: string,
    color: string
}
export interface GameSettings {
    levels: Array<number>
    currentLevel: number
    size: number
    gameField: FieldType
    countPairs: number
    sideSquare: number 
    space: number
    colorsPairs: {
        [name: number]: string
    }
    emptySmile: string
    guessedSmile: string
    variantsOfActiveSmile: {
        [name: string]: string
    }
    activeSmile: string
    numbers: string[]
    highPoints: string[]
    themes: Array<ThemeType>
    currentTheme: number
}

// Game active state
export interface ActiveElements {
    activeCell: ActiveCell// example: [0,0]
    totalTime: number
    currentGameField: FieldType,
    timeCellDestroy: number,
    pairsOpened: number
}

// Game field
export interface GameFieldTypes {
    currentGameField: FieldType,
    gameField: FieldType,
}

// Game results
export interface ResultType {
    totalTime: number
    level: number
}
export interface GameResultsTypes {
    results: Array<ResultType>
    countGame: number
    filterResults: Array<ResultType>
}