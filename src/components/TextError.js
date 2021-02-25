import React from 'react'
import '../styles/texterror.css'

function TextError(props) {
    return (
        <div className="error">
            {props.children}
        </div>
    )
}

export default TextError