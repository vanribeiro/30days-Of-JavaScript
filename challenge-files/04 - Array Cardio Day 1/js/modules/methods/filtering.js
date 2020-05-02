function filterByYear (initial, end, inventors) {
    return inventors.filter(inventor =>
        (inventor.year >= initial && inventor.year < end ));
}

function filterByFullName(firstName, lastName, inventors) {
    return inventors.filter(inventor => 
        (inventor.first === firstName && inventor.last === lastName));
}

export { filterByYear, filterByFullName };