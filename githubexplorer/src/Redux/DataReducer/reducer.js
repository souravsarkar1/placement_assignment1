import { EMPTY_DATA, GETDATA_REQUEST, GETDATA_REQUEST_FAIL, GETDATA_REQUEST_SUCESS } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    data: [],
    dataFlag : false,
    isAuth : false
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GETDATA_REQUEST:
            return { ...state, isLoading: true };
        case GETDATA_REQUEST_FAIL:
            return { ...state, isLoading: false, isError: false };
        case GETDATA_REQUEST_SUCESS:
            return { ...state, isLoading: false, data: payload,dataFlag : true,isAuth : true }
            case EMPTY_DATA:
                return {...state,isLoading : false,data :[]};
        default:
            return { ...state };
    }
}