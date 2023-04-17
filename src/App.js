import './App.css';
import CHeader from './components/CHeader';
import CContainer from './components/CContainer';
import CNav from './components/CNav';
import { useState } from 'react';
function App() {
  const [statusCCon,updatestatusCCon] = useState([0]);
  return (
    <div className='app'>
      <CHeader statusCCon={statusCCon} updatestatusCCon={updatestatusCCon}/>
      <CNav statusCCon={statusCCon} updatestatusCCon={updatestatusCCon}/>
      <CContainer statusCCon={statusCCon} updatestatusCCon={updatestatusCCon}/>
    </div>
  );
}

export default App;
