import React, { Component } from 'react'

export default class Welcome extends Component {
    
    state = {
        name:'Meri'
    }
    
    render() {
        return (
            <div>
                <h1>hello {this.state.name}</h1>
            </div>
        )
    }
}
