let name = "Vinsmoke";
const age = " 20";
document.getElementById("StudentName").textContent = "Name:" + name;
document.getElementById("Age").textContent="Age:"+ age;

document.getElementById("result").innterHTML = "Name:" + name+ " <br> Age:" + age;
document.write("Name:" +name+ "<br>");
document.write("Age:"+ age);
function greet(){
    alert("Hello Students");
}
//greet();