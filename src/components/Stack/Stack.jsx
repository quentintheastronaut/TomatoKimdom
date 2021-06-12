import React from 'react'
import './Stack.css'
import {useSelector} from 'react-redux'

function Stack() {

    var arr = [];
    const capacity = useSelector(state => state.longBreakInterval)
    const size = useSelector(state => state.periodCounter)

    for(var i =0; i< capacity;i++){
        if(i < size){
            arr.push(<div className="Parallelogram" style={{backgroundColor: "red"}}></div>)
        }   
        else {
            arr.push(<div className="Parallelogram" style={{backgroundColor: "white"}}></div>)
        }
        
    }

    return (
        <div className="Stack">

            <div className="Stack-wrapper">
                {
                    arr.map( item => item)
                }
                
                
            </div>
            
            
        </div>
    )
}

export default Stack
