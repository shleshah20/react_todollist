import React from 'react';
import './list_iteams.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';
export default function Listitems(props){
	const items = props.items
	return (
		<div>
			<FlipMove duration={500} easing="ease-in-out">
			{items.map(item => (
				<div key={item.key} className="list">
					<div>
						<input type="text" id={item.key}
						 value={item.text} onChange={
						 	(e)=>{
						 		props.setUpdate(e.target.value,item.key)
						 	}
						 }
						 />
						<span>
							<FontAwesomeIcon className="faicons" 
							icon="trash"
							onClick={()=>props.deleteItem(item.key)}/>
						</span>
					</div>
				</div>	
			))}
			</FlipMove>
		</div>
	)
}