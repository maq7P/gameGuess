import { Action } from 'redux';
interface Test {
    test: number
}
const initialMainPageState: Test = {
    test: 1
}
export const testReducer = (state = initialMainPageState, action: Action) => {
    switch (action.type) {
        
        case 'TEST': {
            console.log('happened');
            return {
                test: state.test + 1
            }
        }
        default:
            return state;
    }
}