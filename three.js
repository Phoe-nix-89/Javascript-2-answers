const students = [
    {
    name: "Mithun",
    marks: 95,
    },
    {
    name: "Prabir",
    marks: 75,
    },
    {
    name: "Alka",
    marks: 92,
    },
    {
    name: "Shivam",
    marks: 70,
    },
    {
    name: "Farman",
    marks: 99,
    },
]

function check(stud) {
    let c = -1
    for(let i=0;i<students.length;i++){
        if(students[i].name === stud){
            // console.log(students[i].marks);
            if(students[i].marks > 90){
                console.log(`Congratulations ${students[i].name}! You have cleared the exam`);
            }
            else{
                console.log("Sorry ! You have not cleared the exam");
            }
            c = 1
            break
        }
    }

    if(c == -1){
        console.log("Inavlid User");
    }
}

check("Mithun")
check("Prabir")
check("Mithun S")