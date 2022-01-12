import { useReducer } from "react";
import "./App.css";

// use reducer better for larger, more complex tasks - nested components - passing props etc

// good practice to switch hard coded strings for inc/dec to obj like below
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

// useReducer fn defined here - takes 2 params
// curr state & action - which is passed into dispatch fn
// whenever we call dispatch with, will be set as the action param
// reducer will return new updated state
function reducer(state, action) {
  // check our different types - actions we can perform on our state
  switch (action.type) {
    // every time we call dispatch - our count will inc by 1
    case ACTIONS.INCREMENT: //"increment":
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT: //"decrement":
      return { count: state.count - 1 };
    // good to have default - could throw err or return curr state
    default:
      // if not valid - we're not inc or dec - do nothing
      return state;
  }
}
// React docs -
function App() {
  //useReducer returns an array
  // UD takes 2 parameters
  //1 - reducer - fn that acts on state to get a new state
  //2 - initial value could be 0, but common to use obj - { count: 0 } - same as useState (0)
  // [state, dispatch]
  // - state - { count: 0 } - if 0 = count,
  // - dispatch fn - updates state - calls reducer fn
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    // calling dispatch() - will allow us to just inc
    dispatch({ type: ACTIONS.INCREMENT /* "increment" */ });
    // to dec we need to pass a type into dispatch, then use if or switch statement into reducer fn.
  }
  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT /*"decrement" */ });
  }
  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

// export default App;
