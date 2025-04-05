import './Content.css';
// these are svg icons 
import ItemList from './ItemList.js';


// {} destructures the prop object and extracts title directly
const Content = ({items, handleCheck, handleDelete}) => {
  
  return (
    <main>
      {items ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete} 
        />
        ) : (
          <p>Your list is empty</p>
        )
      }     
    </main>
  )
}

export default Content;
