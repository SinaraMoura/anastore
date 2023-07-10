import './App.css';
import './css/global.css';
import './css/layout.css';
import './css/spacing.css';
import UserContext from './context/UserContext';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import { useState } from 'react';

function App() {

  const [valueInput, setValueInput] = useState('');
  const valuesProviders = { valueInput, setValueInput };
  return (
    <UserContext.Provider value={valuesProviders}>
      <Header />
      <Main />
      <Footer />
    </UserContext.Provider>
  )
}

export default App
