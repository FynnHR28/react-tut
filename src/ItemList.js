
import { FaTrashAlt } from 'react-icons/fa';
// Abstraction/cleaning out content.js
const ItemList = ({items, handleCheck, handleDelete}) => {
  return (

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
  )
}

export default ItemList