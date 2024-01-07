import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Batiment from './components/Batiment/Batiment';
import Services from './components/Services/Services';
import Alimentation from './components/Alimentation/Alimentation';
import {Routes, Route, useParams} from 'react-router-dom';
import {BrowserRouter}  from 'react-router-dom';

function App() {
  return (
    <div>    
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route exact path='/batiment' element={<Batiment/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/alimentation' element={<Alimentation/>} />
        </Routes>
        <Footer />
    </div> 
  );
}

export default App;
