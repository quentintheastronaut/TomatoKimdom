import React, {useState} from 'react'
// import PropTypes from 'prop-types'
import './Clock.css'
import Button from '../Button/Button'
import {useSelector} from 'react-redux'
import {setPeriodCounter ,setState} from '../../redux/action'
import {useDispatch} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay , faStop, faUndo} from '@fortawesome/free-solid-svg-icons'
import ding from '../../assets/audio/ding.mp3'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


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
    const [run,setRun] = useState(false);
    const [key,setKey] = useState(0);

    const audio = new Audio(ding)
    audio.loop = false;
    
    function handleAgain(e){
        setRun(false)
        setTime(period*60)
        setKey(prev => prev+1)
    }

    function handlePlay(e){
        if(run){
            console.log("stop")
            setRun(false)
        }
        else {
            
            console.log("play")
            setRun(true)
            if(time === period*60){
                audio.play()
            }
            
        }
    }

    function handleNext(){
        // Move to the next step:

        // Case 1: Current state == pomodoro && counter < 3 => current state == short
        if(state === 'pomodoro' && counter < interval -1){
            dispatch(setState('short'))
            dispatch(setPeriodCounter(counter+1))

            setTime(short*60)
            setRun(false)
            audio.play()
        }
        // Case 2: Current state == pomodoro && counter == 3 => current state == long
        else if(state === 'pomodoro' && counter >= interval-1){
            dispatch(setState('long'))
            dispatch(setPeriodCounter(counter+1))

            setTime(long*60)
            setRun(false)
            audio.play()
        }
        // Case 3: Current state == short => current state = pomodoro
        else if(state === 'short'){
            dispatch(setState('pomodoro'))

            setTime(period*60)
            setRun(false)
            audio.play()
        }
        // Case 4: Current state == long => reset counter
        else if(state === 'long'){
            dispatch(setState('pomodoro'))
            dispatch(setPeriodCounter(0))
            setTime(period*60)
            setRun(false)
            audio.play()
        }
        
        setKey(prev => prev+1)

        return [true,1000]
    } 

    console.log(time, state,run)
    return (
        <div className="Clock">
            <div className="Clock-wrapper">
                <CountdownCircleTimer
                    key={key}
                    size="300"
                    isPlaying={run}
                    duration={time}
                    initialRemainingTime={time}
                    colors={[
                    ['#004777', 0.33],
                    ['#F7B801', 0.33],
                    ['#A30000', 0.33],
                    ]}
                    onComplete={(totalElapsedTime) => {
                        return handleNext()
                    }}
                >
                    {({ remainingTime }) => {
                        return (<div className="timer">
                            <div className="value">{formatTime(remainingTime)}</div>
                            <div className="text">seconds</div>
                        </div>)    
                    }}
                </CountdownCircleTimer>
            </div>

            <div className="navigation">
                    <Button title={<FontAwesomeIcon icon={faUndo}/>} onClick={handleAgain}/>
                    <Button title={time === period*60 || run === false ? <FontAwesomeIcon icon={faPlay}/> :<FontAwesomeIcon icon={faStop}/>} onClick={handlePlay}/>
                    <Button title="Next" onClick={()=>handleNext()}/>
                </div>
        </div>
    )
}



export default Clock

