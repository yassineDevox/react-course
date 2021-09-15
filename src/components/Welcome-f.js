import React, { useState } from 'react'

const WelcomeF = () => {
    
    const [name, setName] = useState("Meri")

    return (
        <div>
            Hello {name} 😎 !!
            <button onClick={()=>setName("Ayman")}
            className="btn btn-success">Change Value</button>
        </div>
    )
}

export default WelcomeF
