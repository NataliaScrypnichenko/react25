import {ITodo} from "../../models/ITodo.ts";
import './todo.css'

interface TodoProps {
    item: ITodo,
}

const Todo = ({item}: TodoProps) => {
    //відображаємо і задає клас де вказуємо якщо так то так (тру чи не тру) і сюди підключаємо todo.css
    return (
        <div>
        <h3 className={item.completed ? 'complete' : 'non-complete'} >{item.title}</h3>
        </div>
    );
};

export default Todo;