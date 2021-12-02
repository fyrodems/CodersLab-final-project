import React from 'react';
import { FlashcardComponent } from 'react-flashcard'


class Flashcards extends React.Component {

    constructor(props) {
        super();
        this.min = 0;
        this.max = 127;
        this.index1 = Math.floor(Math.random() * 127);
        this.index2 = Math.floor(Math.random() * (this.max - this.min)) + this.min;
        this.index3 = Math.floor(Math.random() * (this.max - this.min)) + this.min;
        this.index4 = Math.floor(Math.random() * (this.max - this.min)) + this.min;
        this.index5 = Math.floor(Math.random() * (this.max - this.min)) + this.min;
        this.index6 = Math.floor(Math.random() * (this.max - this.min)) + this.min;
        this.index7 = Math.floor(Math.random() * (this.max - this.min)) + this.min;
        this.index8 = Math.floor(Math.random() * (this.max - this.min)) + this.min;
        this.index9 = Math.floor(Math.random() * (this.max - this.min)) + this.min;
        this.index10 = Math.floor(Math.random() * (this.max - this.min)) + this.min;

        this.cardData = [
            {
                front: { text: props.vocabulary[this.index1].english },
                back: { text: props.vocabulary[this.index1].polish }
            },
            {
                front: { text: props.vocabulary[this.index2].english },
                back: { text: props.vocabulary[this.index2].polish }
            },
            {
                front: { text: props.vocabulary[this.index3].english },
                back: { text: props.vocabulary[this.index3].polish }
            },
            {
                front: { text: props.vocabulary[this.index4].english },
                back: { text: props.vocabulary[this.index4].polish }
            },
            {
                front: { text: props.vocabulary[this.index5].english },
                back: { text: props.vocabulary[this.index5].polish }
            },
            {
                front: { text: props.vocabulary[this.index6].english },
                back: { text: props.vocabulary[this.index6].polish }
            },
            {
                front: { text: props.vocabulary[this.index7].english },
                back: { text: props.vocabulary[this.index7].polish }
            },
            {
                front: { text: props.vocabulary[this.index8].english },
                back: { text: props.vocabulary[this.index8].polish }
            },
            {
                front: { text: props.vocabulary[this.index9].english },
                back: { text: props.vocabulary[this.index9].polish }
            },
            {
                front: { text: props.vocabulary[this.index10].english },
                back: { text: props.vocabulary[this.index10].polish }
            },
        ]
    }

    componentDidMount() {
        document.querySelector("#app > section > div > div > div:nth-child(3) > div:nth-child(2) > img").src = "https://upload.wikimedia.org/wikipedia/commons/4/47/Circle_arrow_right_font_awesome.svg"
        document.querySelector("#app > section > div > div > div:nth-child(3) > div:nth-child(1) > img").src = "https://upload.wikimedia.org/wikipedia/commons/c/c1/Circle_arrow_left_font_awesome.svg"
        document.querySelector("#app > section > div > div > div:nth-child(2) > img").src = "https://pngimg.com/uploads/sound/sound_PNG26.png"
    }

    render() {
        return (
            <section className="flashcard__container">
                <FlashcardComponent dataSource={this.cardData} />
            </section>
        );
    }
}

export default Flashcards;