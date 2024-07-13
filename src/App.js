import './App.css';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';
import Reservation from './pages/Reservation';
import ConfirmedBooking from './pages/ConfirmedBooking';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/Reservation' element={<Reservation/>}></Route>
      <Route path='/ConfirmedBooking' element={<ConfirmedBooking/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
