// console.log("Web Accessibility Enhancer content script loaded!");
// document.body.style.border = "5px solid red";

// // here we will be adding the code for the following funct:  front end part 
// //1. spacing : a. spaceing between lines b. spacing between words c. spacing between letters
// //2. font size adjustment
// //3. font style
// //4. font color, background color


// //backend part 
// // simplifying complex ideas 
// // summarizing 
// // highlighting important points
// //better visualization 
// //easier reading flow 
// // none 

// //front end : 
console.log("Content script loaded!");

// Function to apply styles dynamically
function applyStyle(setting, value) {
    document.body.style[setting] = value;
}

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "updateStyle") {
        applyStyle(request.setting, request.value);
    }
});


