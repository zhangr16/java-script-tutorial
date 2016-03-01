display data:
1.alert box:  window.alert() /*警告窗口*/

<script>
window.alert(5 + 6);
</script>


2.HTML output: document.write() /*测试方便*/

<script>
document.write(5 + 6);
</script>

<button onclick="document.write(5 + 6)">Try it</button>


3.HTML element: innerHTML /*定义内容*/

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>


4.browser console: console.log() /*文件后台*/

<script>
console.log(5 + 6);
</script>
