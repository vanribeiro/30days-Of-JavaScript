// ## Array Cardio Day 2

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

function isAdult(person) {
    return person.some((person) => {
        const currentYear = (new Date()).getFullYear();
        return currentYear - person.year >= 19;
    });
}

// Array.prototype.every() // is everyone 19 or older?

function allAdult(people) {
    return people.every((person) => {
        const currentYear = (new Date()).getFullYear();
        return currentYear - person.year >= 19;
    });
}


// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

function comment(comments) {
    return  comments.find((comment) => {
        return comment.id === 823423;
    });
}


// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

function index(comments) {
    return comments.findIndex((comment) => {
        return comment.id === 823423;
    });
}

export { isAdult, allAdult, comment, index };