import React from 'react';

const GetStarted = () => {

    return (
        <div className="gs__container">

            <div className="gs__left" >
                <h1>Articles</h1>
                <a href="/get-started/articles" className="gs__button">Read!</a>
            </div>
            <div className="gs__right">
                <h1>Train</h1>
                <a href="/get-started/train" className="gs__button">Go!</a>
            </div>
        </div>
    );
};

export default GetStarted;