/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("You can do this, Mau!");
};

const btEl = document.querySelector("#draw");
const bodyEl = document.querySelector("#insertCard");

let arr = [];
const cardArr2 = ["♥", "♦", "♣", "♠"];
const numArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

btEl.addEventListener("click", e => {
  const selectEl = document.querySelector("#cardnum");
  let m = selectEl.value;
  let bodyArr = document.querySelectorAll(".inner");
  let arrValue = parseInt(bodyArr.length) + parseInt(m);

  console.log(arrValue);
  if (arrValue > 5) {
    alert("Stop pressing the goddamn button! You can only draw 5 cards!");
    selectEl.setAttribute("max", 5 - parseInt(bodyArr.length));
  } else {
    for (let i = 0; i < m; i++) {
      let revNum = Math.floor(Math.random() * numArr2.length);
      let revCards = Math.floor(Math.random() * cardArr2.length);
      arr.push([numArr2[revNum], cardArr2[revCards]]);
    }

    for (let i = 0; i < arr.length; i++) {
      bodyEl.innerHTML += `<div class="body col-12 w-75 px-2 mx-3 mb-3"><div class="inner">
    <div id="sym" class="sym" style="float: left;">${arr[i][1]}</div>
    <div class="cardbody">
      <h1 class="num">${arr[i][0]}</h1>
    </div>
    <div id="downsym" class="sym" style="float: right;">${arr[i][1]}</div>
    </div></div>`;
    }
    arr = [];
  }
});

const selectionSort = (arr = []) => {
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    let min = i;
    for (let j = min; j < size; j++) {
      if (arr[min] > arr[j]) {
        let temp = arr[min];
        arr[min] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
};

const sortEl = document.querySelector("#sort");
sortEl.addEventListener("click", () => {
  let numArr = [];
  let bodyArr = document.querySelectorAll(".num");
  for (let i = 0; i < bodyArr.length; i++) {
    numArr.push(parseInt(bodyArr[i].innerHTML));
  }
  let result = selectionSort(numArr);
  const suitArr = [];
  let symArr = document.querySelectorAll("#sym");
  for (let i = 0; i < symArr.length; i++) {
    suitArr.push(symArr[i].innerHTML);
  }

  console.log(suitArr);

  bodyEl.innerHTML = "";
  for (let i = 0; i < result.length; i++) {
    bodyEl.innerHTML += `<div class="body col-12 w-75 px-2 mx-3 mb-3"><div class="inner">
    <div id="sym" class="sym" style="float: left;">${suitArr[i]}</div>
    <div class="cardbody">
      <h1 class="num">${result[i]}</h1>
    </div>
    <div id="downsym" class="sym" style="float: right;">${suitArr[i]}</div>
    </div></div>`;
  }
  console.log(result);
  console.log(result[1]);
  console.log(suitArr);
});
