import React, { useState } from 'react';

const App: React.FC = () => {
  const [ gifts, setGifts ] = useState<string[]>([]);
  const [ newGift, setNewGift ] = useState('');

  const handleTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewGift(value);
  }

  const addGift = () => {
    setGifts([...gifts, newGift]);
    setNewGift('');
  }

  return (
    <div className="App">
      <h1 className="title">Gift Giver</h1>
      <ul className="gift-list">
        {gifts.length ? gifts.map((gift: any, index: number) => {
        return <li key={index} className="gift-item">{gift}</li>
        }) : null}
      </ul>
      <input 
        value={newGift} 
        onChange={handleTextInput} 
        className="input" 
        type="text" 
      />
      <button 
        onClick={addGift}
        className="btn">Add Gift</button>
    </div>
  );
}

export default App;
