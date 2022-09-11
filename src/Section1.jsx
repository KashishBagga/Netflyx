import React from 'react'
import './index.css'

const Section1 = (props) => {
    return (
        <>
            <div className="container-fluid d-flex justify-content-around section1 p-3 my-3 flex-wrap">
                <div>
                    <img src={props.src} />
                </div>
                <div className="col-lg-4">
                    <h1 className="display-4 font-weight-bold p-3">{props.heading}</h1>
                    <p className="p-3">{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default Section1
