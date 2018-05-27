import axios from 'axios';
import { FETCH_USER } from './types';

// Promise Based
// export const fetchUser = () => {
//   return (dispatch) => {
//     axios
//       .get('/api/current_user')
//       .then(res => dispatch({ 
//         type: FETCH_USER, 
//         payload: res 
//       }));
//   }
// };

// Async Await further simplified
// export const fetchUser = () => async dispatch => dispatch({ type: FETCH_USER, payload: await axios.get('/api/current_user') });

// Async Await
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data });
};



