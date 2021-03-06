const container = document.querySelector('.container');
const text = document.querySelector("#text");

const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

function breatheAnimation() {
    text.innerHTML = 'Breath In!'
    container.classList = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout(() => {
            text.innerText = 'Breath Out!'
            container.classList = 'container shrink'
        }, holdTime);
    }, breatheTime);
}

breatheAnimation();

setInterval(breatheAnimation, totalTime);