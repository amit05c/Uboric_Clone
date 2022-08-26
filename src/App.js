
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
// import Slider from './components/slider/Slider';
import AllRoutes from './Pages/AllRoutes';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      <AllRoutes/>
      <Footer/>
      
    </div>
  );
}

export default App;
