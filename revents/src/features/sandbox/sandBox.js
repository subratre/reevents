import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import {
  decrement,
  DECREMENT_COUNTER,
  increment,
  INCREMENT_COUNTER,
} from "./testReducer";

const SandBox = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  return (
    <>
      <h2>Testing 123</h2>
      <p>the data is: {data} </p>
      <Button
        content="Increment"
        color="green"
        onClick={() => dispatch(increment(10))}
      />
      <Button
        content="Decrement"
        color="red"
        onClick={() => dispatch(decrement(5))}
      />
    </>
  );
};

export default SandBox;
