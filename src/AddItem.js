import React from 'react'
import { FaPlus } from 'react-icons/fa';


const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input
           autoFocus
           id='addItem'
           type='text'
           placeholder='Add Item'
           // input text is whatever new item is
           value={newItem}
           // updating state of new item when input changes
           onChange={(e) => setNewItem(e.target.value)}
           required
        />
        <button
            type='submit'
            aria-label='add item'
        >
        submit
        </button>
    </form>
    
  )
}

export default AddItem
