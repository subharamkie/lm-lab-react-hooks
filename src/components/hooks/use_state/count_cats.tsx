import { useState } from "react";
export function CountCats() {

  const [catCount,setCount] = useState(0);
  const handleClick = () => {
    setCount(catCount => catCount + 1)
}
const catList =[];
for(let i=0;i<catCount;i++){
  catList.push('🐈');
}
  return (
    <>
    <h2>useState</h2>
    
    <p>{catList}</p>

    <button onClick={handleClick}>
      There are {catCount} cats 🥳
    </button>
    </>
  );
}