const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OhHe8A7JSbmmogrNC5Jc/scores/';

const addScores = async () => {
  const names = document.querySelector('#add-name');
  const scores = document.querySelector('#add-score');

  const res = await fetch (url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: names.value,
      score: scores.value
    }),
  });
  const data = await res.json();
  console.log(data);
  return data;
};

const getScores = async () => { 
  const res = await fetch(url); 
  const values = await res.json(); 
  return values.result; 
};

export { addScores, getScores };