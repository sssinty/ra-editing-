import { useDispatch, useSelector } from "react-redux";
import { IData } from "../Interface";
import { removeService, setEdite, stopEdite } from "../reducers/service";
import React from "react";

export default function ServiceList() {
	const items = useSelector((state : IData) => state.data.data);
	const dispatch = useDispatch();

	const handleRemove = (event : React.MouseEvent) => {
		const target = event.target as HTMLElement;
		dispatch(removeService({id: (target.parentNode as HTMLFormElement).id}));
		dispatch(stopEdite());
	};
	const handleEdite = (event : React.MouseEvent) => {
		const target = event.target as HTMLElement;
		dispatch(setEdite({id: (target.parentNode as HTMLFormElement).id}));
	};
	
	return (
		<ul>
			{items.map((item) => (
				<li key={item.id} id={item.id}>
					{item.name} {item.price}
					<button onClick={handleEdite}> ✏️</button>
					<button onClick={handleRemove}>✕</button>
				</li>
			))}
		</ul>
	)
}
