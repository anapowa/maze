GITLAB PAGE:
https://anapowa.gitlab.io/maze 

GITLAB Project: 
https://gitlab.com/anapowa/maze

DEVELOPMENT PLAN:
1. Represent the model of the maze as html elements. 
    1. Use a loop to iterate through the maze array. 
    2. Dynamically create elements with classes as needed. 
        1. Classes needed: W (wall), S (start), F (finsih)

2. Allow cursor arrows to move player around the maze. 
    1. Keep track of the player's location. 
    2. Create event listener to listen for keydown events including the cursor arrows.  
    3. Check whether a move is valid if the next tile is part of the maze floor or invalid if it's a wall or outside of the game boundary. 

3. Start the player on the start square and once the player has made it to the finish square, show the user they have won (!console.log or alert). 
    1. create a div specifically to represent the player. 
        1. Use CSS absolute position to update the position relative to the board || append each instance of the new position to the board. 
        2. Show the player is in the winning position.
        - If (winning position) {do something}

TERMS:
- Model: Representation of what needs to be created. In this example the map array is a model of the maze I want to create on the webpage. It's easy to for a developer to manipulate using code. 

- View: Real representation onto the webpage done with html markup of the model.

    The same model can be used to represent different views. 
    E.g:
    - Canvas API
    - Basic ray-caster
    - html markup

- MVC Architecture: controler of how the user interacts with the view. 

- Template literals (Template strings): They are string literals allowing embedded expressions. 
They are enclosed by the backtick (` `) (grave accent) character instead of double or single quotes. They can contain placeholders indicated by the dollar sign and curly braces (${expression}).

- Guard clause: it guards the flow of logic from continuing if certain conditions are met, or not met. 
They can reduce the number of lines in functions, classes, etc.
A result of using multiple guard clauses is that you can see what conditions trigger certain code to be executed. 