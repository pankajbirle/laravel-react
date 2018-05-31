import { SAVE_SURVEY, GET_SURVEY, UPLOAD_VIDEO, GET_REWARD } from './types';
import axios from 'axios';

export function saveSurvey(answers,uuid){
   
    axios.post('/api/survey/save',{uuid, answers:answers});

    return {
        payload: answers, 
        type: SAVE_SURVEY
    } 
}

export function getSurvey(){
    return {
        payload: true,
        type: GET_SURVEY
    }
}

export function getReward(uuid){
    
    console.log('fetching reward!!');
    let coupon = axios.post('/api/coupons',{uuid});

    return {
        payload: coupon, 
        type: GET_REWARD
    } 
}
