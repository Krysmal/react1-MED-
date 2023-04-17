import './App.css';
import CHeader from './components/CHeader';
import CContainer from './components/CContainer';
import CNav from './components/CNav';
import { useState } from 'react';
function App() {
  const [statusCCon,updatestatusCCon] = useState([0]);
  return (
    <div className='app'>
      <CHeader type="1"/>
      <CNav type="dsfdrgdr" statusCCon={statusCCon} updatestatusCCon={updatestatusCCon}/>
      <CContainer statusCCon={statusCCon} updatestatusCCon={updatestatusCCon}/>
    </div>
  );
}

export default App;
