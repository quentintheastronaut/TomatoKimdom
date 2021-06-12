import React from 'react'
import Clock from '../Clock/Clock'
import './Body.css'
// import {useSelector} from 'react-redux'
import Stack from '../Stack/Stack'

function Body() {

    // const counter = useSelector(state => state.periodCounter)
    // const state = useSelector(state => state.state)
    // const interval = useSelector(state => state.longBreakInterval)

    return (
        <div className="Body">
            <Clock />
            <Stack />
        </div>
    )
}

export default Body
