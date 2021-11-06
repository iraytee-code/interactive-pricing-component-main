"use strict";
//header feature
const navTag = document.createElement("nav");
navTag.setAttribute("id", "title");
navTag.classList.add("title");

navTag.innerHTML = `<h1 class="header_text">Simple, traffic-based pricing</h1>
<p class="paragraph_text">Sign-up for our 30-day trial. No credit card required.</p>`;

const header = document.querySelector("header");
const main = document.querySelector("main");
header.append(navTag);

const mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "main_div");
mainDiv.classList.add("main_div");
//pricing feature
mainDiv.innerHTML = `
<div class="value view_value">
<p class="view_svalue"><span id="viewValue"><p>K Page Views</p></span></p> 
</div>
<div class="value annualValue"><span class="price_value">$0</span><span class="durationValue">/month</span></div>
`;

main.append(mainDiv);
// slider feature

const valueSlider = document.createElement("div");
valueSlider.classList.add("slidercontainer");

valueSlider.innerHTML = `<div class="slidecontainer">
<input type="range" min="1" max="100" value="0" class="slider" id="viewRange"></div>`;

main.append(valueSlider);

//billing duration
const durationDiv = document.createElement("div");
durationDiv.classList.add("duration_div");
main.append(durationDiv);

const billDuration = document.createElement("div");
billDuration.classList.add("bill_duration");
billDuration.setAttribute("id", "duration");

billDuration.innerHTML = `
<div class="sub-type">Monthly Billing</div>
<label class="switch">
  <input type="checkbox" onclick="planDetailSwitch()">
  <span class="toggle_switch"></span>
</label>
<div class="sub-type">Yearly Billing</div>
`;

durationDiv.append(billDuration);

//start my trial info

const faqDetails = document.createElement("div");
faqDetails.classList.add("details");

faqDetails.innerHTML = `
<div class="sub_details"><ul><li class="list-type">
<img src="./images/icon-check.svg" alt="" /> Unlimited websites<li class="list-type">
<img src="./images/icon-check.svg" alt="" /> 100% data
ownership</li><li class="list-type">
<img src="./images/icon-check.svg" alt="" /> Email reports</li></ul></div>
<div class="sub_trial"><button class="start_button">Start my trial</button></div>
`;

main.append(faqDetails);

//slider value output
var slider = document.getElementById("viewRange");
var output = document.getElementById("viewValue");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

//toggle switch plan change

const viewRate = {
  monthly: 3,
  yearly: 16,
};
console.log(viewRate.monthly);
const planDetailSwitch = function () {
  const billDetails = document.querySelector(".price_value");
  if (billDetails.innerHTML === "$0") {
    let yearText = document.querySelector(".durationValue");
    yearText.textContent = "/year";
    let viewsSelected = document.querySelector(".viewValue");
    viewsSelected = slider.value;

    billDetails.innerHTML = "$" + viewsSelected * viewRate.yearly;
  } else {
    billDetails.innerHTML = "16";
    var yearText = document.querySelector(".durationValue");
    yearText.textContent = "/month";
    var viewsSelected = document.querySelector(".viewValue");
    viewsSelected = slider.value;
    billDetails.innerHTML = "$" + viewsSelected * viewRate.monthly;
  }
};
