import React, {useReducer} from "react";
import Button from "@mui/material/Button";

function reducer(state, action){
  // action.type 에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value : state.value+1 };
    case "DECREMENT":
      return { value : state.value-1 };
    default:
      return state;
  }
}

const CounterReducer = () => {
  const [ state, dispatch ] = useReducer(reducer,{ value:0 });

  return (
      <div>
        <p>
          현재 카운터 값은 <b>{state.value}</b>입니다.
        </p>
        <Button variant="contained" onClick={() => dispatch({ type:"INCREMENT"})}>+1</Button>
        <Button variant="contained" onClick={() => dispatch({ type:"DECREMENT"})}>-1</Button>
      </div>
  )
}

export default CounterReducer;