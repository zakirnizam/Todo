// Action types
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const SET_LOADING = "SET_LOADING";

// Synchronous action creators
export const addTodo = (text) => ({ type: ADD_TODO, payload: text });
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: id });
export const setLoading = (loading) => ({ type: SET_LOADING, payload: loading });

// Async action example with thunk (simulates server delay)
export const addTodoAsync = (text) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(addTodo(text));
      dispatch(setLoading(false));
    }, 1000); // simulate API delay
  };
};
