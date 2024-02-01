import { createStore, combineReducers } from 'redux';

import { configureStore } from '@reduxjs/toolkit';
import service from '../reducers/service';

const store = configureStore({
	reducer: {data : service}
});

export default store;