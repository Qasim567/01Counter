import { useState } from "react";

function App() {
  const [counter, setcounter] = useState(15)

  const addValue=()=>{
    if(counter<20)
    {
      setcounter(counter+1)
    }  
    else
    {
      return(
        alert('You cannot exceed value no more')
      )
    }
  }
  const removeValue=()=>{
    if(counter>0)
    {
      setcounter(counter-1)
    }
  }
  return (
    <>
      <div className="grid place-content-center h-screen bg-gray-900">
        <h1 className="text-3xl font-bold mb-5 text-white">Chai aur React</h1>
        <h2 className="text-center font-bold mb-3 text-white">Counter value: {counter}</h2>
        <button className="bg-green-500 mb-2 py-1 rounded-md hover:py-3 text-white" onClick={addValue}>Add Value</button>
        <button className="bg-red-600 mb-2 py-1 rounded-md hover:py-3 text-white" onClick={removeValue}>Remove Value</button>
      </div>
    </>
  );
}

export default App;
