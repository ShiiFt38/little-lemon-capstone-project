import './App.css';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';
import Reservation from './pages/reservation';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/reservation' element={<Reservation/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
