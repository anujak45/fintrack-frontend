import React from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm'; // नवीन फॉर्म इम्पोर्ट केला

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ padding: '20px', textAlign: 'center' }}>
        <h1>💰 FinTrack - Personal Finance Tracker 🛒</h1>
        {/* 🧱 आपली पहिली वीट इथे ठेवली */}
        <ExpenseForm />
      </header>
    </div>
  );
}

export default App;
