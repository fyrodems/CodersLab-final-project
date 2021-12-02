import React from 'react';

const Home = () => {

    return (
        <>
        <section className="main">

            <div className="intro">
                <div className="container">
                    <h1>Learn</h1>
                    <p>We are here to help you master your language and be successful in your new job. <br/>All you have to do is start using Lexicon.</p>
                    <a href="/get-started" className="btn-start">Start Now</a>
                </div>
            </div>

        <div className="premium">
            <div className="container">
                <h2>Go Premium</h2>
                <p>Receive recommendations based on your activity to level up.</p>
                <a href="/contact" className="btn-white">Contact us</a>
            </div>
        </div>

</section>
        </>
    );
};

export default Home;