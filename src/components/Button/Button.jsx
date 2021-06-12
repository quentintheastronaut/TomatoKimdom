import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'
import '../../App.css'
import { Link } from "react-router-dom"

 
Button.propTypes = {
    onClick : PropTypes.func,
    title : PropTypes.any,
    path : PropTypes.string

}

Button.defaultProps = {
    onClick : null,
    title : 'Button',
    path: ''

}

function Button(props) {

    const {onClick, title,path} = props

    function handleClick(e){
        if(onClick){
            onClick(e)
        }
    }



    return (
        
            <button className="Button" onClick={handleClick}>
                {
                    path === '' ?
                        title
                    :
                    <Link to={path} style={{textDecoration: "none",color: "white"}}>
                        {title}
                    </Link>
                }
                
            </button>
    )
}



export default Button

