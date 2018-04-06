import React from 'react';

const Card = (props) => {
	return (
		<div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
			<img src={`https://robohash.org/${props.id}`} alt='photo'/>
			<h1>{props.name}</h1>
			<p>{props.email}</p>
		</div>
	)
}

export default Card;