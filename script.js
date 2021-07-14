var userGrid = [];
var computerGrid = [];

// Grid creations
for(var i = 0; i < 8; i++)
{
    var userTempArray = []
    var computerTempArray = []
    for(var j = 0; j < 8; j++)
    {
    //making a new div for the player grid
        var d = document.createElement("div");
        d.classList.add('grid');
        userTempArray.push(d);
    //making a new div for the computer grid    
        d = document.createElement("div");
        d.classList.add('grid');
        computerTempArray.push(d);
    }
    userGrid.push(userTempArray);
    computerGrid.push()
}


var carrier = {name: "carrier", length: 5};
var battleship = {name: "Battleship", length: 4};
var cruiser = {name: "Cruiser", length: 3};
var submarine = {name: "Submarine", length: 3};
var destroyer = {name: "Destroyer", length: 2};

var allShips = [carrier, battleship, cruiser, submarine, destroyer];

   

//computer randomly places ships
function randomPlace(){

    var row;
    var col;
    var isHorizontal;
    var boatPlaced = false;


    for(ship of allShips){
        do{
            isHorizontal = (Math.floor(Math.random()*2) == 1);
            var length = ship.length;
            row = Math.floor(Math.random()* 10);
            col = Math.floor(Math.random()* 10);

            if(isHorizontal){
                if(row + length > computerGrid.length){
                    boatPlaced = false
                }
                else {
                    for (var c = col; c < col + length; c++){
                    if (computerGrid[row][c] == "*"){
                        boatPlaced = false;
                    }
                }
                if(boatPlaced){
                    for (var c = col; c < col + length; c++){
                        computerGrid[row][c] = "*";
                    }

                    }
                }
            }
            else{
                if(col+ length > computerGrid.length){
                    boatPlaced = false
                }
                else {
                    for (var r = row; r < row + length; r++){
                    if (computerGrid[r][col] == "*"){
                        boatPlaced = false;
                    }
                }
                if(boatPlaced){
                    for (var r = row; r < row + length; r++){
                        computerGrid[r][col] = "*";
                    }

                    }
                }
            }

        }while(boatPlaced == false)

    }

}