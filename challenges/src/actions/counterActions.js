export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_BY = "INCREMENT_BY";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const incrementBy = (value) => ({
  type: INCREMENT_BY,
  payload: value,
});
