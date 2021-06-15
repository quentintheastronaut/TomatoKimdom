import React,{useState} from 'react'
import PropTypes from 'prop-types'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './Mission.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

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
            onChange(mission.id,!mission.completed)
        }
    }

    return (
        <div className="Mission">
            <div className="Mission-wrapper">
                <div>{mission.id}</div>
                <div className="Mission-content" style={ mission.completed === false ? {} : {textDecoration: "line-through"}}>{mission.text}</div>
                {/* <input type="checkbox" onChange={handleChange}/> */}
                <button className="CheckButton" onClick={handleChange}>{mission.completed === false ? "" : <FontAwesomeIcon icon={faCheck} color="green"/>}</button>
            </div>
        </div>
    )
}

export default Mission
