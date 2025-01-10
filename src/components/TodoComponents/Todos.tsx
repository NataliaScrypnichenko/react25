import Todo from "../TodoComponent/Todo.tsx";
import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.tsx";
import {getAllTodos} from "../../services/api.servic.ts";


// це компонент з усіма toдо, на його рівні отримуємо дані з посилання

const Todos = () => {
//для того, щоб витягнути масив, а він з об'єктами з .then і потім використати, і застосувати його в return там де буде ітерація
    const [todos,setTodos] = useState<ITodo[]>([]);

    useEffect(()=>{
        //отримуємо велюме і їх можна деструктурувати їх
      getAllTodos().then(({todos}) =>setTodos(todos) )
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