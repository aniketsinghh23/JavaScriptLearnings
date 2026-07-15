let students = [];

function addstudent(name, roll, age, marks) {

    let student = {
        name: name,
        roll: roll,
        age: age,
        marks: marks
    };

    students.push(student);

    console.log("Student Added");
}
function displayStudents(){

    for(let i=0;i<students.length;i++){

        console.log("Name :",students[i].name);
        console.log("Roll :",students[i].roll);
        console.log("Age :",students[i].age);
        console.log("Marks :",students[i].marks);

    }

}

displayStudents();
function findstudent(name){

    for(let i=0;i<students.length;i++){

        if(students[i].name==name){

            console.log("Student Found");
            console.log(students[i]);

            return;
        }

    }

    console.log("Student Not Found");

}

function removestudent(roll){

    for(let i=0;i<students.length;i++){

        if(students[i].roll==roll){

            students.splice(i,1);

            console.log("Student Removed");

            return;
        }

    }

    console.log("Student Not Found");

}

function updatestudent(roll,newMarks){

    for(let i=0;i<students.length;i++){

        if(students[i].roll==roll){

            students[i].marks=newMarks;

            console.log("Updated");

            return;
        }

    }

    console.log("Student Not Found");

}
function gettopper(){

    let topper=students[0];

    for(let i=1;i<students.length;i++){

        if(students[i].marks>topper.marks){

            topper=students[i];

        }

    }

    console.log("Topper");

    console.log(topper);

}

//Functions we have : getTopper, updateStudent, removeStudent, findStudent, displayStudents, addStudent

addstudent("Rahul",1,20,90);
addstudent("Aniket",2,21,80);
console.log(students);

gettopper()

findstudent("Rahul")






