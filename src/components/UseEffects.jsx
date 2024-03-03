import React, {useState, useEffect} from 'react'

const UseEffects = () => {
  const [count, setCount] =useState(0);

//declaration of useEffect..........
useEffect(() =>{
  document.title= `chats (${count})`;

});

  return (
    <div>
    <h1>useEffect</h1>
    <button onClick={() =>setCount(count+1)}>click</button>
    <input type="text" value={count} />
    </div>
  )
}
export default UseEffects

// function Timer() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   }, []); // <- add empty brackets here

//   return <h1>I've rendered {count} times!</h1>;
// }

