
function sum() {
    let arr = Array.from(arguments)
    let s = 0
    for(let n of arr){
        s += n
    }
    
    return s
}

console.log(sum(125,20,30))