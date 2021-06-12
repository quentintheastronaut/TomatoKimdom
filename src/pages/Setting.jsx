import React from 'react'
import {setPeriod, setLongBreak, setLongBreakInterval, setShortBreak } from '../redux/action.js'
import { useDispatch } from 'react-redux'
import Button from '../components/Button/Button.jsx';
import '../styles/Setting.css'

function Setting() {

    const dispatch = useDispatch()

    let period = 0 , short = 0, long = 0, interval =0;
    function handleChange(e){
        switch(e.target.name){
            case 'pomodoro':
                period = e.target.value
                break
            case 'short':
                short = e.target.value
                break
            case 'long':
                long = e.target.value
                break
            case 'interval':
                interval = e.target.value
                break
            default:
                break
        }

        
    }

    function handleSubmit(e){
        dispatch(setPeriod(period));
        dispatch(setShortBreak(short));
        dispatch(setLongBreak(long));
        dispatch(setLongBreakInterval(interval));
        console.log("Submit")
    }

    return (
        <div className="Body">
            <div className="Setting-wrapper">
                <div className="Time">
                    <div className="Module">
                        <p>Pomodoro</p>
                        <input className="Input" type="number" name="pomodoro" placeholder="Pomodoro" onChange={handleChange}></input>
                    </div>
                    <div className="Module">
                        <p>Short break</p>
                        <input className="Input" type="number" name="short" placeholder="Short break" onChange={handleChange}></input>
                    </div>
                    <div className="Module">
                        <p>Long break</p>
                        <input className="Input" type="number" name="long" placeholder="Long Break" onChange={handleChange}></input>
                    </div>
                    <div className="Module">
                        <p>Long break interval</p>
                        <input className="Input" type="number" name="interval" placeholder="Long Break Interval" onChange={handleChange}></input>
                    </div>
                </div>
                <div>
                    <Button title="Submit" onClick={handleSubmit} />
                </div>
            </div>
        </div>
    )
}

export default Setting
