
 import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 입력창에 대한 state 타입 정의
interface InputState {
  name: string;
  email: string;
  walletAddress: string;
}

const Login= () => {
  // 입력창에 대한 state 초기값 설정
  const [inputState, setInputState] = useState<InputState>({
    name: '',
    email: '',
    walletAddress: '',
  });

  
  const navigate = useNavigate();

  // 입력창 값 변경 시 state 업데이트
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 건너뛰기 버튼 클릭 시 router를 이용하여 '../reading'으로 이동
  const handleSkipClick = () => {
    navigate('../reading');
  };

  // 얼리버드 혜택보기 버튼 클릭 시 router를 이용하여 './login/earlybird'로 이동
  const handleEarlyBirdClick = () => {
    navigate('./login/earlybird');
  };

  return (
    <div>
      {/* 이름 입력창 */}
      <label htmlFor="name">이름</label>
      <input
        type="text"
        id="name"
        name="name"
        value={inputState.name}
        onChange={handleInputChange}
      />

      {/* 이메일 입력창 */}
      <label htmlFor="email">이메일</label>
      <input
        type="email"
        id="email"
        name="email"
        value={inputState.email}
        onChange={handleInputChange}
      />

      {/* 지갑주소 입력창 */}
      <label htmlFor="walletAddress">지갑주소</label>
      <input
        type="text"
        id="walletAddress"
        name="walletAddress"
        value={inputState.walletAddress}
        onChange={handleInputChange}
      />

      {/* 건너뛰기 버튼 */}
      <button onClick={handleSkipClick}>건너뛰기</button>

      {/* 얼리버드 혜택보기 버튼 */}
      <button onClick={handleEarlyBirdClick}>얼리버드 혜택보기</button>
    </div>
  );
};

export default Login;

