

// Adding intro page
const introPage = document.querySelector('.overlay');
const introContainer = document.createElement('section')
introContainer.classList.add('intro-container')
const introDescrip = document.createElement('p')
introDescrip.classList.add('intro-descrip')
introDescrip.innerHTML = 'Create flashcards for your own study deck, or select from available options.'
let introQuestion = document.createElement('input')
introQuestion.classList.add('intro-question')
introQuestion.placeholder = 'Write your question here...'
let introAnswer = document.createElement('input')
introAnswer.classList.add('intro-answer')
introAnswer.placeholder = '... then write the answer here.'
const introSubmit = document.createElement('span')
introSubmit.classList.add('intro-submit')
introSubmit.innerHTML = 'Submit'
introSubmit.addEventListener('click', evt => {
    evt.preventDefault()
    let questionValue = document.querySelector('.intro-question')
    let answerValue = document.querySelector('.intro-answer')
    addNewQA(questionValue.value, answerValue.value)
    questionValue.value = null;
    answerValue.value = null;
})
const introComplete = document.createElement('span')
introComplete.classList.add('intro-complete')
introComplete.innerHTML = 'Ready, Go'

// Adding new decks from the Ready button
introComplete.addEventListener('click', evt => {
    evt.preventDefault()
    // Ideally I would add a prompt to name the deck, which also names the variable, and places it in the list. But this would need either a database or the use of localstorage. 
    cardArrayOfObj = createdArray;
    introPage.classList.remove('intro-fade-reverse');
    introPage.classList.add('intro-fade-add');
    setTimeout(createBoard, 500);
})


// Lists the finished decks
const availableOptions = document.createElement('div');
availableOptions.classList.add('available-options');


// Pre-made deck
const jsStudyButton = document.createElement('span');
jsStudyButton.classList.add('js-study-button');
jsStudyButton.innerHTML = 'JavaScript'
jsStudyButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    cardArrayOfObj = jsDeck
    introPage.classList.remove('intro-fade-reverse');
    introPage.classList.add('intro-fade-add')
    setTimeout(createBoard, 500)
});


// Pre-made deck appended
availableOptions.appendChild(jsStudyButton)


// Appending all above created DOM elements
introPage.appendChild(availableOptions)
introContainer.appendChild(introComplete)
introContainer.appendChild(introSubmit)
introContainer.appendChild(introAnswer)
introContainer.appendChild(introQuestion)
introContainer.appendChild(introDescrip)
introPage.appendChild(introContainer)

// Adding custom cards

let createdArray = []

function addNewQA(inputQ, inputA) {

    createdArray.push({question: inputQ.toString(), answer: inputA.toString()})
}



// Pre-made JS deck

let jsDeck = [
    {
        question: 'T or F: One-line arrow functions include an implicit return',
        answer: 'True'
    },
    {
        question: 'What are the JS primitive data types?',
        answer: 'Boolean, Number, String, Undefined, Null, Symbol'
    },
    {
        question: 'T or F: the array method .forEach() returns a value',
        answer: 'False'
    },
    {
        question: 'What array method returns true if one of its elements passes your provided comparison function?',
        answer: '.some()'
    },
    {
        question: 'What array method returns an empty array if no matches are found in your provided comparison function?',
        answer: '.filter()'
    },
    {
        question: 'What array method creates and returns a new array with the result of the provided function executed on every element?',
        answer: '.map()'
    },
    {
        question: 'Who are the greatest SEI instructors in the world?',
        answer: 'Hammad and John'
    },
    {
        question: 'What array method attached to the Array prototype creates an array out of your provided data?',
        answer: 'Array.from()'
    },
    {
        question: 'What built-in array variable returns the number of elements in the associated array?',
        answer: '.length'
    },
    {
        question: 'What array method populates your array with all the same value?',
        answer: '.fill()'
    },
]

// Array used to populate unanswered questions array
let cardArrayOfObj = []

// Grab main content container element
const mainBox = document.querySelector('.main-content');

// Setting state - this must grab 1 card from the test questions array
const totalNumCards = cardArrayOfObj.length;
// let randomArray = []; Associated to unfinished randomization 
let unansweredArray = [];



