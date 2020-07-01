import React, { Component } from 'react'

export default class WeatherCheck extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='weather-check'>
            <h2>Check the Weather in your area</h2> 
                <form >
                    <input type="text" placeholder="Search"></input>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}