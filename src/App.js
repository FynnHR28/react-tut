// main app component, makes sense to wrap all other components in here
import './App.css';
import Content from './Content.js';
import Header from './Header.js';
import Footer from './Footer.js';
import { useState } from 'react';

// in order to have sibling components share
// state, we lift state up to parent component!

function App() {
  const [items, setItems] = useState([
      { id: 1, item: 'Apples', checked: false },
      
  ]);
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item,
       checked: !item.checked} : item);
    setItems(listItems)
  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }
  
  return (
    <div className="App">
      <Header title="Fynn's App"/>
      <Content 
        // Prop drilling
        items={items} 
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length = {items.length}/>
    </div>
  );
}

export default App;
