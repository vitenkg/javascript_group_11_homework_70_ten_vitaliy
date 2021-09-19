import {
    DECREASE,
    FETCH_MENU_FAILURE,
    FETCH_MENU_REQUEST,
    FETCH_MENU_SUCCESS,
    INCREASE
} from "../../Actions/MenuAction/Menu";


const initialState = {
    loading: false,
    menu: [],
    error: null,
};


const menuReducer = (state = initialState, action) => {
    const payload = action.payload;
    switch (action.type) {
        case INCREASE:
            return {...state};
        case DECREASE:
            return {...state};
        case FETCH_MENU_REQUEST:
            return {...state, error: null, loading: true};
        case FETCH_MENU_SUCCESS:
            return {...state, loading: false, menu: payload};
        case FETCH_MENU_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default menuReducer;