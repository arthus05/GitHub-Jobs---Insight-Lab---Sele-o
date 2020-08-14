import { createStore } from 'redux';

const INIT_STATE = {
  viewSide: false
}

function changeView( state = INIT_STATE, action ){
  switch (action.type){
    case 'CHANGE_VIES_SIDBAR':
      return { ...state, viewSide: !state.viewSide }
    default:
      return state;
  }
}

const store = createStore( changeView );

export default store;