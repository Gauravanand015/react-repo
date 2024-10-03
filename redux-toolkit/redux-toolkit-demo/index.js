const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./features/ice-cream/iceCream").iceCreamActions;

const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());

// store.dispatch(cakeActions.reStocked(3));

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());

// store.dispatch(iceCreamActions.reStocked(3));
// unsubscribe();
