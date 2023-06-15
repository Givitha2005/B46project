const sum = (...arr) => {
    return arr.reduce((accumulator,currentValue) => accumulator+currentValue);

};

const loadData =(a,b) => {
    return a*b;
}

export {sum,loadData};