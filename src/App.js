// 

import React from 'react';
import ip from 'ip' ;
import './App.css';

function App() {
  var add = "54.208.194.50" ;
  return (
    <div className="App" >
      <header className="App-header">
        <p>
          IP address: {add}.
        </p>
      </header>
    </div>
  );
}

export default App;
