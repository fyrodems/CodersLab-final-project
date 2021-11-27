import React from 'react';
import { FlashcardComponent } from 'react-flashcard'


const Train = ({vocabulary}) => {

    const min = 1;
    const max = 128;
    const firstCardIndex = Math.floor(Math.random() * (max - min)) + min;
    const secondCardIndex = Math.floor(Math.random() * (max - min)) + min;

    const cardData = [
        {
            front: {text: vocabulary[firstCardIndex].english},
            back: {text: vocabulary[firstCardIndex].polish}
        },
        {
            front: {text: vocabulary[secondCardIndex].english},
            back: {text: vocabulary[secondCardIndex].polish}
        },
    ]

    return (
        <section className="train__container">
            <FlashcardComponent dataSource={cardData} />
        </section>
    );
};

export default Train;