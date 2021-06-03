// any redux code related to this user is going to go into this folder
// a reducer is basically just a function that gets two props:
// (state Object).- Which represents the last state or an initial state:
  // Which is just an object that represents what it is that we're trying to store.
// (action).- That is just an object that has a type and a paylod:
  // {
  //   type: String value that says the ACTION name
  //   payload: Can be anything, we can use this valu, object or whatever to whatever we want to use it, i's just a very flexible property that we get on this action object that we can or not use.
  // }

// Syntax: In essence a reducer function is expressed as
//    (state, action) => newState.
// Immutability: State is never changed directly. Instead the reducer always creates a new state.
// State Transitions: A reducer can have conditional state transitions.
// Action: A common action object comes with a mandatory type property and an optional payload:
// The type property chooses the conditional state transition.
// The action payload provides information for the state transition.

// https://redux.js.org/introduction/getting-started


// we initialize the state as null as our App.js
const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  // function feature where you can pass a default value in the paramas so use the param = def_value ), so in this case means that if state value is not set, then it falls back to the default value, that is INITIAL_STATE  
  // switch used for if no action match a case, return the actual state
  // remember that state is an object, and an object we must return
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      }

    default:
      return state;
  }
};

export default userReducer;