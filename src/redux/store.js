import { createStore } from 'redux'

// initial State 

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  }

const initialState = {
    period: 50,
    shortBreak: 10,
    longBreak: 20,
    longBreakInterval: 4,
    periodCounter: 0,
    state: 'pomodoro', // pomodoro | short | long
    todos: [
        { id: 0, text: 'Learn React', completed: true , color: '#e0544c' },
        { id: 1, text: 'Learn Redux', completed: false, color: '#e0544c' },
        { id: 2, text: 'Build something fun!', completed: false, color: '#e0544c' }
    ],
    filters: {
        status: 'Active',
        colors: ['red', 'blue']
      }
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

        case 'todos/add': 
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: nextTodoId(state.todos),
                        text: action.payload,
                        completed: false,
                        color: '#e0544c'
                      }
                ]
            }

        case 'todos/setDone': 
            return {
                ...state,
                todos: state.todos.map(todo => {
                if (todo.id !== action.payload) {
                    return todo
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
          }
        case 'todos/delete': 
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
        }
        default:
            return state;
    }
}


// store
let store = createStore(reducer)


export default store