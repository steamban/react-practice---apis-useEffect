import React, { useState, useEffect } from 'react';
import Axios from "axios";


function App() {

   const [name, setName] = useState('');
   const [predictedAge, setPredictedAge] = useState(null);

   const fetchData = () => {
      Axios.get(`https://api.agify.io/?name=${name}`)
      .then((res) => {
         console.log(res.data);
         setPredictedAge(res.data)
      })
   }
    
   return (
      <div className="App">
         <input
            placeholder='Enter name'
            onChange={(event) => {
               setName(event.target.value);
            }}
         />
         <button onClick={fetchData}>Predict Age</button>
         <h2>Name: {predictedAge?.name}</h2>
         <h2>Predicted Age: {predictedAge?.age}</h2>
         <h2>Count: {predictedAge?.count}</h2>
      </div>
   );
}

export default App;
