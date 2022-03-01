import { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.png";

function App() {

  const [numColor,setnumColor] = useState(0)

  const COLOR_BG = {
    1: '#FFDD00',
    2: '#00AF4D',
    3: '#007DF4',
    4: '#FF9100',
    5: '#FF301D',
    6: '#D4D5D9'
  }

  const COLOR_TEXT = {
    1: 'black',
    2: 'white',
    3: 'white',
    4: 'white',
    5: 'white',
    6: 'black'
  }

  const COLOR_TEXT_DEFAULT = 'white'

  const COLOR_DEFAULT = 'black'

  const valorColor = COLOR_BG[numColor] || COLOR_DEFAULT

  const colorText = COLOR_TEXT[numColor] || COLOR_TEXT_DEFAULT

  useEffect(() => {
    const interval = setInterval(() => {
      if(numColor>6){
        setnumColor(1)
      }else{

        setnumColor(numColor+1)
      }
      
    }, 1500);
    return () => clearInterval(interval);
  }, [numColor,setnumColor]);
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor:valorColor}}>
        <p className="text-e" style={{color:colorText}} >
          Aquí se construye el e-commerce corporativo, más grande del Perú.
        </p>
        <img className="img-logo" src={logo} alt="logo-ecreea" width={60} />
      </header>
    </div>
  );
}

export default App;
