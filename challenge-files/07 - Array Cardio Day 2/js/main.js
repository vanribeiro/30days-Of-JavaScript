import { people, comments } from './modules/datas.js';
import {
    isAdult,
    allAdult,
    comment,
    index
} from './modules/lib.js';
import {
    tableComments,
    peopleTable
} from './modules/showing.js';

console.log(isAdult(people));
console.log(allAdult(people));
console.log(index);
tableComments(comment(comments));
peopleTable(people);