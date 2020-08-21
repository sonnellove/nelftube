import React from 'react'

function RightPost({imageUrl}) {
    return (
        <div className="RightPost">
            <img className="RightPost__image" src={imageUrl} alt="Logo" />
        </div>
    )
}

export default RightPost
