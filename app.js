const Button = document.getElementById('generate');
const randomNum = document.getElementById('random-num');

function randomNumGenerator() {
    const randomNumGenerator = (Math.random());
    return randomNumGenerator;
}

Button.addEventListener('click', () => {
    const randomNumGen = randomNumGenerator();
    randomNum.textContent = randomNumGen;

});