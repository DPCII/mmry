"use strict";var introPage=document.querySelector(".overlay"),introContainer=document.createElement("section");introContainer.classList.add("intro-container");var introDescrip=document.createElement("p");introDescrip.classList.add("intro-descrip"),introDescrip.innerHTML="Create flashcards for your own study deck, or select from available options.";var introQuestion=document.createElement("input");introQuestion.classList.add("intro-question"),introQuestion.placeholder="Write your question here...";var introAnswer=document.createElement("input");introAnswer.classList.add("intro-answer"),introAnswer.placeholder="... then write the answer here.";var introSubmit=document.createElement("span");introSubmit.classList.add("intro-submit"),introSubmit.innerHTML="Submit",introSubmit.addEventListener("click",function(e){e.preventDefault();var t=document.querySelector(".intro-question"),n=document.querySelector(".intro-answer");addNewQA(t.value,n.value),t.value=null,n.value=null});var introComplete=document.createElement("span");introComplete.classList.add("intro-complete"),introComplete.innerHTML="Ready, Go",introComplete.addEventListener("click",function(e){e.preventDefault(),cardArrayOfObj=createdArray,introPage.classList.remove("intro-fade-reverse"),introPage.classList.add("intro-fade-add"),setTimeout(createBoard,500)});var availableOptions=document.createElement("div");availableOptions.classList.add("available-options");var jsStudyButton=document.createElement("span");jsStudyButton.classList.add("js-study-button"),jsStudyButton.innerHTML="JavaScript",jsStudyButton.addEventListener("click",function(e){e.preventDefault(),cardArrayOfObj=jsDeck,introPage.classList.remove("intro-fade-reverse"),introPage.classList.add("intro-fade-add"),setTimeout(createBoard,500)}),availableOptions.appendChild(jsStudyButton),introPage.appendChild(availableOptions),introContainer.appendChild(introComplete),introContainer.appendChild(introSubmit),introContainer.appendChild(introAnswer),introContainer.appendChild(introQuestion),introContainer.appendChild(introDescrip),introPage.appendChild(introContainer);var createdArray=[];function addNewQA(e,t){createdArray.push({question:e.toString(),answer:t.toString()})}var jsDeck=[{question:"T or F: One-line arrow functions include an implicit return",answer:"True"},{question:"What are the JS primitive data types?",answer:"Boolean, Number, String, Undefined, Null, Symbol"},{question:"T or F: the array method .forEach() returns a value",answer:"False"},{question:"What array method returns true if one of its elements passes your provided comparison function?",answer:".some()"},{question:"What array method returns an empty array if no matches are found in your provided comparison function?",answer:".filter()"},{question:"What array method creates and returns a new array with the result of the provided function executed on every element?",answer:".map()"},{question:"Who are the greatest SEI instructors in the world?",answer:"Hammad and John"},{question:"What array method attached to the Array prototype creates an array out of your provided data?",answer:"Array.from()"},{question:"What built-in array variable returns the number of elements in the associated array?",answer:".length"},{question:"What array method populates your array with all the same value?",answer:".fill()"}],cardArrayOfObj=[],mainBox=document.querySelector(".main-content"),totalNumCards=cardArrayOfObj.length,unansweredArray=[];function createBoard(){for(var e=0;e<cardArrayOfObj.length;e++)unansweredArray.push(cardArrayOfObj[e]);!function r(){var e=unansweredArray[0],a=document.createElement("div");a.classList.add("card-control-initial-load"),document.addEventListener("keypress",function(e){"Space"===e.code&&i.classList.toggle("flipped")}),a.classList.add("step2");var i=document.createElement("div");i.classList.add("card"),i.addEventListener("click",function(){i.classList.toggle("flipped"),console.log(i.classList)});var t=document.createElement("div");t.classList.add("card-answer"),t.innerHTML=e.answer;var n=document.createElement("div");n.classList.add("card-question"),n.innerHTML=e.question,i.appendChild(t),i.appendChild(n),a.appendChild(i),mainBox.appendChild(a);var o=document.querySelector(".next-card"),s=document.querySelector(".correct-answer");o.addEventListener("click",function(e){e.preventDefault(),a.classList.add("step3"),i.classList.toggle("flipped");var t,n=unansweredArray.shift();unansweredArray.push(n),(t=600,new Promise(function(e){return setTimeout(e,t)})).then(function(){return new Promise(function(e,t){a.parentNode.removeChild(a),e()}).then(function(e){return r(),e}).catch(function(e){return console.log(e)})})}),s.addEventListener("click",function(e){var t;e.preventDefault(),a.classList.add("step3"),i.classList.toggle("flipped"),(t=600,new Promise(function(e){return setTimeout(e,t)})).then(function(){return new Promise(function(e,t){a.parentNode.removeChild(a),unansweredArray.splice(0,1),e()}).then(function(e){return console.log("check is firing"),0===unansweredArray.length&&(console.log("sdfsdfsfdsdfdfdfdfd"),introPage.classList.remove("intro-fade-add"),introPage.classList.add("intro-fade-reverse")),e}).then(function(e){return r(),e}).catch(function(e){return console.log(e)})})})}()}