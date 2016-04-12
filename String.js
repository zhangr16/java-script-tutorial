1.String Length:
var txt = "ABCDEFG"; /*字符文本*/
document.getElementById("demo").innerHTML = txt.length; /*显示文本长度*/

2.Finding a String in a String:
(1)
function myFunction() {
    var str = document.getElementById("p1").innerHTML;
    var pos = str.indexOf("locate");/*第一次出现*/
    document.getElementById("demo").innerHTML = pos;
}

(2)
function myFunction() {
    var str = document.getElementById("p1").innerHTML;
    var pos = str.lastIndexOf("locate");/*最后一次出现*/
    document.getElementById("demo").innerHTML = pos;
}


3.Searching for a String in a String:
function myFunction() {
    var str = document.getElementById("p1").innerHTML;
    var pos = str.search("locate");
    document.getElementById("demo").innerHTML = pos;
}


4.Slice() Method:

var str = "Apple, Banana, Kiwi";
var res = str.slice(7,13);/*字符范围7~13, Banana*/
var res = str.slice(7);/*字符范围7之后, Banana, Kiwi*/
var res = str.slice(-12);/*字符范围倒数12之后, Banana, Kiwi*/


5.Replace String:

var str = document.getElementById("demo").innerHTML; 
var txt = str.replace("a","b");/*文本中用b替换a*/
document.getElementById("demo").innerHTML = txt;


6.Converting Upper/Lower Case:

var text = document.getElementById("demo").innerHTML;
document.getElementById("demo").innerHTML = text.toUpperCase();/*文本全大写*/
document.getElementById("demo").innerHTML = text.toLowerCase();/*文本全小写*/


7.Converting a String to an Array：

var str = "a,b,c,d,e,f";
var arr = str.split(",");
document.getElementById("demo").innerHTML = arr[0];/*使字符串转变为列,"a"*/



