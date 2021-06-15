import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Mission from '../components/Mission/Mission'
import { setStateTodo } from '../redux/action';
import '../styles/Missions.css'
import flag from '../assets/img/flag.png'

function Missions() {

    const todos = useSelector((state) => state.todos)
    const period = useSelector((state) => state.period)

    const dispatch = useDispatch();

    function handleCheck(id,newValue){
        dispatch(setStateTodo(id,newValue))
        console.log(id,newValue)
        console.log(todos)
    }

    return (
        <div className="Body">
            <div className="title">
                <img src={flag} alt="" style={{width: "25px" ,height: "25px",padding: "0 10px"}}/>
                Mission
            </div>
            <div className="Missions-wrapper">
                {
                    todos.map((todo) => <Mission mission={todo} onChange={handleCheck}/>)
                }
            </div>

        </div>
    )
}

export default Missions
