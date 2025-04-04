import './Content.css';
import { useState } from 'react';
// these are svg icons 
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
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
 
  
  return (
    <main>
      {/* name refers to the name state defined up top */}
      <p>Hello {name}</p>
      <button onClick={changeName}>Change the display name</button>
      {/* with params funcs you need an anonymous one or this will be called immediately */}
      <button onClick={() => handleClick2(name)}>clickTest2</button>
      <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input type="checkbox" checked={item.checked}/>
            <label>{item.item}</label>
            {/* like adding a component! */}
            <FaTrashAlt 
            role='button' 
            tabIndex="0"/>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Content;
