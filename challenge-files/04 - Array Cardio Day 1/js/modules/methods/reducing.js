function reduceToTotalYears(inventors) {
    return inventors.reduce((total, inventor) =>{
       total + (inventor.passed - inventor.year)
    }, 0);
}

export { reduceToTotalYears };