(1)Accessing Obeject Properties:

<html>
<body>
<p>Creating a JavaScript Object.</p>
<p id="demo"></p>
<script>
var people = {
firstName: "Andy", 
lastName: "zhang", 
age: 24, 
color: "blue"};
document.getElementById("demo").innerHTML = people.firstName + " is " + people.age  + " years old";
</script> // Andy is 24 years old
</body>
</html>


(2)Accessing Object Methods:

<script>
var person = {
firstName: "John",
lastName : "Doe",
id       : 5566,
fullName : function() {
return this.firstName + " " + this.lastName;
}
};
document.getElementById("demo").innerHTML = person.fullName(); // "John Doe"
//若没有()则返回function，结果为"function () { return this.firstName + " " + this.lastName; }"

