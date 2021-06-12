import React, {useState, useEffect, useRef} from 'react'
// import PropTypes from 'prop-types'
import './Clock.css'
import Button from '../Button/Button'
import {useSelector} from 'react-redux'
import {setPeriodCounter ,setState} from '../../redux/action'
import {useDispatch} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay , faStop, faUndo} from '@fortawesome/free-solid-svg-icons'

Clock.propTypes = {
}

function formatTime(length){
    const minutes = `0${Math.floor(length/60).toString()}`.slice(-2);
    const seconds = `0${(length%60).toString()}`.slice(-2);
    return `${minutes}:${seconds}`
}

function Clock(props) {

    const dispatch = useDispatch()

    const period = useSelector(state => state.period)
    const counter = useSelector(state => state.periodCounter)
    const short = useSelector(state => state.shortBreak)
    const long = useSelector(state => state.longBreak)
    const interval = useSelector(state => state.longBreakInterval)
    const state = useSelector(state => state.state)

    

    const [time, setTime] = useState(period*60)
    const intervalRef = useRef(null);
    const [run,setRun] = useState(false);
    
    useEffect(()=>{
        if(run){
            intervalRef.current = setTimeout(()=>{
                setTime(time => time - 1);
            },1000)
    
            if(time < 0) {

                // After short break 
                setTime(period)
                setRun(false)
                clearTimeout(intervalRef.current);
            }

            return () => clearTimeout(intervalRef.current);
        }
    },[time,run,period])

    function handleAgain(e){
        setRun(false)
        setTime(period*60)
    }

    function handlePlay(e){
        if(run){
            console.log("stop")
            setRun(false)
        }
        else {
            console.log("play")
            setRun(true)
        }
    }

    function handleNext(e){
        // Move to the next step:

        // Case 1: Current state == pomodoro && counter < 3 => current state == short
        if(state === 'pomodoro' && counter < interval -1){
            dispatch(setState('short'))
            dispatch(setPeriodCounter(counter+1))

            setTime(short*60)
            setRun(false)
        }
        // Case 2: Current state == pomodoro && counter == 3 => current state == long
        else if(state === 'pomodoro' && counter >= interval-1){
            dispatch(setState('long'))
            dispatch(setPeriodCounter(counter+1))

            setTime(long*60)
            setRun(false)
        }
        // Case 3: Current state == short => current state = pomodoro
        else if(state === 'short'){
            dispatch(setState('pomodoro'))

            setTime(period*60)
            setRun(false)
        }
        // Case 4: Current state == long => reset counter
        else if(state === 'long'){
            dispatch(setState('pomodoro'))
            dispatch(setPeriodCounter(0))

            setTime(period*60)
            setRun(false)
        }
    } 

    return (
        <div className="Clock">
            <div className="Clock-wrapper">
                <p className="Clock-time">{formatTime(time)}</p>
                <p className="Clock-string">seconds</p>
            </div>

            <div className="navigation">
                    <Button title={<FontAwesomeIcon icon={faUndo}/>} onClick={handleAgain}/>
                    <Button title={time === period*60 || run === false ? <FontAwesomeIcon icon={faPlay}/> :<FontAwesomeIcon icon={faStop}/>} onClick={handlePlay}/>
                    <Button title="Next" onClick={handleNext}/>
                </div>
        </div>
    )
}



export default Clock

