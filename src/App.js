// main app component, makes sense to wrap all other components in here
import './App.css';
import Content from './Content.js';
import Header from './Header.js';
import Footer from './Footer.js';
import AddItem from './AddItem.js';
import { useState } from 'react';

// in order to have sibling components share
// state, we lift state up to parent component!

function App() {
  const [items, setItems] = useState([{id:1,item:"apple", checked:false}]);
  const [newItem, setNewItem] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem('shoppinglist', JSON.stringify(newItems))
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item,
       checked: !item.checked} : item);
    setAndSaveItems(listItems)
  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems)
  }

  const addItem = (item) => {
    const id = items.length? items[items.length-1].id + 1: 1
    const addedItem = {
      id: id,
      checked: false,
      item: item
    }
    const listItems = [...items, addedItem]
    setAndSaveItems(listItems) 
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem)
    setNewItem('');
  }
  
  return (
    <div className="App">
      <Header title="Fynn's App"/>
      <AddItem
        newItem = {newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content 
        // Prop drilling
        items={items} 
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
