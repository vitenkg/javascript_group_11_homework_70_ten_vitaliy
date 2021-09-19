export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export const increase = data => ({type: INCREASE, payload: data});
export const decrease = data => ({type: DECREASE, payload: data});