const users = ["Raj","Mithun","Java","Python","C++","C","Javascript","Ruby"]

function check(name) {
    let n = users.indexOf(name)
    if(n == -1){
        console.log(`No , Someone is not a valid user`);
    }
    else{
        console.log(`Yes , ${name} is a valid user`);
    }
}

check("mithun")