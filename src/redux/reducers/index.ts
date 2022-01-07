import { GET_ITEMS } from "../actions/type";

import { combineReducers } from "redux";

function items(
  state = [],
  action: {
    type: string;
    items: {
      id: number;
      title: string;
      price: number;
      rating: number;
      img: string;
    }[];
  }
) {
  switch (action.type) {
    case GET_ITEMS:
      return action.items;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ items });

export default rootReducer;
