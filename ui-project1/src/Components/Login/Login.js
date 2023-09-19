import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.get('https://localhost:44317/api/User/GetAll');
      const users = response.data;

      const foundUser = users.find(
        (user) => user.username === username && user.password === password
      );

      if (foundUser) {
        // Kullanıcı giriş yaptığında sessionStorage veya localStorage kullanarak oturum bilgilerini saklayabilirsiniz.
        // Örnek: sessionStorage.setItem('isLoggedIn', 'true');
        navigate('/index');
      } else {
        setError('Geçersiz kullanıcı adı veya şifre');
      }
    } catch (error) {
      console.error('API isteği sırasında bir hata oluştu: ', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
     
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Kullanıcı Adı"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Giriş Yap</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
