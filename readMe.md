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
        2. Use animation to show the player is in the winning position.
        - If (winning position) {do something}