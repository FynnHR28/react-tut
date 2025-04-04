import './Content.css';
import { useState } from 'react';
// these are svg icons 
import { FaTrashAlt } from 'react-icons/fa';

// {} destructures the prop object and extracts title directly
const Content = ({title}) => {
  const [name, setName] = useState('Fynn')
  const [items, setItems] = useState([
    { id: 1, item: 'Apples', checked: false },
    
  ]);
  // click events!
  const changeName = () => {
      const names = ['Fynn', 'Liam', 'Noah', 'Oliver', 'Elijah', 'James', 'William', 'Benjamin', 'Lucas', 'Henry']
      const index = Math.floor(Math.random() * names.length);
      // changes current state of name in this component 
      // only re renders this content component, not the rest of the display
      setName(names[index])

  }
    // with params 
  const handleClick2 = (name) => {
      // `` ${} for string literals in js, f strings in py
      console.log(`${name} clicked`);
  }

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
    <main>
      <h1>{title}</h1>
      {/* name refers to the name state defined up top */}
      <p>Hello {name}</p>
      <button onClick={changeName}>Change the display name</button>
      {/* with params funcs you need an anonymous one or this will be called immediately */}
      <button onClick={() => handleClick2(name)}>clickTest2</button>
      {items.length ? (
        <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input 
            type="checkbox" 
            onChange={() => (
              handleCheck(item.id)
            )}
            checked={item.checked}/>
            <label>{item.item}</label>
            {/* like adding a component! */}
            <FaTrashAlt 
            onClick={() => handleDelete(item.id)}
            role='button' 
            tabIndex="0"/>
          </li>
        ))}
      </ul>

      ) : (

        <p>List is empty</p>
      )}
      
    </main>
  )
}

export default Content;
