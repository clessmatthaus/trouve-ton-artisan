import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Routes, Route, useParams} from 'react-router-dom';
import {BrowserRouter}  from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div> 
  );
}

export default App;
