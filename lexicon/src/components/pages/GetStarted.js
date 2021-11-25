import React from 'react';

const GetStarted = () => {

    const mouseEnterEvent = (e) => {
        
    }

    return (
        <div className="gs__container">
        <div className="container">
            <div className="split left" onMouseEnter={mouseEnterEvent}>
                <h1>The Designer</h1>
                <a href="/get-started/databases" className="gs__button">Read More</a>
            </div>
            <div className="split right">
                <h1>The Programmer</h1>
                <a href="/get-started/computer-networks" className="gs__button">Read More</a>
            </div>
        </div>
        </div>
    );
};

export default GetStarted;