import {IUsersResponse} from "../models/IUsersResponse.ts";

const url='https://dummyjson.com/users'

export const getUsers = async (): Promise<IUsersResponse> => {
    const response = await fetch(url)
        .then((value) => value.json());
    return response;
}