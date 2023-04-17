import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/5af566166296423.6418cd2ee5c6b.jpg"}  alt="car" />

        <p>
          <h1>The new Porsche 911 Sport Classic. </h1>
          Some of the characteristics of Porsche 911 Sport Classic include:
          <ul>
            <li>It is a 3.7-litre</li>
            <li>Twin-turbo flat-six engine </li>
            <li>It has a seven-speed manual gearbox</li>
            <li>Transmits its 405 kW (550 PS) to the road via the rear wheels only</li>

          </ul>
        </p>

        <button type="button"
        onClick={() => {  
          alert('A limited-edition with a twin-turbo flat-six, rear-wheel drive and a manual gearbox. ');  
        }}  
        >
          Click to Learn more!
          
        </button>
      </header>
    </div>
  );
}

export default App;
