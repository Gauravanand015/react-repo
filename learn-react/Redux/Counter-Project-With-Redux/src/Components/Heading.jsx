import { useDispatch, useSelector } from "react-redux";

const Heading = () => {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold text-body-emphasis">Counter</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">{`Counter Value : ${counter}`}</p>

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
            className="btn btn-primary btn-lg px-4 me-sm-3"
            onClick={handleDecrement}
          >
            Decrement by 1
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
