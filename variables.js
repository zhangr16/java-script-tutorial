(1)一个变量；多个类型:

<script>
var person = "John Doe",
carName = "Volvo",
price = 200;
document.getElementById("demo").innerHTML = price;
</script>


(2)若无定义则为"undefined":

<script>
var carName;
document.getElementById("demo").innerHTML = carName;
</script>


(3)变量计算：

<script>
var x = "5" + 2 + 3;
document.getElementById("demo").innerHTML = x;
</script> //x = 523

<script>
var x = 5 + 2 + 3;
document.getElementById("demo").innerHTML = x;
</script> //x = 10

<script>
var x = "hello";
var y = 666;
var z = x + y;
document.getElementById("demo").innerHTML = z;
</script> //z = hello666


(4)运算方法：

x+=y //x=x+y     x-=y //x=x-y
x*=y //x=x*y     x/=y //x=x/y
x%=y //x=x%y系数

<script>
var x = 10;
x /= 5;
document.getElementById("demo").innerHTML = x;
</script> //x = 2
