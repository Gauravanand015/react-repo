const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIceCream--;
    },
    reStocked: (state, action) => {
      state.numberOfIceCream += action.payload;
    },
  },
  // two different ways to use extra reducers
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numberOfIceCream--;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state, action) => {
      state.numberOfIceCream--;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
