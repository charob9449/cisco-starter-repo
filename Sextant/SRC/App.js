import logo from './logo.svg';
import './App.css';
import { Banner } from './components/banner';
import {Exhibit, Exhibit1, Latency} from './components/exhibit';
function App() {

  
  return (
    
      <div className="App">
        <header className="App-header">
          <Banner/>
          <img src={logo} className="App-logo" alt="logo" />
          <Exhibit/>
          <Exhibit1/>
          
          <Latency/>
          

        </header>
        
      </div>
      
  );
}

export default App;
