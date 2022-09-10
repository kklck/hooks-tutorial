import * as React from 'react';
import Info from "./Component/Info";
import {useState} from "react";
import Button from "@mui/material/Button";
import CounterReducer from "./Component/CounterReducer";
import InfoReducer from "./Component/InfoReducer";
import Average from "./Component/Average";

const App = () => {
  return <Average/>
}

/*
const App = () => {
  return <InfoReducer/>
}
 */

/*
const App = () => {
  return <CounterReducer/>
}
 */

/* Info effect
const App = () => {
  const [ visible, setVisible] = useState(false);
  return (
      <div>
        <Button onClick={() => {setVisible(!visible)}}>
          {visible ? '숨기기' : '보이기'}
        </Button>
        <hr/>
        {visible && <Info/>}
      </div>
  )
}
*/

export default App;
