
for(let row of rowElements) 
{
    let rowArray = [];
    board.push(rowArray);
    let squareHolder = row.getElementsByClassName("col");
    for(let square of squareHolder) {
        square.addEventListener("click", chosen, false);
        var boatSegment = {cell: col, isOccupied: false, firedUpon: false}
        rowArray.push(boat);
        col.boat = boat;
    }
}
    
////////////////////Clicking & Selecting//////////////////////////////////////////////////////////////////////////////
//starts the actual game
function startGame(){
    document.getElementById("setup-buttons").innerHTML = "";
    document.getElementById("whose-go").innerHTML = "Choose your target";
}

//resets the page
function Reset() {
    location.reload();
  }

//when user chooses a computer place to guess - also makes a fire button appear 
function chosen(){
    document.getElementById("buttonAppear").innerHTML = '<button onclick="fire()">Click to fire!</button>';
    if(document.querySelectorAll(".selected") != null){
      document.querySelectorAll(".selected").forEach(element => element.classList.remove("selected"));
    }
    this.classList.add("selected");
  }

<<<<<<< HEAD
//allows the user to lock in their guess and see if they were correct or not
function fire(){

}
=======
>>>>>>> fd187a438b3f8a593265c79859f637d6ec90be1c
//////////////////////////Buttons at the bottom///////////////////////////////////////////////////////////////////////////

//Randomizing for computer
var carrier = {name: "carrier", length: 5};
var battleship = {name: "Battleship", length: 4};
var cruiser = {name: "Cruiser", length: 3};
var submarine = {name: "Submarine", length: 3};
var destroyer = {name: "Destroyer", length: 2};

var allShips = [carrier, battleship, cruiser, submarine, destroyer]; 
while(allShips.length > 0)
{

//////////////////////////////////Computer randomly guess*/////////////////////////////////////////////////////////////////////////////