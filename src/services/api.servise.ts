import {IUsersResponseModel} from "../models/IUsersResponseModel.ts";

const url='https://dummyjson.com'

export const getUsers = async (page:string): Promise<IUsersResponseModel> => {
    // можемо ще додатково зробити if(18.15 там показано 4 варіанта)
       const limit=30;
       const  skip = limit * (+page) - limit;
        // page -string і ми його конвертнули в числове значення чщму така формула,иомущо почаикову частину не потрібно скіпати
        const response = await fetch(url+ '/users'+ '?skip='+ skip)
            .then((value) => value.json());
        return response;
}