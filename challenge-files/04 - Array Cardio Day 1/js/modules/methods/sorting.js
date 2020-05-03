function sortByYear(inventors) {
   return inventors.sort((x, y) => x.year > y.year ?  1 :  -1);
}

function sortByOldestInventor(inventors){
   return inventors.sort((x, y) => {
      const lastInventor = x.passed - x.year;
      const nextInventor = y.passed - y.year;
      return lastInventor > nextInventor ? -1 : 1;
   }) 
}

function sortByAlphabeticallyLastName(inventors) {
   return inventors.sort((lastOne, nextOne) => {
      const [aLast, aFirst] = lastOne.split(', ');
      const [bLast, bFirst] = nextOne.split(', ');
      return aLast < bLast ? -1 : 1;
   })
}

export { 
   sortByYear, 
   sortByOldestInventor, 
   sortByAlphabeticallyLastName 
};