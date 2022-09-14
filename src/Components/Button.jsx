import React from "react";
import './Button.css'

const Button = ( {text, clickButton , changeClick} ) => {



    return(
        <div>
            <button className={ clickButton ? 'click-button' : 'reset-button'} onClick={ changeClick }>
                { text }
            </button>
        </div>
    )
}

export default Button;
