import React from 'react'
// import PropTypes from 'prop-types'

const WebCard = ({ property }) => {

    const { index, picture, desc } = property

    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={desc}/>
        </div>
    )

}

export default WebCard