import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux'
import {rootReducer} from "./rootReducer";

// creating store
export const store = createStore(
    rootReducer, 
    composeWithDevTools(
        // put middlewares
        applyMiddleware(

        )
    )
)