const list = document.querySelector('#bands');
const bands = [
    'The Plot in You', 'The Devil Wears Prada', 
    'Pierce the Veil', 'Norma Jean', 'The Bled', 
    'Say Anything', 'The Midway State', 'We Came as Romans', 
    'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 
    'Anywhere But Here', 'An Old Dog'
];


function strip(bandName) {
    let expReg = /^(a |the |an)/i;
    bandName.replace()
    return bandName.replace(expReg, '').trim();
}

let initialTime = performance.now();

const sortedBands = bands.sort((a, b) => {
    strip(a) > strip(b) ? 1 : -1;
})

let finishedTime = performance.now();


sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    list.appendChild(li);
});


console.log(`${(finishedTime - initialTime)/1000} seconds`);