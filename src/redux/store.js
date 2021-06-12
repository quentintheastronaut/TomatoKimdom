import { createStore } from 'redux'

// initial State 

const initialState = {
    period: 50,
    shortBreak: 10,
    longBreak: 20,
    longBreakInterval: 4,
    periodCounter: 0,
    state: 'pomodoro' // pomodoro | short | long
}


// reducer

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SETPERIOD': return {
            ...state,
            period: action.value
        }
        case 'SETSHORTBREAK': return {
            ...state,
            shortBreak: action.value
        }
        case 'SETLONGBREAK': return {
            ...state,
            longBreak: action.value
        }
        case 'SETLONGBREAKINTERVAL': return {
            ...state,
            longBreakInterval: action.value
        }
        case 'SETPERIODCOUNTER': return {
            ...state,
            periodCounter: action.value
        }
        case 'SETSTATE': return {
            ...state,
            state: action.value
        }
        default:
            return state;
    }
}


// store
let store = createStore(reducer)


export default store