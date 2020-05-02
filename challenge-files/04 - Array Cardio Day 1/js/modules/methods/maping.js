function mapFullNames(inventors) {
    return inventors.map(inventor => (`${inventor.first} ${inventor.last}`));
}

export { mapFullNames };