// Creates and adds cards to the DOM
function createBoard() {

    // // loops through array of randomly generated numbers when board is created so that cards are in random order
    //     let numberGenerator = function(arr) {
    //       if (arr.length >= totalNumCards) return;
    //       let randomNumber = Math.floor(Math.random() * totalNumCards);
    //       if (arr.indexOf(randomNumber) < 0) {
    //         arr.push(randomNumber);
    //       }
    //     numberGenerator(arr);
    //     };
    //   numberGenerator(randomArray);

    
    // loops through card creation
    for (let i = 0; i < cardArrayOfObj.length; i++) {

        //Push all objects on original data to a new array of "unanswered" questions
        unansweredArray.push(cardArrayOfObj[i])

    } 

    // New loop to iterate through unanswered questions and create cards to send to the DOM.
    // Call new card.
    function newCard() {
            
        //Take one card from unanswered array and create it on the DOM
        let currentCard = unansweredArray[0]
        
        //Outer box of each card that allows arrangement on the DOM
        let outerBox = document.createElement('div');
            outerBox.classList.add('card-control-initial-load')


            // Event listener for spacebar to flip cards
            document.addEventListener('keypress', (evt) => {
                if(evt.code === 'Space') {
                    innerBox.classList.toggle('flipped')
                }
            } )

            // outerBox.setAttribute('card-number', randomArray[i]);
            outerBox.classList.add('step2');
        
        //Box of nested divs necessary to animate cards
        let innerBox = document.createElement('div');
            innerBox.classList.add('card');
            innerBox.addEventListener('click', () => {
                innerBox.classList.toggle('flipped')
                console.log(innerBox.classList)

            })

        //These two divs append as front and back to the above nest box    
        let cardSide1 = document.createElement('div');
            cardSide1.classList.add('card-answer');
            cardSide1.innerHTML = currentCard.answer
            
        let cardSide2 = document.createElement('div');
            cardSide2.classList.add('card-question');
            cardSide2.innerHTML = currentCard.question

            innerBox.appendChild(cardSide1);
            innerBox.appendChild(cardSide2);
            
            outerBox.appendChild(innerBox);
            mainBox.appendChild(outerBox);

        // Fx to restart when card deck is complete
        function checkForComplete() {
            console.log('check is firing')
           if (unansweredArray.length === 0) {
               console.log('sdfsdfsfdsdfdfdfdfd')
               // do thing with overlay
               introPage.classList.remove('intro-fade-add');
               introPage.classList.add('intro-fade-reverse');
           } else {
               return null
           }
        }

        // Grab list buttons
        let nextCardButton = document.querySelector('.next-card')
        let correctAnswerButton = document.querySelector('.correct-answer')

        nextCardButton.addEventListener('click', getNextCard)
        correctAnswerButton.addEventListener('click', rightAnswer)
            
        function getNextCard(evt) {
            evt.preventDefault();
            outerBox.classList.add('step3');
            innerBox.classList.toggle('flipped');
            let firstEl = unansweredArray.shift();
            unansweredArray.push(firstEl);
            const delay = time => new Promise(resolve => setTimeout(resolve, time));
            delay(600).then(() => {
                return new Promise(function(resolve, reject) {
                    outerBox.parentNode.removeChild(outerBox);
                    resolve();
                })
                .then((output) => {
                    newCard();
                    return output
                })
                .catch(err => console.log(err))
            })
        }
        function rightAnswer(evt) {
            evt.preventDefault();
            // call getNextCard, remove the current card from unanswered array
            outerBox.classList.add('step3');
            innerBox.classList.toggle('flipped');
            
            const delay = time => new Promise(resolve => setTimeout(resolve, time));
            delay(600).then(() => {
                return new Promise(function(resolve, reject) {
                    outerBox.parentNode.removeChild(outerBox);
                    unansweredArray.splice(0, 1);
                    resolve();
                })
                .then((output) => {
                    checkForComplete();
                    return output
                })
                .then((output) => {
                    newCard();
                    return output 
                })
                .catch(err => console.log(err))
            })

        }

    } // This closes newCard()

    newCard();

} // This closes createBoard()
    





