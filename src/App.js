import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';

import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3000',
});

function App() {
  const [systemSetting, setSystemSetting] = useState([]);

  useEffect(() => {
    client.get('v1/system_settings/1')
    .then(systemSetting => {
      console.log(systemSetting);
      setSystemSetting(systemSetting);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Table: {systemSetting.data == null ? 'empty' : systemSetting.data.data.type}
        </p>
        <div>id: {systemSetting.data == null ? 'empty' : systemSetting.data.data.id}</div>
        <div>name: {systemSetting.data == null ? 'empty' : systemSetting.data.data.attributes.name}</div>
        <div>value: {systemSetting.data == null ? 'empty' : systemSetting.data.data.attributes.value}</div>
      </header>
    </div>
  );
}

export default App;
