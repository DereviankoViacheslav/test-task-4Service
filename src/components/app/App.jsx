import React from 'react';
import Header from '../header';
import Nav from '../nav';
import Analytics from '../analytics';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Nav />
        <Analytics />
      </main>
    </>
  );
}

export default App;