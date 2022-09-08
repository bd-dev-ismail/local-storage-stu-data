//Dom Element
const studentFrom = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentFrom['name'];
const ageInput = studentFrom['age'];
const rollInput = studentFrom['roll'];
/**
 * {name: 'ismail', age: num, roll: num}
 */
// const students = [];
const students = JSON.parse(localStorage.getItem("Students")) || [];//convert to array

const addStudent = (name, age, roll) =>{
    students.push({
        name: name, 
        age: age,
        roll: roll
    });
    localStorage.setItem("Students", JSON.stringify(students));//array k string k convert
    return {name, age, roll};
}

const createStudensElement = ({name, age, roll}) => { //students (amra desturciting korteci)
    //Create Elements
  const studentsDiv = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentAge = document.createElement("p");
  const studentRoll = document.createElement("p");
    //Fill the content
  studentName.innerText = `Student Name: ${name}`;
  studentAge.innerText = `Student Age: ${age}`;
  studentRoll.innerText = `Student Roll: ${roll}`;
  //add to the Dom
  studentsDiv.append(studentName, studentAge, studentRoll);
  studentsContainer.appendChild(studentsDiv);
};
students.forEach(createStudensElement);

studentFrom.onsubmit = e =>{
    e.preventDefault(); //From submit korle url bar e data show na howr jonno!

    const newStudent = addStudent(
        nameInput.value,
        ageInput.value,
        rollInput.value
    );
    createStudensElement(newStudent);
    nameInput.value = '';
    ageInput.value = '';
    rollInput.value = '';
}