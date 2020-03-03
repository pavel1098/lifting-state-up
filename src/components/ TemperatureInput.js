import React from "react";

const scaleNames = {
    c: 'Celsius',
    f: 'Farenheit'
}

export default class TemperatureInput extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChange = (event) => {
        this.props.onTemperatureChange(event.target.value);
    }

    render() {
        return (
        <fieldset>
            <legend>Enter the temperature in degrees {scaleNames[this.props.scale]}:</legend>
            <input value={this.props.temperature} onChange={this.handleChange}>
            </input>
        </fieldset>
        )
    }
}