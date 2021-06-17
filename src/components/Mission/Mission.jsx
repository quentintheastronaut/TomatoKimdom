import React,{useState} from 'react'
import PropTypes from 'prop-types'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './Mission.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck , faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'

Mission.propTypes = {
    onChange : PropTypes.func,
    onDelete : PropTypes.func,
    onEdit : PropTypes.func,
    mission : PropTypes.object,
}

Mission.defaultProps = {
    onChange : null,
    onDelete : null,
    onEdit : null,
    mission : '',
}

function Mission(props) {

    const {onChange,onDelete,onEdit,mission} = props
    

    function handleChange(e){
        if(onChange){
            onChange(mission.id,!mission.completed)
        }
    }

    function handleDelete(e){
        if(onDelete){
            onDelete(mission.id,!mission.completed)
        }
    }

    function handleEdit(e){
        if(onEdit){
            onEdit(mission.id,!mission.completed)
        }
    }

    return (
        <div className="Mission">
            <div className="Mission-wrapper">
                <div className="Left Mission-child">
                    <div>{mission.id}</div>
                    <div style={{backgroundColor: mission.color}} className="ColorBox"></div>
                </div>
                <div className="Mission-child Center">
                    <div className="Mission-content" style={ mission.completed === false ? {} : {textDecoration: "line-through"}}>{mission.text}</div>
                </div>
            
                <button className="CheckButton" onClick={handleChange}>{mission.completed === false ? "" : <FontAwesomeIcon icon={faCheck} color="green"/>}</button>
                <button className="DeleteButton" onClick={handleDelete}><FontAwesomeIcon icon={faTrash} color="grey"/></button>
                <button className="DeleteButton" onClick={handleEdit}><FontAwesomeIcon icon={faEdit} color="grey"/></button>
                {/* <input type="checkbox" onChange={handleChange}/> */}
            </div>
        </div>
    )
}

export default Mission


