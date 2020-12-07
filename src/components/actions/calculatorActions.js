import { ADD, DIVIDE, MULTIPLY, SUBTRACT, GET_NUM1, GET_NUM2 } from "./type";

export const getNum1 = (e) => {
  return {
    type: GET_NUM1,
    payload: e.target.value,
  };
};

export const getNum2 = (e) => {
  return {
    type: GET_NUM2,
    payload: e.target.value,
  };
};

export const add = () => {
  return {
    type: ADD,
  };
};

export const subtract = () => {
  return {
    type: SUBTRACT,
  };
};

export const divide = () => {
  return {
    type: DIVIDE,
  };
};

export const multiply = () => {
  return {
    type: MULTIPLY,
  };
};
