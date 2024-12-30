const emojis = [
  { emoji: '😀', votes: 0 },
  { emoji: '😊', votes: 0 },
  { emoji: '😎', votes: 0 },
  { emoji: '🤩', votes: 0 },
  { emoji: '😍', votes: 0 },
];

const emojiContainer = document.getElementById('emoji-container');
const resultsDiv = document.getElementById('results');
const winnerDiv = document.getElementById('winner');
const winnerVotes = document.getElementById('winner-votes');
const showResultsButton = document.getElementById('show-results');
const clearResultsButton = document.getElementById('clear-results');

const loadVotes = () => {
  const savedVotes = JSON.parse(localStorage.getItem('emojiVotes'));
  if (savedVotes) emojis.forEach((e, i) => e.votes = savedVotes[i].votes);
};

const saveVotes = () => {
  localStorage.setItem('emojiVotes', JSON.stringify(emojis));
};

const renderEmojis = () => {
  emojiContainer.innerHTML = '';
  emojis.forEach((emojiData, index) => {
    const div = document.createElement('div');
    div.className = 'emoji-item';
    div.innerHTML = ${emojiData.emoji} <span>${emojiData.votes}</span>;
    div.addEventListener('click', () => {
      emojis[index].votes++;
      saveVotes();
      renderEmojis();
    });
    emojiContainer.appendChild(div);
  });
};

const showResults = () => {
  const winner = emojis.reduce((max, e) => (e.votes > max.votes ? e : max), emojis[0]);
  winnerDiv.textContent = winner.emoji;
  winnerVotes.textContent = winner.votes;
};

const clearResults = () => {
  emojis.forEach(e => e.votes = 0);
  saveVotes();
  renderEmojis();
  winnerDiv.textContent = '';
  winnerVotes.textContent = '0';
};

loadVotes();
renderEmojis();
showResultsButton.addEventListener('click', showResults);
clearResultsButton.addEventListener('click', clearResults);