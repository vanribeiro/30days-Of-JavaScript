import { filterByYear } from './modules/methods/filtering.js';
import { mapFullNames } from './modules/methods/maping.js';
import { sortByYear } from './modules/methods/sorting.js';
import { reduceToTotalYears } from './modules/methods/reducing.js';
import { inventors } from './modules/datas/datas.js';
import {   
    filteringInventors, 
    mappingFullNames,
    sortingByYear
} from './modules/view/showingInventors.js';

    // Array.prototype.filter() ✅
    // 1. Filter the list of inventors for those who were born in the 1500's
    let initial = 1400, end = 1900; 
    filteringInventors(initial, end, filterByYear(initial, end, inventors));

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
    mappingFullNames(mapFullNames(inventors));

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    sortingByYear(sortByYear(inventors));

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    console.log(reduceToTotalYears(inventors));

    // 5. Sort the inventors by years lived

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    //Wiki API: https://www.mediawiki.org/wiki/API:Tutorial#How_to_use_it


    // 7. sort Exercise
    // Sort the people alphabetically by last name

    // 8. Reduce Exercise
    // Sum up the instances of each of these