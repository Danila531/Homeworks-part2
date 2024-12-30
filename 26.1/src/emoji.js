import React from 'react';

const EmojiList = ({ emojis, onVote }) => {
	return (
		<div className='emoji-container'>
			{emojis.map((item, index) => (
				<div key={index} className='emoji-item' onClick={() => onVote(index)}>
					{item.emoji} <span>{item.votes}</span>
				</div>
			))}
		</div>
	);
};

export default EmojiList;
