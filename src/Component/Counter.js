import React, { useState } from "react";
import Button from '@mui/material/Button';

function Counter() {
  // 베열 [상태 값, 상태 설정 함수] = 기본 값 0
  const [ value, setValue ] = useState(0);

  return (
      <div>
        <p>
          현재 카운터 값은 <b>{value}</b>입니다.
        </p>
        <Button variant="contained" onClick={() => setValue(value+1)}>+1</Button>
        <Button variant="contained" onClick={() => setValue(value-1)}>-1</Button>
      </div>
  )
}

export default Counter;