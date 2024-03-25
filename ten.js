const sentence = "please please submit your assignment on time, your assignments are important"
let arr = sentence.split(" ")
const m = new Map()
for(let str of arr){
    // console.log(str);
    if(m.get(str) === undefined){
        m.set(str,1);
    }
    else{
        let v = m.get(str)
        v++
        m.set(str,v)
    }
}

m.forEach((value,key) => {
    console.log(`'${key}' => ${value}`);
} 
)