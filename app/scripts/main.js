/*

Questions:

Work on 3d. Done.
Move click event listener to the card sides, not the container. Done.
Branch. Done. 
Intro page.
Create decks?

Remove spam-ability.

For intro page,

Offer X premade deck, and immediately hide overlay if selected.

Otherwise, inputs and

*/

// Adding intro page
const introPage = document.querySelector('.overlay');
const introContainer = document.createElement('section')
introContainer.classList.add('intro-container')
const introDescrip = document.createElement('p')
introDescrip.classList.add('intro-descrip')
introDescrip.innerHTML = 'Create flashcards for your own study deck, or select from available options.'
const introQuestion = document.createElement('input')
introQuestion.classList.add('intro-question')
introQuestion.placeholder = 'Write your question here...'
const introAnswer = document.createElement('input')
introAnswer.classList.add('intro-answer')
introAnswer.placeholder = '... then write the answer here and click submit!'
const introSubmit = document.createElement('span')
introSubmit.classList.add('intro-submit')
introSubmit.innerHTML = 'Submit'
const introComplete = document.createElement('span')
introComplete.classList.add('intro-complete')
introComplete.innerHTML = 'Ready, Go'
const availableOptions = document.createElement('div')
availableOptions.classList.add('available-options')

const jsStudyButton = document.createElement('span')
jsStudyButton.classList.add('js-study-button')
jsStudyButton.innerHTML = 'JavaScript'
jsStudyButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    introPage.classList.add('intro-fade-add')
    // introPage.style.display = 'none'
})

availableOptions.appendChild(jsStudyButton)

introPage.appendChild(availableOptions)
introContainer.appendChild(introComplete)
introContainer.appendChild(introSubmit)
introContainer.appendChild(introAnswer)
introContainer.appendChild(introQuestion)
introContainer.appendChild(introDescrip)
introPage.appendChild(introContainer)



const cardArrayOfObj = [
    {
        question: 'T or F: One-line arrow functions include an implicit return',
        answer: 'True'
    },
    {
        question: 'What are the JS primitive data types?',
        answer: 'Boolean, Number, String, Undefined, Null, Symbol'
    },
    {
        question: 'T or F: forEach() returns a value',
        answer: 'False'
    },
    {
        question: 'What array method returns true if one of its elements passes the provided function?',
        answer: '.some()'
    },
    {
        question: 'What array method returns an empty array if no matches are found in the provided function?',
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
        question: 'If your code doesn\'t work, what tool can you use to find the source?',
        answer: 'A mirror'
    },
]

// Grab main content container element
const mainBox = document.querySelector('.main-content');

// Setting state - this must grab 1 card from the test questions array
const totalNumCards = cardArrayOfObj.length;
let randomArray = [];
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
                evt.preventDefault();
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
                // let innerBoxClasses = Array.from(innerBox.classList)
                // if(innerBoxClasses.some((el) => el === 'flipped')) {
                //     innerBox.classList.add('flipped2')
                // } else {
                //     innerBox.classList.remove('flipped2')
                // }
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

        

        // Grab list buttons
        let nextCardButton = document.querySelector('.next-card')
        let correctAnswerButton = document.querySelector('.correct-answer')

        nextCardButton.addEventListener('click', getNextCard)
        correctAnswerButton.addEventListener('click', rightAnswer)
            
        function getNextCard(evt) {
            evt.preventDefault();
            outerBox.classList.add('step3')
            innerBox.classList.toggle('flipped')
            let firstEl = unansweredArray.shift()
            unansweredArray.push(firstEl)
            console.log(outerBox.parentNode.childNodes) // WTF, why does console.log fix the double card problem?
            setTimeout(() => outerBox.parentNode.removeChild(outerBox), 600)
            setTimeout(() => newCard(), 600); // The delay must be exactly the same or else the DOM tangles up.
        }
        function rightAnswer(evt) {
            evt.preventDefault();
            // call getNextCard, remove the current card from unanswered array
            outerBox.classList.add('step3')
            innerBox.classList.toggle('flipped')
            console.log(outerBox.parentNode.childNodes) // WTF, why does console.log fix the double card problem?
            setTimeout(() => outerBox.parentNode.removeChild(outerBox), 600)
            unansweredArray.splice(0, 1)
            setTimeout(() => newCard(), 600); // The delay must be exactly the same or else the DOM tangles up.

        }

    } // This closes newCard()

    newCard();

} // This closes createBoard()
    


createBoard()     



/*     stretch goal - add CSS cards and maybe create different random decks out of the array of possible questions
    const cssButton = document.querySelector('.study-css');
    cssButton.addEventListener('click', cssCardsMove)
    
    function cssCardsMove(evt) {
        evt.preventDefault();
        outerBox.classList.add('card-control')
    } */
