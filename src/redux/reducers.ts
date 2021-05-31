import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import common from '@redux/common/state';

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  common
});

export default rootReducer;
