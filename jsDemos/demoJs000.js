var titleLists=document.getElementById("title").children;
var li1=document.getElementById("li1");
var li2=document.getElementById("li2");
var li3=document.getElementById("li3");
var li4=document.getElementById("li4");
var li5=document.getElementById("li5");

console.log(titleLists);
li1.onmousemove=function () {
    li1.setAttribute("class","active");
};
li2.onmousemove=function () {
    li2.className="active";
};
li3.onmousemove=function () {
    li3.className="active";
};
li4.onmousemove=function () {
    li4.className="active";
};
li5.onmousemove=function () {
    li5.className="active";
};
li1.onmouseout=function () {
    li1.className="";
};
li2.onmouseout=function () {
    li2.className="";
};
li3.onmouseout=function () {
    li3.className="";
};
li4.onmouseout=function () {
    li4.className="";
};
li5.onmouseout=function () {
    li5.className="";
};
var spanHiddens=document.getElementsByTagName("spanHidden");
var li11=document.getElementById("li11");
var li21=document.getElementById("li21");
var li31=document.getElementById("li31");
var li41=document.getElementById("li41");
var li51=document.getElementById("li51");
li11.onmouseover=function () {
    li11.setAttribute("class","spanNoHidden");
};
li21.onmouseover=function () {
    li21.setAttribute("class","spanNoHidden");
};
li31.onmouseover=function () {
    li31.setAttribute("class","spanNoHidden");
};
li41.onmouseover=function () {
    li41.setAttribute("class","spanNoHidden");
};
li51.onmouseover=function () {
    li51.setAttribute("class","spanNoHidden");
};
li11.onmouseout=function () {
    li11.setAttribute("class","spanHidden");
};
li21.onmouseout=function () {
    li21.setAttribute("class","spanHidden");
};
li31.onmouseout=function () {
    li31.setAttribute("class","spanHidden");
};
li41.onmouseout=function () {
    li41.setAttribute("class","spanHidden");
};
li51.onmouseout=function () {
    li51.setAttribute("class","spanHidden");
};

var bottomText=document.getElementById("bottomText");
var timer;
bottomText.onmouseover=function () {
    timer=setInterval(function () {
        var a=parseInt(Math.random()*1000)%256;
        var b=parseInt(Math.random()*1000)%256;
        var c=parseInt(Math.random()*1000)%256;
        var str="rgb("+a+","+b+","+c+")";
        //bottomText.setAttribute("color","str");
        bottomText.style.color=str;
    },1000)
};
bottomText.onmouseout=function () {
    clearInterval(timer);
}