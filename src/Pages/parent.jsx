// import React, { useState } from 'react';
// import Counter from '../Pages/child';  

// function Parent() {
//     const [count, setCount] = useState(1);
//     const [color, setColor] = useState('black'); 

//     const handleIncrement = () => {
//         setCount(count + 1);
//     };

//     const handleDecrement = () => {
//         if (count > 1) {
//             setCount(count - 1);
//         }
//     };

//     const handleReset = () => {
//         setCount(1); 
//     };

//     const handleColorChange = () => {
//         setColor('red'); 
//     };

//     return (
//         <div>
//             <h1 style={{ color: color }}>Count in Parent: {count}</h1>
//             <button onClick={handleColorChange}>Change Color to Red</button>
            
//             <Counter
//                 count={count}
//                 onIncrement={handleIncrement} 
//                 onDecrement={handleDecrement} 
//                 onReset={handleReset} 
//                 color={color}
//             />
//         </div>
//     );
// }

// export default Parent;
