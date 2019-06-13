import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));

document.querySelector('.Board-container').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        // https://css-tricks.com/animating-layouts-with-the-flip-technique/
        const elm = e.target.parentNode.parentNode;
        const style = getComputedStyle(elm);
        const first = elm.getBoundingClientRect();

        switch (e.target.value) {
            case 'down': {
                elm.style['grid-row-start'] = Number(style['grid-row-start']) + 1;
                break;
            }
            case 'up': {
                elm.style['grid-row-start'] = Number(style['grid-row-start']) - 1;
                break;
            }
            case 'right': {
                elm.style['grid-column-start'] = Number(style['grid-column-start']) + 1;
                break;
            }
            case 'left': {
                elm.style['grid-column-start'] = Number(style['grid-column-start']) - 1;
                break;
            }
            default : {

            }
        }
        const last = elm.getBoundingClientRect();
        const deltaX = first.left - last.left;
        const deltaY = first.top - last.top;
        console.log(deltaY, deltaX);
        elm.animate(
            // keyframes
            [
                { transform: `translate(${deltaX}px, ${deltaY}px)` },
                { transform: 'none' }],
            // timing options
            {
                duration: 300,
                easing: `ease-in-out`
            });
    } else {
        randomImages();
    }
});

function randomImages() {
    const divs = Array.from(document.querySelectorAll('.Board-container>div'));
    shuffle(divs);
    let count = 0
    for (let r = 1; r <= 3; r++) {
        for (let c = 1; c <= 3; c++) {
            const first = divs[count].getBoundingClientRect();
            divs[count].style['grid-row-start'] = r;
            divs[count].style['grid-column-start'] = c;
            const last = divs[count].getBoundingClientRect();
            const deltaY = first.top - last.top;
            const deltaX = first.left - last.left;

            divs[count].animate(
                // keyframes
                [
                    { transform: `translate(${deltaX}px, ${deltaY}px)` },
                    { transform: 'none' }],
                // timing options
                {
                    duration: 300,
                    easing: 'ease-in-out',
                    fill: 'both'
                });
            count++;
        }
    }
}


function shuffle(a) {
    for (let i = 0; i < a.length; i++) {
        const j = Math.floor(Math.random() * a.length); //random index j
        [a[i], a[j]] = [a[j], a[i]]; //switch
    }
    return a;
}

window.onload = randomImages();