import { put, takeLatest } from "@redux-saga/core/effects";
import axios from 'axios';

const resultReducer = (state = {}, action) => {
    console.log(state);
    switch (action.type) {
        case 'SET_RESULT':
            console.log('Setting recent result....', action.payload)
            return action.payload;
        default:
            return state;
    }
}

export default resultReducer;