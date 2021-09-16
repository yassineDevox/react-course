import React, { useState } from 'react'

const PersonF = () => {
    const [shows, setShows] = useState(true)
    const [fullname, setFullname] = useState("yagami lighto");
    const [bio, setBio] = useState("A man that became a hero just for fun 😅");
    const [profession, setProfession] = useState("Heeroo 🙄");
    const [imgSrc, setImgSrc] = useState("http://assets.stickpng.com/images/58582c01f034562c582205ff.png");

    return (
        <div className="d-flex border align-items-center justify-content-between w-50 p-2 mx-auto mt-4">
           <div className="d-flex">
           <img
                width={100}
                height={95}
                className={shows ? "rounded-circle border me-2" : "invisible"}
                src={imgSrc} alt />
            <div>
                <h3 className="text-capitalize">{fullname}</h3>
                <p className="m-0"> {bio}</p>
                <span> {profession}</span>
            </div>
           </div>
            <button
                onClick={() => setShows(!shows )}
                className={shows ? "btn btn-danger m-1" : "btn btn-success m-1"} >
                {shows ? " Cacher " : " Afficher "}
                <i className={shows ? "fa fa-eye-slash":"fa fa-eye"} aria-hidden="true"></i>
            </button>
        </div>
    )
}

export default PersonF
