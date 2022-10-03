import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [upper, setUpper] = useState(0);
  const [lower, setLower] = useState(0);
  const [age, setAge] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const calculateUpper = (220-age)*0.85;
    const calculateLower = (220-age)*0.65;
    setUpper(calculateUpper);
    setLower(calculateLower);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Heart rate limits calculator</h3>
      </div>
      <div>
        <label>Age</label>
      </div>
      <div>
        <input type="number" value={age} onChange={e => setAge(e.target.value)}/>
      </div>
      <div>
        <p>Heart rate limits</p>
      </div>
      <div>
        <output>{lower}-{upper}</output>
      </div>
      <div>
        <button>Calculate</button>
      </div>
    </form>
  );
}

export default App;
