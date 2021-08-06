import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  STORE_TOKEN,
  VisibilityFilters
} from "./actions";
import { combineReducers } from "redux";

const { SHOW_ALL } = VisibilityFilters;

function auth(state = [], action) {
  switch (action.type) {
    case STORE_TOKEN:
      return Object.assign(
        {},
        {
          token: action.token
        }
      );
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  auth
});

export default todoApp;
