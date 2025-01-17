import {Support} from "./Support.ts";
import {IUser} from "./IUser.ts";

export interface IReqResInResponse {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: IUser[];
	support: Support;
}

//вирізаємо і створюємо файл Support і вставляємо туди дані і також вирізаємо так само IUser
// тут ми копіруємо масив і вставляємо його потім розбираємо