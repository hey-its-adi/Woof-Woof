import React from 'react'

function Header (props){
    return(
        <div>
            {props.attribute.Name}
            {props.attribute.Age}
        </div>
    )
}

export default Header