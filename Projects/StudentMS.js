let students = [];

function addstudent(student) {
    students.push(student);
    console.log("Student Added");
}
function displaystudents(){
    for(let i=0;i<students.length;i++){

        console.log("Name :",students[i].name);
        console.log("Id :",students[i].Id);
        console.log("Age :",students[i].age);
        console.log("Marks :",students[i].marks);
    }
}

function findstudent(attribute, value){
    for(let i=0;i<students.length;i++){
        if(students[i][attribute]===value){
            console.log("Student Found");
            console.log(students[i]);
            return;
        }
    }
    console.log("Student Not Found");
}

function removestudent(attribute, value){

    for(let i=0;i<students.length;i++){

        if(students[i][attribute]===value){

            console.log("Removing Student:");
            console.log("Name :", students[i].name);
            console.log("Id :", students[i].Id);
            console.log("Age :", students[i].age);
            console.log("Marks :", students[i].marks);

            students.splice(i,1);

            console.log("Student Removed");

            return;
        }

    }

    console.log("Student Not Found");

}

function updatestudent(attribute, value, updatedData){

    for(let i=0;i<students.length;i++){

        if(students[i][attribute]===value){
            for(let key in updatedData){
                students[i][key] = updatedData[key];
            }
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







