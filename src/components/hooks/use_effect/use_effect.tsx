
import { useEffect, useState } from "react"; 
interface ToDo {
    title:string;
    completed:boolean;
    id:number;
}
export const APICall = () => {

    const [toDos,setToDos] = useState<ToDo|null>(null);
    useEffect(()=> {
        const getToDo = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            const jsonData = await response.json();
            setToDos(jsonData);  
        }
        getToDo();
    },[]);
    
        return (
        <>
            <h2>useEffect</h2>
            {toDos && (<div>
                <p>{toDos.title}</p>
                <p>Completed:{toDos.completed?"Yes":"No"}</p>
             </div>)}
        </>
    )
}