import { Action } from "redux";
import { MainPageState } from "../types/stateTypes";

const initialMainPageState: MainPageState = {
    title: 'Главное меню',
    navigation: [
        {
            title: 'Статистика',
            link: '/results'
        },
        {
            title: 'Настройки',
            link: '/settings'
        },
    ],
    gameDescription: `
        При нажатии на кнопку “старт” запускается таймер.
        По нажатию на карточку она открывается, в течении 5 сек игроку нужно открыть вторую карточку, если иконки на паре открытых карт совпадают они удаляются, если нет - пара открытых карт закрываются. 
        Игра заканчивается когда все пары карт найдены.
    `,
    loading: false
}

export const mainPageReducer = (state = initialMainPageState, action: Action) => {
    switch (action.type) {
        default:
            return state;
    }
}