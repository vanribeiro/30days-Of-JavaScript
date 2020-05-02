import { filterByYear, filterByFullName } from './modules/filters.js';
import { inventors } from './modules/datas.js';
import showInventors from './modules/showInventors.js';

    // Array.prototype.filter() ✅
    // 1. Filter the list of inventors for those who were born in the 1500's
    let searchingBy = "";
    let initial = 1500, end = 1600; 
    let firstName = "Ada", lastName = "Lovelace";
    showInventors(searchingBy = "Period", initial, end, filterByYear(initial, end, inventors));
    showInventors(searchingBy = "Full Name", firstName, lastName, filterByFullName(firstName, lastName, inventors) )
    // console.table(filterByYear(1400, 1900, inventors));
    // console.table(filterByFullName(firstName, lastName, inventors));

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?

    // 5. Sort the inventors by years lived

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    //Wiki API: https://www.mediawiki.org/wiki/API:Tutorial#How_to_use_it


    // 7. sort Exercise
    // Sort the people alphabetically by last name

    // 8. Reduce Exercise
    // Sum up the instances of each of these