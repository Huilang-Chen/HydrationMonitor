import React from 'react';
// import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import HelloWorld from './component/HelloWorld';

function App() {
  return (
    <div>
    {/* comment */}
    <Header />
    <HelloWorld name="Huilang" />
    <Footer />
    </div>
  );
}

export default App;
