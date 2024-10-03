import { useDispatch, useSelector } from "react-redux";
import { createCounterAction } from "./store/CounterReducer";
import { useRef } from "react";

const Heading = () => {
  const { counter } = useSelector((state) => state.counter);
  const inputRef = useRef();

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(createCounterAction.increment());
  };

  const handleDecrement = () => {
    dispatch(createCounterAction.decrement());
  };

  const handleAdd = () => {
    const value = inputRef.current.value;
    dispatch(createCounterAction.add(value));
    inputRef.current.value = "";
  };

  const handleSubtract = () => {
    const value = inputRef.current.value;
    dispatch(createCounterAction.subtract(value));
    inputRef.current.value = "";
  };

  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold text-body-emphasis">Counter</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">{`Counter Value : ${counter}`}</p>

        <div className="input">
          <input type="number" placeholder="Enter Number" ref={inputRef} />
        </div>

        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 me-sm-3"
            onClick={handleIncrement}
          >
            Increment by 1
          </button>
          <button
            type="button"
            className="btn btn-dark btn-lg px-4 me-sm-3"
            onClick={handleDecrement}
          >
            Decrement by 1
          </button>

          <button
            type="button"
            className="btn btn-success btn-lg px-4 me-sm-3"
            onClick={handleAdd}
          >
            Add
          </button>

          <button
            type="button"
            className="btn btn-danger btn-lg px-4 me-sm-3"
            onClick={handleSubtract}
          >
            Subtract
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
