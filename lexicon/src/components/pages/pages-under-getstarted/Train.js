import React from 'react';
import GetStartedUnit from "../../small-components/GetStartedUnits";

const Train = () => {
    return (
        <section className="articles__container">
            <div className="container">
                <a href="/get-started/train/quiz"><GetStartedUnit title="QUIZ"/></a>
                <a href="/get-started/train/flashcards"><GetStartedUnit title="FLASHCARDS"/></a>
            </div>
        </section>
    );
};

export default Train;