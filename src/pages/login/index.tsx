import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface InputState {
  name: string;
  email: string;
  walletAddress: string;
}

const Login = () => {
  const [inputState, setInputState] = useState<InputState>({ name: '', email: '', walletAddress: '' });
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputState(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <label htmlFor="name">이름</label>
      <input type="text" id="name" name="name" value={inputState.name} onChange={handleInputChange} />

      <label htmlFor="email">이메일</label>
      <input type="email" id="email" name="email" value={inputState.email} onChange={handleInputChange} />

      <label htmlFor="walletAddress">지갑주소</label>
      <input type="text" id="walletAddress" name="walletAddress" value={inputState.walletAddress} onChange={handleInputChange} />

      <button onClick={() => navigate('../reading')}>건너뛰기</button>
      <button onClick={() => navigate('./login/earlybird')}>얼리버드 혜택보기</button>
    </div>
  );
};

export default Login;
