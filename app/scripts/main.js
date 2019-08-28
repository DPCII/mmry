/*

Javascript flashcards.

Architecture:
Build attributes out in an object.
Populate the DOM.
Cards are populated into a stack on the left side of the screen. Then they move into their grids.


Study mode:

All cards laid out on the board, freely flipping back and forth.


Game mode:

Cards animate in from left to an offset card stack on the right of the screen. The first card is picked up after a brief pause.


Tasks Needed:
-Get card fronts and backs or decide on style
-Animate flip
-Populate the study mode
-Create study mode and test mode buttons
-Populate the objects with study content
-Create test mode logic
-Create test mode animation


*/

const cardArrayOfObj = [
    {
        question: 'card1',
        answer: 'c1v'
    },
    {
        question: 'card2',
        answer: 'c2v'
    },
    {
        question: 'card3',
        answer: 'c3v'
    },
    {
        question: 'card4',
        answer: 'c4v'
    },
    {
        question: 'card5',
        answer: 'c5v'
    },
    {
        question: 'card6',
        answer: 'c6v'
    }
]

// Grab main content container element
const mainBox = document.querySelector('.main-content');

// Setting state
const totalNumCards = cardArrayOfObj.length;
let randomArray = [];

// Flip card
function flipCard() {
    //does nothing yet
}


// Creates and adds cards to the DOM
function createBoard() {

    // loops through array of randomly generated numbers when board is created so that cards are in random order
        let numberGenerator = function(arr) {
          if (arr.length >= totalNumCards) return;
          let randomNumber = Math.floor(Math.random() * totalNumCards);
          if (arr.indexOf(randomNumber) < 0) {
            arr.push(randomNumber);
          }
        numberGenerator(arr);
        };
      numberGenerator(randomArray);




    
    // loops through card creation
      for (let i = 0; i < randomArray.length; i++) {
        //Outer box of each card that allows arrangement on the DOM
        let outerBox = document.createElement('div');
            // outerBox.classList.add('card-control'); This class must be added by event for animation
            outerBox.classList.add('card-control-initial-load')
            outerBox.setAttribute('card-number', randomArray[i]);

            // Grab testing button

                
            function jsCardsMove(evt) {
                evt.preventDefault();
                outerBox.classList.toggle('card-control')
                outerBox.classList.toggle('card-control-initial-load')
            }

            const jsButton = document.querySelector('.study-js');
            jsButton.addEventListener('click', jsCardsMove)
            
            //Outer box of nested divs necessary to animate cards
            let innerBox = document.createElement('div');
                innerBox.classList.add('card');

            //These two divs append as front and back to the above nest box    
            let cardSide1 = document.createElement('div');
                cardSide1.classList.add('card-inside');
                cardSide1.innerHTML = cardArrayOfObj[i].answer
            let cardSide2 = document.createElement('div');
                cardSide2.classList.add('card-outside');
                cardSide2.innerHTML = cardArrayOfObj[i].question

                innerBox.appendChild(cardSide1);
                innerBox.appendChild(cardSide2);

        // cardElement.innerHTML = cardArrayOfObj[i].value
        
        outerBox.appendChild(innerBox);
        mainBox.appendChild(outerBox);
      }
    }


createBoard()     



// cardElement.addEventListener('click', flipCard);    




/*     stretch goal - add CSS cards and maybe create different random decks out of the array of possible questions
    const cssButton = document.querySelector('.study-css');
    cssButton.addEventListener('click', cssCardsMove)
    
    function cssCardsMove(evt) {
        evt.preventDefault();
        outerBox.classList.add('card-control')
    } */
