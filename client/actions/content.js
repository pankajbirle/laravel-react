import { FETCH_CONTENT } from './types';
import data from '../config';

export function getContent(slide){
	return {
		payload: data,
		type: FETCH_CONTENT
	}
}