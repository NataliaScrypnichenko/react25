import {ITodo} from "./ITodo.tsx";
//ITodos -назвали в випадку якщо тут не було масива а в моделі ITodos лежав би одразу масив тудушек
export interface ITodosResponse{
	todos:ITodo[];
    total:number;
    skip:number;
    limit:number;
}