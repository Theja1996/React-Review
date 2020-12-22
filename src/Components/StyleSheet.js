import React from 'react'
import './MyStyle.css'

function StyleSheet(props) {
  let clzName = props.primary ? 'primary' : ''
    return (
        <div>

            <h1 className={`${clzName} font-xl`}>Beauty of React</h1>
        </div>
    )
}

export default StyleSheet
