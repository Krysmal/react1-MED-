import './App.css';
import CHeader from './components/CHeader';
import CContainer from './components/CContainer';
import CNav from './components/CNav';
function App() {
  return (
    <div className='app'>
      <CHeader/>
      <CNav/>
      <CContainer/>
    </div>
  );
}

export default App;
