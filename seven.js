function generate(min,max) {
    // let max = 10000
    // let min = 1000
    return Math.floor(Math.random() * (max - min)) + min
}

console.log(generate(1000,10000));