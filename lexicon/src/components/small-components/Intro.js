import React from 'react';
import introJPG from "../../images/two-business-partners-handshaking_74855-6685-removebg-preview.png"

const Intro = () => {
    return (
        <section className="intro__container">
            <div className="container">
                <div className="intro__text">
                    <h1 className="intro__title">Improve your language skills with Lexicon</h1>
                    <p className="intro__description">
                        We are here to help you master your language and be successful in your new job. <br/>
                        All you have to do is start using Lexicon.
                    </p>
                </div>
                <img src={introJPG} alt="two business partners handshaking"/>
            </div>
        </section>
    );
};

export default Intro;