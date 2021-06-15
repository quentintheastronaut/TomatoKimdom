import React,{useState} from 'react'
import PropTypes from 'prop-types'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './Mission.css'

Mission.propTypes = {
    onChange : PropTypes.func,
    mission : PropTypes.object,
}

Mission.defaultProps = {
    onChange : null,
    mission : '',
}

function Mission(props) {

    const {onChange,mission} = props
    

    function handleChange(e){
        if(onChange){
            onChange(mission.id,!mission.isDone)
        }
    }

    return (
        <div className="Mission">
            <div className="Mission-wrapper">
                <div>{mission.id}</div>
                <div className="Mission-content" style={ mission.isDone === false ? {} : {textDecoration: "line-through"}}>{mission.mission}</div>
                {/* <input type="checkbox" onChange={handleChange}/> */}
                <button onClick={handleChange}>Cick me</button>
            </div>
        </div>
    )
}

export default Mission
