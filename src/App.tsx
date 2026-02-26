import { useState } from 'react';
import Login from './components/organisms/Login';
import MainApp from './components/templates/MainApp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <MainApp />
      )}
    </>
  );
}

export default App;
