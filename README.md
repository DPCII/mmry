# MMRY!

## A peaceful study platform.

This memorization flash card game rotates through your study material and eliminates the questions you are comfortable with, rotating your unanswered or incorrect cards back into the mix. 

### Technology

The logic is written in vanilla javascript and styling was made in SCSS. I used the Yeoman webapp builder to provide basic templates and for the built-in compiler. My goals for this project were to practice tasteful design elements using more complex tools in SCSS such radial gradients and animations. In Javascript, I focused on DOM manipulation with generated HTML and sequenced events. Nearly all the HTML is dynamically generated. For example:

```
        let innerBox = document.createElement('div');
            innerBox.classList.add('card');
            innerBox.addEventListener('click', () => {
                innerBox.classList.toggle('flipped')
            })

```
This creates a box for cards to live in, and toggles them to turn over when clicked. However, the cards do not exist when the page is loaded, because the user must select what deck they want to study, or create their own custom deck on the spot. So first, the cards are created dynamically from a sequence of functions, and then rendered and destroyed one by one. 

This required interdependent timing and some further nesting in order to move cards around on the DOM. 

```
        function getNextCard(evt) {
            evt.preventDefault();
            outerBox.classList.add('step3');
            innerBox.classList.toggle('flipped');
            let firstEl = unansweredArray.shift();
            unansweredArray.push(firstEl);
            setTimeout(() => outerBox.parentNode.removeChild(outerBox), 600);
            setTimeout(() => newCard(), 600); // The delay must be exactly the same or else the DOM tangles up.
        }

```

### Contributions

Feel free to contribute to my project! Below are the next steps for development.

### What's Next

  1. Card/Deck database integration
  2. Randomization of cards
  3. Character limiter
