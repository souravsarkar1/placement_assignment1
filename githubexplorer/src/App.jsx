import './App.css';
import Navbar from './Components/Navbar/Navbar';


import AllRoutes from './Routes/allroutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='routes'>
      <AllRoutes />
      </div>
    </div>
  );
}

export default App;
