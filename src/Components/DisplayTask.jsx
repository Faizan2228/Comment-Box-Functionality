import React, { useState } from 'react'
import { EachReply } from './EachReply'

export const DisplayTask = ({ storeInput }) => {

    const [reply, setReply] = useState(null)
    const [replyText, setReplyText] = useState('')
    const [addReply, setAddReply] = useState([])

    const handleAddReply = (index) => {

        const updatedReply = [ ...addReply]
        if(!updatedReply[index]){
            updatedReply[index] = []
        }
        updatedReply[index].push(replyText)
        setAddReply(updatedReply)
    }

    return (
        <div>
            {
                storeInput && storeInput.map((item, index) => (
                    <div key={index}>
                        <p>{item} </p>
                        <button onClick={() => setReply(reply === index ? null : index)}>Reply</button>
                        {
                            reply === index &&( <div>
                                <input type="text" value={replyText} onChange={(e) => setReplyText(e.target.value)} />
                                <button onClick={() => handleAddReply(index)}>Add</button>


                                <EachReply addReply={addReply} replyindex={index} />

                            </div>
                            
                        )
                            
                        }
                    </div>
                ))
            }

        </div>
    )
}