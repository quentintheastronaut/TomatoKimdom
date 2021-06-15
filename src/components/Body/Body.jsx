import React from 'react'
import Clock from '../Clock/Clock'
import './Body.css'
// import {useSelector} from 'react-redux'
import Stack from '../Stack/Stack'
// import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function Body() {

    // const counter = useSelector(state => state.periodCounter)
    // const state = useSelector(state => state.state)
    // const interval = useSelector(state => state.longBreakInterval)

    return (
        <div className="Body">
            <div className="Body-wrapper">
                <Clock />
                <Stack />
            </div>     
        </div>
    )
}

export default Body
