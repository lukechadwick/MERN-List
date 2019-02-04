import uuid from "uuid";
import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from "../actions/types";

const initialState = {
  //Will come from backend
  items: [
    { id: uuid(), name: "eggs" },
    { id: uuid(), name: "milk" },
    { id: uuid(), name: "water" },
    { id: uuid(), name: "sugar" }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return state;
  }
}
