import {
  ADD,
  SUBTRACT,
  DIVIDE,
  MULTIPLY,
  GET_NUM1,
  GET_NUM2,
} from "../actions/type";

const initialState = {
  num1: 2,
  num2: 2,
  answer: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NUM1:
      return {
        ...state,
        num1: Number(action.payload),
      };
    case GET_NUM2:
      return {
        ...state,
        num2: Number(action.payload),
      };
    case ADD:
      return {
        ...state,
        answer: state.num1 + state.num2,
      };
    case SUBTRACT:
      return {
        ...state,
        answer: state.num1 - state.num2,
      };
    case DIVIDE:
      return {
        ...state,
        answer: state.num1 / state.num2,
      };
    case MULTIPLY:
      return {
        ...state,
        answer: state.num1 * state.num2,
      };

    default:
      return state;
  }
}
