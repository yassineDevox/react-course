import React, { Component } from 'react'

export default class Welcome extends Component {
    
    state = {
        name:'Meri'
    }
    
    render() {
        return (
            <div>
                <h1>hello {this.state.name}</h1>
                <button 
                onClick={this.handleClick}
                className="btn btn-danger">Changer Le nom </button>
            </div>
        )
    }

    // mes methodes
    // handleClick = () => this.state.name="Ayman" Error
    handleClick = () => this.setState({
        name:'Ayman'
    })

}
