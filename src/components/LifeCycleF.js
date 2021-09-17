import { useEffect, useState } from "react"

const LifeCycleF = ()=>{

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("component Did Mount for function 🥳 ")
        return ()=>{
            console.log("component Will Unmount for function 😢 ")
        }
    }, [])

    useEffect(() => {
        if(counter==0) return 
        console.log("component Did Update for function 🙃 ")
    })

    
    return (
        <div className="border w-50 p-2 m-5 mx-auto text-center">
        <h1> LifeCycle Component Function 😜 <span className="text-success">{counter}</span> </h1>
        <button className="btn btn-warning"
            onClick={() => setCounter(counter + 1 )} >do some changes 😎</button>
    </div>
    )
}

export default LifeCycleF