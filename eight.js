function fn(date){
    let d1 = new Date()
    let d2 = new Date(date)
    let ms = d2.getTime() - d1.getTime()
    let s = ms / 1000
    let m = s/60
    let h = m/60
    let d = h/24
    return d
}

console.log(Math.ceil(fn("2024-03-31")));