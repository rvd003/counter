import logo from './logo.svg';
import './App.css';

function App() {
  const mobile=["Android","Blackbery","Iphone","Windows Phones"]
  let manufacturer=["Samsung","HTC","Micromax","Apple"];

  return (
    <div className="App">
      <h3>Mobile Operating System</h3>
      <ul>
        {mobile.map((e)=>{
          return <li>{e}</li>

        })}
      </ul>
      <h3>Mobile Manufacturer</h3>
      <ul>
        {manufacturer.map((e)=>{
          return <li>{e}</li>

        })}
      </ul>
    
    </div>
  );
}

export default App;
