import './Content.css';

const Content = () => {
    // click events!
    const handleClick = () => {
        console.log("Button clicked!");
    }
    // with params
    const handleClick2 = (name) => {
        console.log(name);
    }
  return (
    <main>
        <button className='btn-std' onClick={handleClick}>clickTest</button>
        {/* with params funcs you need an anonymous one or this will be called immediately */}
        <button onClick={() => handleClick2('fynn')}>clickTest2</button>

    </main>
  )
}

export default Content;
