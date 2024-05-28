import React from 'react';
import './App.css';
import Navigationbar from './components/Navigationbar';
import Trending from './components/Trending'

function App() {
  return (
    <div className="background">
      <Navigationbar />
      <Trending />
      {/* Konten lainnya di sini */}
    </div>
    
  );
}

export default App;
