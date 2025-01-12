import {IUser} from "./IUser.ts";

export interface IUsersResponseModel {
    total: number;
    limit: number;
    skip: number;
    users: IUser[];
}