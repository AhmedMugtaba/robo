import React from 'react';

const Card = (props) => {
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src={`https://robohash.org/${props.id}?200x200" alt="robots`} alt='photo'/>
			<h1>{props.name}</h1>
			<p>{props.email}</p>
		</div>
	)
}

export default Card;