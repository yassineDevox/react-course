import React, { Component } from 'react'

export default class LifeCycle extends Component {

    constructor() {

        super()
        this.state = {
            counter: 0
        }
        console.log("constructor 😃");
    }

    componentDidMount() {
        console.log("component Did Mount 🥳 ")
    }

    render() {
        return (
            <div className="border w-50 p-2 m-5 mx-auto text-center">
                <h1> LifeCycle Component Class 😇 <span className="text-success">{this.state.counter}</span> </h1>
                <button className="btn btn-warning"
                    onClick={() => this.setState({ counter: this.state.counter + 1 })} >do some changes 😎</button>
               
            </div>
        )
    }
    componentDidUpdate() {
        console.log(" component did update 🙃 !! ")
    }
    componentWillUnmount() {
        console.log("component Will Unmount 😢 ")
    }
}
