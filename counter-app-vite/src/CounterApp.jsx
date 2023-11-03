import React from "react"
import PropTypes from "prop-types"


export const CounterApp = ({value}) => {


    const  handledAdd = (event) => {
        console.log("+1")
        value = 1000
        console.log(value)
    }

    return (
        <React.Fragment>
            <h1>CounterApp</h1>
            <h2>{ value }</h2>

            <button onClick={ handledAdd }>+1</button>
        </React.Fragment>
    )
}


CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}