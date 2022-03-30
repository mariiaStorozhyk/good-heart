import React from 'react';
import './App.scss'

import InfoForm from './components/InfoForm/InfoForm';

const App: React.FC = () => {
  return (
    <div className='app'>
      <InfoForm />
    </div>
  )
};

export default App;