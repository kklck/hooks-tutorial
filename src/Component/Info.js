import React, { useState, useEffect } from "react";

const Info = () => {
  const [ name, setName ] = useState('');
  const [ nickname, setNickname ] = useState('');

  /*
  // 랜더링 전 + 후 수행
  useEffect(() => {
    console.log('랜더링 완료');
    console.log({
      name,
      nickname
    })
  }
  // 랜더링 전 만 수행 => ,[] 추가
  // 특정 값 랜더링 될 때 수행 => ,[name]
  )
  */

  useEffect(() => {
    console.log('effect');
    console.log(name);
    // 언마운트/[업데이트] "전" 때 수행
    return () => {
      console.log('cleanup'); // 뒷 정리
      console.log(name);
    }
  }, [name])

  const onChangeName = e => {
    setName(e.target.value);
  }

  const onChangeNickname = e => {
    setNickname(e.target.value);
  }

  return (
      <div>
        <div>
          <input value={name} onChange={onChangeName}/>
          <input value={nickname} onChange={onChangeNickname}/>
        </div>
        <div>
          <div>
            <b>이름 :</b>{name}
          </div>
          <div>
            <b>닉네임 :</b>{nickname}
          </div>
        </div>
      </div>
  )
}

export default Info;