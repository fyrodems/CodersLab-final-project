import React from 'react';
import GetStartedUnit from "../../small-components/GetStartedUnits";

const Articles = () => {
    return (
        <section className="articles__container">
            <div className="container">
                <a href="/get-started/articles/database"><GetStartedUnit title="What is a database?"/></a>
                <a href="/get-started/articles/dbms"><GetStartedUnit title="What is a DBMS?"/></a>
                <a href="/get-started/articles/dbms-types"><GetStartedUnit title="Common types of DBMS"/></a>
                <a href="/get-started/articles/database-models"> <GetStartedUnit title="Database models"/></a>
                <a href="/get-started/articles/is-or-are"> <GetStartedUnit title="Data is or data are?"/></a>
            </div>
        </section>
    );
};

export default Articles;