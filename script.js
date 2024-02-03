document.body.style.textAlign = "center";

let myNameEle = document.createElement("h1");
myNameEle.id = "myName";
myNameEle.style.color = "#A9A9A9";
myNameEle.innerText = "Yu";
document.body.appendChild(myNameEle);

let numberInputEle1 = document.createElement("input");
numberInputEle1.id = "number1";
numberInputEle1.placeholder = "Number 1";
document.body.appendChild(numberInputEle1);

let numberInputEle2 = document.createElement("input");
numberInputEle2.id = "number2";
numberInputEle2.placeholder = "Number 2";
document.body.appendChild(numberInputEle2);

let sumBtnEle = document.createElement("button");
sumBtnEle.id = "goSum";
sumBtnEle.innerText = "Sum";
sumBtnEle.onclick = () => {
    let msgText;
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    if (number1.length == 0 && number2.length == 0) {
        msgText = "Number 1 and Number 2 are empty";
        msgEle.innerText = msgText;
        msgEle.style.color = "red";
        numberInputEle1.style.border = "1px solid red";
        numberInputEle2.style.border = "1px solid red";
        return;
    }
    if (number1.length == 0) {
        msgText = "Number 1 is empty";
        msgEle.innerText = msgText;
        msgEle.style.color = "red";
        numberInputEle1.style.border = "1px solid red";
        numberInputEle2.style.border = "";
        return;
    }
    if (number2.length == 0) {
        msgText = "Number 2 is empty";
        msgEle.innerText = msgText;
        msgEle.style.color = "red";
        numberInputEle2.style.border = "1px solid red";
        numberInputEle1.style.border = "";
        return;
    }

    let sum;
    let isString1;
    let isString2;
    try {
        isString1 = isNaN(Number(number1, 10));
        isString2 = isNaN(Number(number2, 10));
        if (isString1 && isString2) {
            throw new String("are not numbers");
        }
        if (isString1 || isString2) {
            throw new String("is not a number");
        }
        sum = Number(number1, 10) + Number(number2, 10);
        msgText = "The sum of two numbers is " + sum;
        msgEle.innerText = msgText;
        msgEle.style.color = "green";
        numberInputEle1.style.border = "";
        numberInputEle2.style.border = "";
    } catch (errText) {
        if (isString1 && isString2) {
            msgText = "Number 1 and Number 2 " + errText;
            msgEle.innerText = msgText;
            msgEle.style.color = "red";
            numberInputEle1.style.border = "1px solid red";
            numberInputEle2.style.border = "1px solid red";
            return;
        }
        if (isString1) {
            msgText = "Number 1 " + errText;
            msgEle.innerText = msgText;
            msgEle.style.color = "red";
            numberInputEle1.style.border = "1px solid red";
            numberInputEle2.style.border = "";
        }
        if (isString2) {
            msgText = "Number 2 " + errText;
            msgEle.innerText = msgText;
            msgEle.style.color = "red";
            numberInputEle2.style.border = "1px solid red";
            numberInputEle1.style.border = "";
        }
    }
};
document.body.appendChild(sumBtnEle);

let msgEle = document.createElement("p");
msgEle.id = "msg";
document.body.appendChild(msgEle);