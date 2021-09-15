import React, { useState } from 'react'

const Counter = () => {
    const [compteur, setCompteur] = useState(0)
    return (
        <div>
           
            <button className="btn btn-danger"
            
            onClick={()=> setCompteur( compteur==0 ? 0 : compteur-1)}> - </button>
             <br/>{compteur}<br/>
            <button className="btn btn-success"
            onClick={()=> setCompteur(compteur + 1)}> + </button>
        </div>
    )
}

export default Counter
