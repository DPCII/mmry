/*

Javascript flashcards.

Tasks Needed:
- Add keyboard flip capability
- This will need event listeners changed to click and event listeners on some part of keyboard
- Need test mode.
- Then logic for whether they got it right or not.
- Will need to create a 1 card population that updates what array it is drawn from based on a "win" condition which removes it from the built array of unanswered questions.


*/

const cardArrayOfObj = [
    {
        question: 'T or F: An arrow function has implicit return',
        answer: 'True'
    },
    {
        question: 'What are the JS primitive data types?',
        answer: 'Boolean, Number, String, Undefined, Null'
    },
    {
        question: 'T or F: forEach() returns a value to its array',
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
    }
]

// Grab main content container element
const mainBox = document.querySelector('.main-content');

// Setting state - this must grab 1 card from the test questions array
const totalNumCards = cardArrayOfObj.length;
let randomArray = [];
let unansweredArray = [];

// Flip card
function flipCard() {
    //does nothing yet
}


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
    
    

    // Questions:
    /*
        Iterating through new array. Pass in an iterator into newCard?
        Animation issue. How to fix step animation issue.

        Animation: make 3rd class. Add one class at a time. Start with class that is offset off screen. Add the second class on card creation. Then add third class and destroy it when button is clicked.

    */

       

        // New loop to iterate through unanswered questions and create cards to send to the DOM.
        // Call new card.
        function newCard() {
             

            //Take one card from unanswered array and create it on the DOM
            let j = 0;
            let currentCard = unansweredArray[j]
            
            //Outer box of each card that allows arrangement on the DOM
            let outerBox = document.createElement('div');
                outerBox.classList.add('card-control-initial-load')
                // outerBox.setAttribute('card-number', randomArray[i]);
                setTimeout(() => outerBox.classList.add('.step2'), 500)

            const jsButton = document.querySelector('.next-card');
            jsButton.addEventListener('click', getNextCard)
            
            //Outer box of nested divs necessary to animate cards
            let innerBox = document.createElement('div');
                innerBox.classList.add('card');

            //These two divs append as front and back to the above nest box    
            let cardSide1 = document.createElement('div');
                cardSide1.classList.add('card-outside');
                cardSide1.innerHTML = currentCard.answer
            let cardSide2 = document.createElement('div');
                cardSide2.classList.add('card-inside');
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
                // do things
                evt.preventDefault();
                outerBox.classList.add('.step3')
                return j++
            }
            function rightAnswer(evt) {
                evt.preventDefault();
                // call getNextCard, remove the current card from unanswered array
                unansweredArray.splice(0, 1)
                getNextCard(evt)

                newCard()

            }

        } // This closes newCard()

        newCard();

} // This closes createBoard()
    


createBoard()     



// cardElement.addEventListener('click', flipCard);    




/*     stretch goal - add CSS cards and maybe create different random decks out of the array of possible questions
    const cssButton = document.querySelector('.study-css');
    cssButton.addEventListener('click', cssCardsMove)
    
    function cssCardsMove(evt) {
        evt.preventDefault();
        outerBox.classList.add('card-control')
    } */
