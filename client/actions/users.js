import { FETCH_USERS, SET_EMAIL, GET_EMAIL, SAVE_UUID } from './types';
import axios from 'axios';

export function setEmail(email){
    return {
        payload: email, 
        type: SET_EMAIL
    } 
}

export function saveUUID(uuid){
    return {
        payload: uuid, 
        type: SAVE_UUID
    } 
}


export function getEmail(){
    return {
        payload: true, 
        type: GET_EMAIL
    } 
}

export function getUser(email){
    let data = axios.post('/api/user/',{email});

	return {
		payload: data,
		type: FETCH_USERS
	}
} 