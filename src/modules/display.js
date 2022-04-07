import { addScores, getScores } from './objects.js';

const refresh = document.getElementById('refresh');
const form = document.getElementById('add-scores');

const sortScores = (array) => array.sort((a, b) => b.score - a.score);

const display = () => {
  getScores().then((scoreList) => {
    const scoresSorted = sortScores(scoreList);

    const container = document.querySelector('#board-content');
    container.innerHTML = '';

    scoresSorted.forEach((object) => {
      const list = document.createElement('li');
      list.classList.add('list');

      const read = `<span>${object.user}:</span>
      <span>${object.score}</span>`;

      list.innerHTML = read;
      container.appendChild(list);
    });
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScores();
  form.reset();
});

refresh.addEventListener('click', () => {
  display();
});

export default display;