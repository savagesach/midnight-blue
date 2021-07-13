var userGrid = [8][8];
var computerGrid = [8][8];

// Grid creations
for(var i = 0; i < 8; i++)
{
    for(var j = 0; j < 8; j++)
    {
    //making a new div for the player grid
        var d = document.createElement("div");
        d.classList.add('grid');
        userGrid[i][j] = d;
    //making a new div for the computer grid    
        d = document.createElement("div");
        d.classList.add('grid');
        computerGrid[i][j]
    }
}

//computer randomly places ships
function randomPlace(){

    var spot;
    var isHorizontal;

    for(ship of allShips){

        
    }


}