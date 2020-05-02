function sortByYear(inventors) {
   return inventors.sort((x, y) => x.year > y.year ?  1 :  -1);
}

export { sortByYear };