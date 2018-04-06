import React from 'react';
import Card from './Card';


const CardList = (props) => {
	
	const cardsArray = props.robots.map ((user, i) => {
		return <Card key={props.robots[i].id} name={props.robots[i].name} email={props.robots[i].email} id={props.robots[i].id}/>
	})
	return (
				<div>
					{cardsArray}
				</div>
	)
}

export default CardList;