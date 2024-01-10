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
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route exact path='/batiment' element={<Batiment/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/alimentation' element={<Alimentation/>} />
          <Route exact path='/fabrication' element={<Fabrication/>} />
          <Route exact path='/artisan/:artisanId' element={<DetailArtisan/>} />
          <Route exact path='/listeartisans' element={<ArtisanList/>} />
          <Route exact path='*' element={<NotFound/>} />
        </Routes>
        <Footer />
    </div> 
  );
}

export default App;
