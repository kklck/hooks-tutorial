import React, {useState, useMemo, useCallback, useRef} from "react";
import Button from "@mui/material/Button";

const getAverage = numbers =>{
  console.log('평균 값 계산 중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a,b) => a+b);
  return sum/numbers.length;
};

const Average = () =>{
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

/* 리 랜더링 될 때마다 함수 사용
  const onChange = e => {
    setNumber(e.target.value);
  };
  const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };
 */
  // 함수 재사용
  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []); // 처음 랜더링 될 때 만든 함수 계속 재사용

  // 함수 재사용
  const onInsert = useCallback(e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    inputEl.current.focus();  // 해당 ref 에 포커스
  }, [number, list]); // 특정 값 바뀔 때만 함수 사용


  // 특정 값 업데이트 될 때만 getAverage 수행하고자, 기존에는 number 수정만 해도 getAverage 수행
  const avg = useMemo(() => getAverage(list),[list])

  return (
      <div>
        <input value={number} onChange={onChange} ref={inputEl}/>
        <Button onClick={onInsert}>등록</Button>
        <ul>
          {list.map((value, index) => (
              <li key={index}>{index} : {value}</li>
          ))}
        </ul>
        <div>
          <b>평균 값 : </b>{avg}
        </div>
      </div>
  )
}

export default Average;