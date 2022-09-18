import React from 'react'
import './style.css'

function StyleSheet(props)
{
    let vari = props.className
    return(

        <div>
            <h1 className={vari}>Hi Prashant </h1>
            <h2 className='font-xl'>HIII</h2>
        </div>
    )
}

export default StyleSheet