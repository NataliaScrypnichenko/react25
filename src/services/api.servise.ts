import {IUsersResponseModel} from "../models/IUsersResponseModel.ts";

const url='https://dummyjson.com/users'

export const getUsers = async (): Promise<IUsersResponseModel> => {
    const response = await fetch(url)
        .then((value) => value.json());
    return response;
}