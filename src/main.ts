import {IArray1, usersArray} from "../src/test";


interface INewArray{
    name: string
    position: string
    age: number
    gender: string
}

let newArray: INewArray[] = [];


function getUsersJobPositions(usersArray: IArray1[]): INewArray[]{

    return newArray;
}

const usersPositions = getUsersJobPositions(usersArray);
console.log('userPositions', usersPositions)