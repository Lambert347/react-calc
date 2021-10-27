import { put, takeLatest } from "@redux-saga/core/effects";
import axios from 'axios';

const resultReducer = (state = [], action) => {
    console.log(state);
    switch (action.type) {
        case 'SET_ALL_RESULTS':
            console.log('Setting all results....', action.payload)
            return action.payload;
        default:
            console.log('Returning state.....')
            return state;
    }
}

export default resultReducer;