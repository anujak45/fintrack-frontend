import React, { useState } from 'react';

function IncomeForm() {
    // 🧠 Temporary memory (State) to store user inputs
    const [source, setSource] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    // 🛑 Handle form submission logic
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page reload
        console.log("New Income Saved:", { source, amount, date });
        alert(`🎉 Income Added Successfully: ${source} - ₹${amount}`);
        
        // Resetting form fields to blank
        setSource('');
        setAmount('');
        setDate('');
    };

    return (
        <div style={{
            background: '#ffffff',
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)', // Premium soft shadow
            padding: '30px',
            borderRadius: '20px', // Curved modern borders
            maxWidth: '420px',
            margin: '30px auto',
            textAlign: 'left',
            fontFamily: 'Segoe UI, Roboto, sans-serif'
        }}>
            <h3 style={{ 
                margin: '0 0 20px 0', 
                color: '#1a1a1a', 
                fontSize: '22px', 
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                🟢 Add New Income
            </h3>
            
            <form onSubmit={handleSubmit}>
                {/* 1. Income Source Input */}
                <div style={{ marginBottom: '18px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#666', fontSize: '14px', fontWeight: '500' }}>Income Source</label>
                    <input 
                        type="text" 
                        value={source} 
                        onChange={(e) => setSource(e.target.value)} 
                        required 
                        placeholder="e.g., Salary, Freelancing, Dividends" 
                        style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: '12px',
                            border: '1px solid #e0e0e0',
                            fontSize: '15px',
                            outline: 'none',
                            boxSizing: 'border-box',
                            background: '#f9f9f9'
                        }}
                    />
                </div>

                {/* 2. Amount Input */}
                <div style={{ marginBottom: '18px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#666', fontSize: '14px', fontWeight: '500' }}>Amount (₹)</label>
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        required 
                        placeholder="0.00" 
                        style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: '12px',
                            border: '1px solid #e0e0e0',
                            fontSize: '15px',
                            outline: 'none',
                            boxSizing: 'border-box',
                            background: '#f9f9f9'
                        }}
                    />
                </div>

                {/* 3. Date Input */}
                <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#666', fontSize: '14px', fontWeight: '500' }}>Date Received</label>
                    <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        required 
                        style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: '12px',
                            border: '1px solid #e0e0e0',
                            fontSize: '15px',
                            outline: 'none',
                            boxSizing: 'border-box',
                            background: '#f9f9f9',
                            cursor: 'pointer'
                        }}
                    />
                </div>

                {/* 4. Green Premium Button for Income */}
                <button 
                    type="submit" 
                    style={{ 
                        width: '100%',
                        backgroundColor: '#10b981', // Premium Success Green
                        color: 'white', 
                        padding: '14px', 
                        border: 'none', 
                        borderRadius: '14px', 
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: '600',
                        boxShadow: '0px 4px 12px rgba(16, 185, 129, 0.2)',
                        transition: 'background 0.3s'
                    }}
                >
                    Add Income 💰
                </button>
            </form>
        </div>
    );
}

export default IncomeForm;
