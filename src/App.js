import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Batiment from './components/Batiment/Batiment';
import Services from './components/Services/Services';
import Alimentation from './components/Alimentation/Alimentation';
import Fabrication from './components/Fabrication/Fabrication';
import ArtisanList from './components/ArtisanList/ArtisanList';
import DetailArtisan from './components/DetailArtisan/DetailArtisan'
import {Routes, Route, useParams} from 'react-router-dom';
import {BrowserRouter}  from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">    
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/batiment' element={<Batiment/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/alimentation' element={<Alimentation/>} />
          <Route path='/fabrication' element={<Fabrication/>} />
          <Route path='/artisan/:artisanId' element={<DetailArtisan/>} />
          <Route path='/listeartisans' element={<ArtisanList/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        
    </div> 
  );
}

export default App;
