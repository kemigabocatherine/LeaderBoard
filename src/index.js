import _ from 'lodash';
import './style.css';
import {boardItems} from './modules/objects.js';

const board = document.querySelector('#board-content');

boardItems.forEach((boardItem, index) => {
  const listItem = document.createElement('li');

  listItem.innerHTML = `
    <span>${boardItems[index].name}:</span>
    <span>${boardItems[index].score}</span>
  `
  board.appendChild(listItem);
});