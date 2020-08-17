import { createStore } from 'redux';

const SEARCH_STATE = {
    params: {
            description: '',
            location: '',
            full_time: true,
            id: ''
        },
    id: ''
}

function changeView( state = SEARCH_STATE, action ){
    switch (action.type) {
        case 'SEARCH_PARAMS':
            return {...state, params: action.value};
        case 'SELECTED_JOB_ID':
            return {...state, id: action.value};
        default:
            return state;
    }
}

const store = createStore( changeView );

export default store;