import React, { useState } from 'react';
import EmojiList from './EmojiList';

const App = () => {
	const [emojis, setEmojis] = useState([
		{ emoji: '😀', votes: 0 },
		{ emoji: '😊', votes: 0 },
		{ emoji: '😎', votes: 0 },
		{ emoji: '🤩', votes: 0 },
		{ emoji: '😍', votes: 0 },
	]);

	const incrementVote = index => {
		const updatedEmojis = [...emojis];
		updatedEmojis[index].votes += 1;
		setEmojis(updatedEmojis);
	};

	return (
		<div className='container'>
			<h1>Голосування за найкращий смайлик</h1>
			<EmojiList emojis={emojis} onVote={incrementVote} />
		</div>
	);
};

export default App;
