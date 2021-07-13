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

//computer randomly places ships
function randomPlace(){

    var spot;
    var isHorizontal;

    for(ship of allShips){

        
    }


}