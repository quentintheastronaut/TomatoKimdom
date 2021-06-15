export const setPeriod = (value) => {
    return {
        type: 'SETPERIOD',
        value: value,
    }
}

export const setShortBreak = (value) => {
    return {
        type: 'SETSHORTBREAK',
        value: value,
    }
}

export const setLongBreak = (value) => {
    return {
        type: 'SETLONGBREAK',
        value: value,
    }
}

export const setLongBreakInterval = (value) => {
    return {
        type: 'SETLONGBREAKINTERVAL',
        value: value,
    }
}

export const setPeriodCounter = (value) => {
    return {
        type: 'SETPERIODCOUNTER',
        value: value,
    }
}

export const setState = (value) => {
    return {
        type: 'SETSTATE',
        value: value,
    }
}

export const addTodo = (todoText) => {
    return {
        type: 'todos/add',
        payload: todoText,
    }
}


export const deleteTodo = (todoId) => {
    return {
        type: 'todos/delete',
        payload: todoId
    }
}

export const setStateTodo = (todoId) => {
    return {
        type: 'todos/setDone',
        payload: todoId
    }
}