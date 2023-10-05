import { EMPTY_DATA, GETDATA_REQUEST, GETDATA_REQUEST_FAIL, GETDATA_REQUEST_SUCESS } from "./actionTypes"
import axios from 'axios';
export const getData = (username)=>(dispatch)=>{
    dispatch({type : GETDATA_REQUEST});
    axios.get(`https://api.github.com/users/${username}/repos`).then((res)=>{
        // console.log(res.data);
        dispatch({type : GETDATA_REQUEST_SUCESS, payload : res.data});
    }).catch((err)=>{
        dispatch({type : GETDATA_REQUEST_FAIL});
        console.log(err);
    })
}

export const makeEmapyData = ()=>(dispatch)=>{
    dispatch({type : EMPTY_DATA});
}