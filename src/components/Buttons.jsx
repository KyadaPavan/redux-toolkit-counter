import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store";

const Buttons = () => {
  const dispatch = useDispatch();
  const numberInput = useRef();

  const handelIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handelDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handelAdd = () => {
    dispatch(counterActions.add(numberInput.current.value));
    numberInput.current.value = "";
  };

  const handelSub = () => {
    dispatch(counterActions.sub(numberInput.current.value));
    numberInput.current.value = "";
  };

  return (
    <>
      <div className="controls">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
            fdprocessedid="ox7o7p"
            onClick={handelIncrement}
          >
            Increment
          </button>
          <button
            type="button"
            className="btn btn-outline-light btn-lg px-4"
            fdprocessedid="fe5tt6"
            onClick={handelDecrement}
          >
            Decrement
          </button>
        </div>

        <input
          className="form-control"
          type="number"
          placeholder="Enter Number"
          aria-label="default input example"
          ref={numberInput}
        />

        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
            fdprocessedid="ox7o7p"
            onClick={handelAdd}
          >
            Addition
          </button>
          <button
            type="button"
            className="btn btn-outline-light btn-lg px-4"
            fdprocessedid="fe5tt6"
            onClick={handelSub}
          >
            Substraction
          </button>
        </div>
      </div>
    </>
  );
};

export default Buttons;
