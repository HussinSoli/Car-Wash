"use strict";

const d = document;
const btnValue = d.querySelectorAll(".btn");
const taskPay = d.querySelector(".task_pay");
const taskName = d.querySelector(".task_name");
const totalPay = d.querySelector(".total_pay");
const totalNote = d.querySelector(".total_notes");
const btnSend = d.querySelector(".btn--send");

let total = 0;

for (const i of btnValue) {
  i.addEventListener("click", function () {
    // total clac
    total += Number(i.value);
    console.log(total);
    // new elements
    const btn = document.createElement("h5");
    const btnNode = document.createTextNode("remove");

    const para = document.createElement("p");
    const node = document.createTextNode(`${i.textContent.slice(0, -5)}`);
    const para1 = document.createElement("p");
    const node1 = document.createTextNode(`${i.value}$`);
    para.appendChild(node);
    para1.appendChild(node1);
    btn.appendChild(btnNode);
    taskPay.appendChild(para1);
    taskName.appendChild(para);
    taskName.appendChild(btn);
    // display total
    totalNote.textContent = "We accept cash, credit card, or PayPal";
    totalPay.textContent = `${total}$`;
    //remove

    btn.addEventListener("click", function () {
      para.remove();
      para1.remove();
      btn.remove();
      total -= i.value;
      totalPay.textContent = `${total}$`;
    });
    // reset
    btnSend.addEventListener("click", function () {
      para.remove();
      para1.remove();
      btn.remove();
      totalNote.textContent = "";
      totalPay.textContent = "0$";
      total = 0;
    });
  });
}
