let arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

function check(name) {
    let nums = name.split('')
    for(let i=0;i<nums.length;i++){
        let n = nums[i].charCodeAt(0) - 97
        // console.log(n);
        arr[n]++
        if(arr[n] > 1){
            console.log("Input string contains duplicates");
            return
        }
    }
    console.log("Input string contains unique characters");
}

check("anurag")