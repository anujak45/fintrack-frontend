import React from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import IncomeForm from './components/IncomeForm'; // Imported the new Income Form

function App() {
  return (
    <div className="App" style={{ background: '#f3f4f6', minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#111827', fontSize: '32px', fontWeight: '700', margin: '0' }}>
          💰 FinTrack - Personal Finance Dashboard 🛒
        </h1>
        <p style={{ color: '#6b7280', marginTop: '8px' }}>Manage your daily cash inflows and outflows cleanly</p>
      </header>

      {/* Modern Flexbox Grid Layout to keep forms aligned */}
      <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto' 
      }}>
          <IncomeForm />
          <ExpenseForm />
      </div>
    </div>
  );
}

export default App;
