var temp = "";
var num1 = "";
var num2 = "";
var operation = "";
var result = 0;

document.getElementById("btn1").onclick = function () {
    temp += "1"
    document.getElementById("display").innerText = temp;
}
document.getElementById("btn2").onclick = function () {
    temp += "2"
    document.getElementById("display").innerText = temp;
}

document.getElementById("btn3").onclick = function () {
    temp += "3"
    document.getElementById("display").innerText = temp;
}

document.getElementById("btn4").onclick = function () {
    temp += "4"
    document.getElementById("display").innerText = temp;
}

document.getElementById("btn5").onclick = function () {
    temp += "5"
    document.getElementById("display").innerText = temp;
}

document.getElementById("btn6").onclick = function () {
    temp += "6"
    document.getElementById("display").innerText = temp;
}

document.getElementById("btn7").onclick = function () {
    temp += "7"
    document.getElementById("display").innerText = temp;
}

document.getElementById("btn8").onclick = function () {
    temp += "8"
    document.getElementById("display").innerText = temp;
}

document.getElementById("btn9").onclick = function () {
    temp += "9"
    document.getElementById("display").innerText = temp;
}
document.getElementById("btn0").onclick = function () {
    temp += "0"
    document.getElementById("display").innerText = temp;
}
document.getElementById("btnplus").onclick = function () {
    num1 = temp;
    operation = "+";
    temp = "";


}
document.getElementById("btnminus").onclick = function () {
    num1 = temp;
    operation = "-";
    temp = "";



}
document.getElementById("btnmultiply").onclick = function () {
    num1 = temp;
    operation = "*";
    temp = "";



}
document.getElementById("btndivide").onclick = function () {

    num1 = temp
    operation = "/";
    temp = "";


}
document.getElementById("btnequal").onclick = function () {
    num2 = temp;
    temp = "";
    if (operation == "+") {
        result = parseInt(num1) + parseInt(num2);
        document.getElementById("display").innerText = result;
    }
    if (operation == "-") {
        result = parseInt(num1) - parseInt(num2);
        document.getElementById("display").innerText = result;
    }
    if (operation == "*") {
        result = parseInt(num1) * parseInt(num2);
        document.getElementById("display").innerText = result;
    }
    if (operation == "/") {
        result = parseInt(num1) / parseInt(num2);
        document.getElementById("display").innerText = result;
    }


    temp = result;
    num2 = 0
    document.getElementById("display").innerText = result;
}
document.getElementById("btnclear").onclick = function () {
    temp = "";
    document.getElementById("display").innerText = 0;
}


