import './App.css'
import { Button } from './components/button';
import { useState } from 'react';

function App({ texto }) {
  const [estado, setEstado] = useState("Verdadero")
  return (
    <>
      <div> 
        <h1>
        {estado}
        </h1>
        
        <button 
         onClick ={()=> {
          if (estado == "Verdadero"){
            setEstado("Falso");
          } else {
            setEstado("Verdadero");
          }
        }}
        >
          Cambiar Estado
        </button>
        <button 
         onClick ={()=> {
          alert("hi");
        }}
        >
          Alert
        </button>


        <Button texto = {"Compras"}></Button>
      </div>
    </>
  )
}

export default App;
