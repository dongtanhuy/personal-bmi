import React, { useState, useEffect } from 'react';
import { getData, storeData } from 'services/localStorageService';
import Header from '../Header';
import BMIForm from '../BMIForm';
import History from '../History';
import Chart from '../Chart';
import './App.scss';

function App() {
  const initState = () => getData('data') || [];
  const [state, setState] = useState(initState);
  useEffect(() => {
    storeData('data', state)
  },[state])

  const onSaveData = value => {
    setState([...state, value])
  }

  return (
    <div className="App">
      <Header />
      <BMIForm onSaveData={onSaveData} />
      <History data={state} />
      <Chart data={state} />
    </div>
  );
}

export default App;
