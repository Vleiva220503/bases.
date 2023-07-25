import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const counterREdu = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "reset":
      return {
        counter: 0,
        previus: 0,
        changes: 0,
      };
    case "increaseBy":
      return {
        changes: state.changes + 1,
        counter: state.counter + action.payload.value,
        previus: state.counter,
      };
    default:
      return state;
  }
};
