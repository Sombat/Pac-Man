// List of features to build
// 1) Have JS display the world of brick/coin/etc. - Done
// 2) Have PacMan move up and down

// Display World and PacMan

var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,1,2,1,1,1,2,1,1,1,2,2,1,1,3,2],
    [2,1,2,2,2,1,2,1,2,1,1,1,2,1,1,1,1,2,1,2],
    [2,1,1,1,2,1,1,1,2,2,2,2,2,1,2,2,2,2,1,2],
    [2,2,2,1,2,1,2,1,3,2,1,2,1,1,1,2,1,1,1,2],
    [2,1,1,1,2,1,2,2,2,2,1,2,1,2,1,2,1,2,1,2],
    [2,1,2,2,2,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2],
    [2,1,1,1,2,2,2,2,1,2,1,2,1,2,1,2,1,2,1,2],
    [2,1,2,1,2,1,1,1,1,2,1,1,1,2,1,1,1,1,1,2],
    [2,1,1,1,3,1,2,1,2,2,1,2,1,2,1,2,1,2,2,2],
    [2,1,2,2,2,1,2,1,2,1,1,2,1,1,1,2,1,1,1,2],
    [2,1,1,1,2,1,1,1,2,1,2,2,2,2,2,2,2,2,2,2],
    [2,2,2,1,2,1,2,1,2,3,1,2,1,1,1,1,1,1,1,2],
    [2,1,1,1,2,1,2,2,2,2,1,2,1,2,2,2,2,2,1,2],
    [2,1,2,2,2,1,1,1,1,2,1,2,1,2,1,1,3,2,1,2],
    [2,1,1,1,2,2,2,2,1,2,1,1,1,2,1,2,2,2,1,2],
    [2,1,2,1,1,1,1,1,1,2,1,2,1,2,1,1,1,1,1,2],
    [2,1,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2],
    [2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

var pacman = {
    x: 1,
    y: 1
};

var score = 0;

function displayWorld() {
    var output = "";
    for(var i=0; i<world.length; i++){
        output += "\n<div class='row'>";
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] == 2) {
                output += "\n\t<div class='brick'></div>";
            }
            else if(world[i][j] == 1){
                output += "\n\t<div class='coin'></div>";
            }
            else if(world[i][j] == 0){
                output += "\n\t<div class='empty'></div>";
            }
            else if(world[i][j] == 3){
                output += "\n\t<div class='cherry'></div>";
            }
        }
        output += "\n</div>";
    }
    document.getElementById('world').innerHTML = output;
}

function displayPacMan(){
    document.getElementById('pacman').style.top = pacman.y*20+"px";
    document.getElementById('pacman').style.left = pacman.x*20+"px";
}

displayWorld();

displayPacMan();


// Move PacMan up, down, left, right.

document.onkeydown = function(e){
    if(e.keyCode == 37){ // left
        if(world[pacman.y][pacman.x-1] != 2){
            pacman.x--;
        }
        document.getElementById('pacman').style.transform = "none";
        document.getElementById('pacman').style.transform = "rotate(180deg)";
    }
    else if(e.keyCode == 39){ // right
        if(world[pacman.y][pacman.x+1] != 2){
            pacman.x++;
        }
        document.getElementById('pacman').style.transform = "none";
    }
    else if (e.keyCode == 38){ // up
        if(world[pacman.y-1][pacman.x] != 2){
            pacman.y--;
        }
        document.getElementById('pacman').style.transform = "none";
        document.getElementById('pacman').style.transform = "rotate(-90deg)";
    }
    else if(e.keyCode == 40){ // down
        if(world[pacman.y+1][pacman.x] != 2){
            pacman.y++;
        }
        document.getElementById('pacman').style.transform = "none";
        document.getElementById('pacman').style.transform = "rotate(90deg)";
    }
    // Updates world when PacMan eats coins.
    if(world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        displayWorld();
        score = score+10; // Adds to score
        document.getElementById('score').innerHTML = score; // Updates score on page
    }
    // Updates world when PacMan eats cherries.
    if(world[pacman.y][pacman.x] == 3){
        world[pacman.y][pacman.x] = 0;
        displayWorld();
        score = score+50; // Adds to score
        document.getElementById('score').innerHTML = score; // Updates score on page
    }
    displayPacMan();
}

// Eat coin.

// Collision
