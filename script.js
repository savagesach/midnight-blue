
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
function chosen(){
    if(document.querySelectorAll(".selected") != null){
      document.querySelectorAll(".selected").forEach(element => element.classList.remove("selected"));
    }
    this.classList.add("selected");
  }
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

}


//////////////////////////////////Computer randomly guess*/////////////////////////////////////////////////////////////////////////////