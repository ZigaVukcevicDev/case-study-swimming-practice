import Exercise from './exercises.js';

const exercise = new Exercise;

// Outputting data
const dataHolder = document.querySelector('.data-holder');
dataHolder.innerText = exercise.getRandom();

// Accept replacement modules
if (module.hot) {
    module.hot.accept();
}