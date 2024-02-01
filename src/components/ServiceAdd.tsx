import { useDispatch, useSelector } from "react-redux";
import {addDataState, editData, stopEdite} from "../reducers/service"
import { useEffect, useState } from "react";
import { IData, IEdit } from "../Interface";

export default function ServiceAdd() {

	const {id, edite} = useSelector((state : {data : {isEdite : IEdit}}) => state.data.isEdite);
	const data = useSelector((state : IData) => state.data.data);

	const [text, setText] = useState<string>("");
	const [price, setPrice] = useState<number | string>("");
	const dispatch = useDispatch();

	const clear = () => {
		setText('');
		setPrice('');
	};

	const handleSubmit = (evt: React.FormEvent) => {
		const target = evt.target as HTMLFormElement
		evt.preventDefault();
		dispatch(addDataState({
			name: (target.name as HTMLFormElement[string]).value,
			price: target.price.value
		}));
		clear();
	};

	useEffect(() => {
		if(edite) {
			const currentData = data.find((el) => el.id === id)
			if(currentData) {
				setText(currentData.name)
				setPrice(currentData.price)
			}
		}
	}, [id, edite, data]);

	const editeItem = (evt: React.FormEvent) => {
		evt.preventDefault();
		dispatch(editData({id, text, price}));
		clear();
		dispatch(stopEdite());
	}

  const cancel = () => {
    clear();
    dispatch(stopEdite());
  };

	return (
		<form onSubmit={edite ? editeItem : handleSubmit}>
			<input name='name' onChange={(e: React.ChangeEvent) => {
				const target = e.target as HTMLFormElement;
				setText(target.value)
			}} value={text} />
			<input name='price' onChange={(e: React.ChangeEvent) => {
				const target = e.target as HTMLInputElement;
				setPrice(Number(target.value));
			}} value={price}/>
			<button type='submit'>Save</button>
			<button type="button" onClick={cancel}>Cancel</button>
		</form>
	);
}
