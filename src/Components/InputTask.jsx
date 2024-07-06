import React, {useState} from "react";
import { DisplayTask } from "./DisplayTask";


export const InputTask = () => {

    const [input, setInput] = useState('')
    const [storeInput, setStoreInput] = useState([])

    const handleAdd = () => {
        const updateTask = [input, ...storeInput]
        setStoreInput(updateTask)
    }

    return(
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}  />

            <button onClick={() => handleAdd()}>Add</button>
            
            <DisplayTask storeInput={storeInput} />
        </div>
    )
}