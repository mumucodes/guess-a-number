## Making a plan
1) Make a drawing of your app. Simple "wireframes"

2) Once you have a drawing, name the HTML elements you'll need to realize your vision:

<body>
<header>
<main>
    <input>
    <button>
    <div>
    <div>

3) For each HTML element ask: Why do I need this?
 <header> will need to input page title
 <body> will hold the contents of the page
 <input> - will need to have a way for the user to input a guess

<button> - will need a button for the user to push
            HOW: addEventListener

<div> -     will need a space to return the results
            HOW: .textContent
<buttonv> -     will allow for a reset


4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"


5) Is there some state we need to initialize?


6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.

## EVENTS   

    What happens when the user clicks on the button to enter their guess?
        - the <div> display will display the state of the answer

        let magicAnswer = mathRandom
        
    What happens when user clicks on <button> reset?
        - the input clears/resets



7) Think about how to validate each of your steps
