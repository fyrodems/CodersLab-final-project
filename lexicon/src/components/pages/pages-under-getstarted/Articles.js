import React from 'react';
import GetStartedUnit from "../../small-components/GetStartedUnits";

const Articles = () => {
    return (
        <section className="articles__container">
            <div className="container">
                <GetStartedUnit title="What is a database?"/>
                <GetStartedUnit title="What is a DBMS?"/>
                <GetStartedUnit title="Common types of DBMS"/>
                <GetStartedUnit title="Database models"/>
            </div>
        </section>
    );
};

export default Articles;