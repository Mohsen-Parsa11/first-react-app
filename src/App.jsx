import './index.css'
import Aboutpage from './pages/aboutPage/AboutPage';
import About from './pages/AboutUs/About';
import Home from './pages/Home/Home';
import {Route, Routes} from 'react-router-dom';


function App () {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/article/:id' element={<Aboutpage />} />

      </Routes>
    </div>
  );
}
export default App;
