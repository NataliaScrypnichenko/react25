import Todo from "../TodoComponent/Todo.tsx";
import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.tsx";

// це компонент з усіма toдо,на його рівні отримуємо дані з посилання

const Todos = () => {
//для того, щоб витянути масив з .then і потім використати і застосувати його в return там де буде ітерація
    const [todos,setTodos] = useState<ITodo[]>([]);

    useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/todos')
             .then(value => value.json())
             //отримуємо тут масив
             .then((iTodos:ITodo[]) => {
                 //через setTodos передати дані value
                 setTodos(iTodos)

             })
    },[])

    //звертаємось до туду які знаходяться const [todos,setTodos] і отримати кожну окрему туду
    // і будуємо виклик компонента для неї ключ

    return (
        <>
            {
                todos.map(todo=><Todo  key={todo.id} item={todo}/>)
            }

        </>
    );
};

export default Todos;