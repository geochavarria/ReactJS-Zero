import React, { useState } from "react"
import PropTypes from "prop-types"


export const CounterApp = ({value}) => {

    const [counter, setCounter ] = useState(value)

    const  handledAdd = (event) => {
        //setCounter(counter + 1)
        setCounter((c)=> c + 1 )
    }


    return (
        <React.Fragment>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handledAdd }>+1</button>
        </React.Fragment>
    )
}


CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}