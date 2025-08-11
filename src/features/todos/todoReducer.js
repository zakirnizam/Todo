import { ADD_TODO, REMOVE_TODO, SET_LOADING } from "./todoActions";

const initialState = {
  items: [],
  loading: false
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, { id: Date.now(), text: action.payload }]
      };
    case REMOVE_TODO:
      return {
        ...state,
        items: state.items.filter(todo => todo.id !== action.payload)
      };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
