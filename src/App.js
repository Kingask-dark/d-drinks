import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Beer from './components/Products/Beer/Beer';
import Vodka from './components/Products/Vodka/Vodka';
import Wine from './components/Products/Wine/Wine';
import Champagne from './components/Products/Champagne/Champagne';
import Detail from './components/Details/Detail';

function App({id}) {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/beer' element = {<Beer/>}/>
        <Route path='/vodka' element = {<Vodka/>}/>
        <Route path='/wine' element = {<Wine/>}/>
        <Route path='/champagne' element = {<Champagne/>}/>
        <Route path='/detail' element = {<Detail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
