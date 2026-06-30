// comment
var x = 10;// Number
x = "hello world!"; // String
x = true; // Boolean
x = 3.14159;
x = "3.14159";
var y = 5;
var z = "7";
var t = y + z; // "57"
// "1"+2 => "12"
// 1 + 2 => 3
// 1 + "2" => "12"
// console.log("Hello world!");
if(y > 0){

}else{

}
for(var i = 0;i<10;i++){

}

var arr = [];
// arr[4] = 19;
arr.push(19);
arr.push("xin chao");
arr.push(true);

var nums = [5,9,1,4,2,3];
console.log(nums);
console.log(7);
console.log("9"+8);
var total = 0;
for(var i=0;i< nums.length ;i++){
    total += nums[i];
}
var total2 = 0;
nums.map(e=>{
    total2 += e;
})
// sắp xếp mảng nums lại theo thứ tự bé->lớn  
nums.sort();

function tinh_tong(a,b){
    var c = a +b;
    console.log(c);
    return c;
}
tinh_tong(5,9);
var tt = tinh_tong(10,3.14159);
var tx = tinh_tong("ABC",108);

var nhan_hai_so = (a,b)=>{ // arrow function
    var c = a * b;
    console.log(c);
}

// alert("Yêu cầu trên 18 tuổi mới được truy cập vào website!"); // no return
// confirm("Xác nhận nộp bài thi?"); // return true/false
// prompt("Nhập tên của bạn:"); // return string

// tham chiếu h1 có id head1 sang đây để xử lý
var h1e = document.getElementById("head1"); 
// var h2b = document.getElementById("head1");
h1e.style.color = "red";
h1e.style.backgroundColor = "#abcabc";

h1e.textContent = "<i>Hello world! T2605E</i>";
h1e.innerHTML += "<i>Xin chao T2605E</i>";

h1e.classList.add("show-title");

var colors = ["green","red","yellow","orange","blue"];
var r = 0;
// setInterval(()=>{
//     // sẽ làm các việc trong này sau mỗi 1000ms
//     var cs = r%5;
//     h1e.style.color = colors[cs];
//     r++;
// },5000);

var h2e = document.getElementById("head2");
var timer = 10;
setInterval(()=>{
    if(timer >= 0){
        // in giá trị của timer vào h2e
        h2e.textContent = timer;
        // giảm timer đi 1
        timer--;
    }
},1000);

function box_click(e){
    e.style.backgroundColor = "green";
}

function move(){
    var bd = document.getElementById("page");
    bd.classList.add("dark");
}

function moveOut(){
    var bd = document.getElementById("page");
    bd.classList.remove("dark");
}

function inputText(x){ 
// hiểu rằng x: ý định là muốn truyền nguyên phần tử html bên kia sang đây
    console.log(x.value);
}
function inputText2(x){
    console.log(x.value);
    document.getElementById("msg").textContent = x.value;
}

function slc(){
    alert("SLC....");
}