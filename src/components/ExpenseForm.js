import React, { useState } from 'react';

function ExpenseForm() {
    // 🧠 Temporary memory (State) to store input fields data
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('Food');

    // 🛑 Logic to handle form submission (When button is clicked)
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the page from reloading
        console.log("New Expense Saved:", { title, amount, category });
        alert(`🎉 Expense Added Successfully: ${title} - ₹${amount}`);
        
        // Resetting the form fields to blank
        setTitle('');
        setAmount('');
    };

    return (
        <div style={{
            background: '#ffffff',
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)', // Premium modern shadow
            padding: '30px',
            borderRadius: '20px', // Smooth curved corners
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
                💸 Add New Expense
            </h3>
            
            <form onSubmit={handleSubmit}>
                {/* 1. Expense Title Input */}
                <div style={{ marginBottom: '18px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#666', fontSize: '14px', fontWeight: '500' }}>Expense Name</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                        placeholder="e.g., Tea, Room Rent, Shirt" 
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

                {/* 3. Category Dropdown */}
                <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#666', fontSize: '14px', fontWeight: '500' }}>Category</label>
                    <select 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)}
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
                    >
                        <option value="Food">🍔 Food</option>
                        <option value="Bills">🔌 Bills</option>
                        <option value="Shopping">🛍️ Shopping</option>
                        <option value="Travel">✈️ Travel</option>
                    </select>
                </div>

                {/* 4. Final Premium Blue Button */}
                <button 
                    type="submit" 
                    style={{ 
                        width: '100%',
                        backgroundColor: '#2563eb', // Premium FinTech Blue
                        color: 'white', 
                        padding: '14px', 
                        border: 'none', 
                        borderRadius: '14px', 
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: '600',
                        boxShadow: '0px 4px 12px rgba(37, 99, 235, 0.2)',
                        transition: 'background 0.3s'
                    }}
                >
                    Add Expense 💰
                </button>
            </form>
        </div>
    );
}

export default ExpenseForm;
