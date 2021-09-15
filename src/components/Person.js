import React, { Component } from 'react'

export default class Person extends Component {
    state = {
        fullName: "Saytama Aki",
        imgSrc: "http://assets.stickpng.com/images/58582c01f034562c582205ff.png",
        bio: "biography ",
        profession: "Hero",
        shows: true
    }
    render() {
        console.log(this.state)
        const { imgSrc, bio, fullName, shows, profession } = this.state
        return (

            <div className="d-flex border align-items-center">
                <img
                    width={120}
                    className={shows ? "rounded-circle border me-2" : "invisible"}
                    src={imgSrc} alt />
                <div>
                    <h2>{fullName}</h2>
                    <p> {bio}</p>
                    <p> {profession}</p>
                </div>
                <button 
                        onClick={() => this.setState({ shows: !shows })} 
                        className={shows ? "btn btn-danger" : "btn btn-success"} >
                            {shows ? "Cacher" : "Afficher"}
                </button>
            </div>

        )
    }
}
