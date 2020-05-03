function reduceToTotalYears(inventors) {
    return inventors.reduce((total, inventor) =>{
       total + (inventor.passed - inventor.year)
    });
}

function reduceTransportsWay(transportations){
    return transportations.sort().reduce((init, current) => {
        if( init.length === 0 || init[init.length -1] !== current){
            init.push(current);
        }
        return init;
    }, []);
}

export { reduceToTotalYears, reduceTransportsWay };