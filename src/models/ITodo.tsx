//спершу переносимо модель мастива і формуємо його через TS Jonson2ts
export interface ITodo {
	userId: number;
	id: number;
	todo: string;
	completed: boolean;
}