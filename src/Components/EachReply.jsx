import React from 'react'

export const EachReply = ({addReply, replyindex}) => {
  return (
    <div>
        {
            addReply[replyindex] && addReply[replyindex].map((item, index) => (
                <div style={{marginLeft: '25px'}} key={index}>
                    <p>{item} </p>
                </div>
            ))
        }
    </div>
  )
}
