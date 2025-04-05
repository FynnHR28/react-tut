// main app component, makes sense to wrap all other components in here
import './App.css';
import Content from './Content.js';
import Header from './Header.js';
import Footer from './Footer.js';
import AddItem from './AddItem.js';
import Search from './Search.js';
import { useState, useEffect } from 'react';


// in order to have sibling components share
// state, we lift state up to parent component!

function App() {
  // STATES
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  // useEffect hook
  // passing items to list triggers useEffect whenever change is 
  // made to items
  useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items))
  }, [items])
  

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item,
       checked: !item.checked} : item);
    setItems(listItems)
  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems)
  }

  const addItem = (item) => {
    const id = items.length? items[items.length-1].id + 1: 1
    const addedItem = {
      id: id,
      checked: false,
      item: item
    }
    const listItems = [...items, addedItem]
    setItems(listItems) 
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
      <Search
        search={search}
        setSearch={setSearch}
      />
      <Content 
        // Prop drilling
        items={
          search ? items.filter((item) => 
            item.item.toLowerCase().includes(search.toLowerCase())
        ): items
        } 
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
