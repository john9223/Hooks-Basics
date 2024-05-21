import React, { useState, useEffect } from "react";

function UseState() {
  //progression 1
//   const [age, setAge] = useState(24);

//   const incrementAge = () => {
//     setAge(age + 1);
//   };

//   return (
//     <div>
//       <h3>My Current Age is {age}</h3>
//       <button onClick={incrementAge}>Get Older</button>
//     </div>
//   );
// }

  //progression 2
//   const [age, setAge] = useState(24);
//   const [siblings, setSiblings] = useState(1);

//   const incrementAge = () => {
//     setAge(age + 1);
//   };

//   const incrementSiblings = () => {
//     setSiblings(siblings + 1);
//   };

//   return (
//     <div>
//       <h3>My Current Age is {age}</h3>
//       <h4>My Number of Siblings: {siblings}</h4>
//       <button onClick={incrementAge}>Get Older</button>
//       <button onClick={incrementSiblings}>Increase Siblings</button>
//     </div>
//   );
// }

  //progression 3
//   const [state, setState] = useState({ age: 24, siblings: 3 });

//   const incrementValue = (key) => {
//     setState((prevState) => ({
//       ...prevState,
//       [key]: prevState[key] + 1
//     }));
//   };

//   const { age, siblings } = state;

//   return (
//     <div>
//       <h3>My Current Age is {age}</h3>
//       <h4>Number of Siblings: {siblings}</h4>
//       <button onClick={() => incrementValue("age")}>Get Older</button>
//       <button onClick={() => incrementValue("siblings")}>Increase Siblings</button>
//     </div>
//   );
// }
    //progression 4
//     const [age, setAge] = useState(24);
//     const [siblings, setSiblings] = useState(3);
  
//     return (
//       <div>
//         <h3>My Current Age is {age}</h3>
//         <h4>Number of Siblings: {siblings}</h4>
//         <button onClick={() => setAge(prevAge => prevAge + 1)}>Get Older</button>
//         <button onClick={() => setSiblings(prevSiblings => prevSiblings + 1)}>Increase Siblings</button>
//       </div>
//     );
//   }
  

  // progression 5
//   const [age, setAge] = useState(24);
//   const [siblings, setSiblings] = useState(3);

//   useEffect(() => {
//     alert(`Age changed: ${age}`);
//   }, [age]);

//   const incrementAge = () => {
//     setAge(prevAge => prevAge + 1);
//   };

//   const incrementSiblings = () => {
//     setSiblings(prevSiblings => prevSiblings + 1);
//   };

//   return (
//     <div>
//       <h3>My Current Age is {age}</h3>
//       <h4>My Siblings: {siblings}</h4>
//       <button onClick={incrementAge}>Increase Age</button>
//       <button onClick={incrementSiblings}>Increase Siblings</button>
//     </div>
//   );
// }


  const [text, setText] = useState("");
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    alert(`content button`);
  }, [text]);

  return (
    <div>
    
      <h3>{text}</h3>
      <button onClick={() => setText("This is John")}>Content</button>

      <h3>{likes}</h3>
      <button onClick={() => setLikes((likes) => likes + 1)}>Likes</button>
    </div>
  );
}

export default UseState;