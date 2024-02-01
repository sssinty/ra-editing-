import { nanoid } from 'nanoid';
import { IData, IEdit } from '../Interface';
import { createSlice } from '@reduxjs/toolkit';

interface IDataState {
	data: IData[],
	isEdite: IEdit
}

const data : IDataState = {
	data : [],
	isEdite: {id: "", edite: false}
}

const serviceReducer = createSlice({
	name: 'data',
	initialState: data,
	reducers : {
		addDataState(state, action) {
			state.data.push({
				id: nanoid(),
				name: action.payload.name,
				price: action.payload.price
			})
		},

		editData(state, action) {
			const currentData = state.data.find((elem) => elem.id === action.payload.id);
			if(currentData) {
				console.log(action)
				currentData.name = action.payload.text,
				currentData.price = action.payload.price
			}
		},

		removeService(state, action) {
			state.data = state.data.filter((elem) => elem.id != action.payload.id) 
		}, 

		setEdite(state, action) {
			state.isEdite.id = action.payload.id,
			state.isEdite.edite = true
		},

		stopEdite(state) {
			state.isEdite.edite = false
		}
	}

});

export const {addDataState, removeService, setEdite, stopEdite, editData} = serviceReducer.actions
export default serviceReducer.reducer