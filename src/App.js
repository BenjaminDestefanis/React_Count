

import { React , useState } from 'react';
import './App.css';



import asd from './Images/logoimg.png'

import Button from './Components/Button';
import Count from './Components/Count';
 
function App() {

  const [numClicks , setNumClicks] = useState(0)



  const changeClick = () => {
    setNumClicks( numClicks + 1)
  }

  const factorClick = () => {
    setNumClicks( numClicks * 2)
  }

  const resetCount = () => {
    setNumClicks(0)
  }



  return (
    <div className="App">
      <h1>Contador de Clicks!</h1>

      <img 
      className='logo'
        src={asd}
      />


      <div className='main-container'>

        <Count numClicks={numClicks}/>

        <Button  clickButton={true} text='Click' changeClick={ changeClick } />
        <Button  clickButton={false} text='Reset' changeClick={ resetCount } />
        <Button  clickButton={true} text='Multi' changeClick={ factorClick } />

        

        



      </div>
    </div>
  );
}

export default App;

