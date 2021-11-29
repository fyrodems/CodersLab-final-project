import React from 'react';

const GetStartedUnit = ({title}) => {
    return (
        <a href="/get-started/train">
        <div className="unit__container" >
            <h2>{title}</h2>
        </div>
        </a>
    );
};

export default GetStartedUnit;