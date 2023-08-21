
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import User from './components/User';
import 'bootstrap/dist/css/bootstrap.min.css'
import Usta from './components/Usta';
import Kayit from './components/Kayit';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<User />} />
        <Route path='/usta' element={<Usta/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/kayit" element={<Kayit />} />
      </Routes>
    </div>
  );
}

export default App;
