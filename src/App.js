import './App.css';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';
import Reservation from './pages/Reservation';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/Reservation' element={<Reservation/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
