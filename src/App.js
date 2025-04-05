// main app component, makes sense to wrap all other components in here
import './App.css';
import Content from './Content.js';
import Header from './Header.js';

// in order to have sibling components share
// state, we lift state up to parent component!

function App() {
  return (
    <div className="App">
      <Header title="Fynn's App"/>
      <Content title="Prop"/>
    </div>
  );
}

export default App;
