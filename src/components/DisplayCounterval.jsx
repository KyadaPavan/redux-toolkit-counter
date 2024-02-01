import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((state) => state.counter);

  return (
    <h5 className="fs-5 mb-4 text-center">
      Current Counter Value is: {counterVal}
    </h5>
  );
};

export default DisplayCounter;
