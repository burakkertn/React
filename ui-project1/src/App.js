import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Login/home'; // 'Home' bileşenini doğru şekilde import ettiğinizden emin olun
import Login from './Components/Login/Login';
import Index from './Components/index/index';
import Horizontalchart from './chart-usd';
import Horizontalchart1 from './chart-eur';
import Horizontalchart2 from './chart-jpy';
import Horizontalchart3 from './chart-gbp';
import Horizontalchart4 from './chart-che';
import Trail from './Components/trail';

function App() {
  // Kullanıcının oturum durumunu burada kontrol edin. Örneğin, bir kullanıcının oturum açıp açılmadığını kontrol eden bir işlev kullanabilirsiniz.
  const isLoggedIn = false; // Kullanıcının oturum açık olduğunu varsayalım

  return (
    <Router>
      <Routes>
        {/* Ana sayfaya başlangıçta yönlendirin */}
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />}
        />
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/index"
          element={<Index />}
        />
                <Route
          path="/usd"
          element={<Horizontalchart />}
        />
          <Route
          path="/eur"
          element={<Horizontalchart1 />}
        />
         <Route
          path="/jpy"
          element={<Horizontalchart2 />}
        />
         <Route
          path="/gbp"
          element={<Horizontalchart3 />}
        />
          <Route
          path="/che"
          element={<Horizontalchart4 />}
        />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/home" /> : <Login />}
        />
          <Route
          path="/trail"
          element={<Trail />}
        />
      
      </Routes>
      
    </Router>
  );
}

export default App;
