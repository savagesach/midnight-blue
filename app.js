document.addEventListener('DOMContentLoaded', () => {
    const userGrid = document.querySelector('.grid-user')
    const computerGrid = document.querySelector('.grid-computer')
    const displayGrid = document.querySelector('.grid-display')
    const ships = document.querySelectorAll('.ship')
    const destroyer = document.querySelector('.destroyer-container')
    const submarine = document.querySelector('.submarine-container')
    const cruiser = document.querySelector('.cruiser-container')
    const battleship = document.querySelector('.battleship-container')
    const carrier = document.querySelector('.carrier-container')
    const rotateButton = document.querySelector('#rotate')
    const userSquares = []
    const computerSquares = []
    let isHorizontal = true
    let allShipsPlaced = false
    const width = 10



    createBoard(userGrid, userSquares, 0)
    createBoard(computerGrid, computerSquares, 100)

     //Create Board
     function createBoard(grid, squares, start) {
        for (let i = start; i < width*width + start; i++) {
          const square = document.createElement('div')
          square.className = i
          square.id = i
          grid.appendChild(square)
          squares.push(square)
        }
      }

      //Computer Array
    computerArray = [];
    let count = 100;
    for(var i = 0; i < 10; i++)
    {
        var tempArr = [];
        for(var j = 0; j < 10; j++)
        {
            if(document.getElementById(count))
            {
              console.log("yes");
            }
            tempArr.push[document.getElementById(count)];
            count++;
        }
        computerArray.push(tempArr);
    }

    //When user clicks
for(var d = 100; d < 200; d++)
{
  console.log(d);
  if(document.getElementById(d))
  {
    console.log(true);
  }
  else{
    console.log(false);
  }
  document.getElementById(d + '').addEventListener("mouseover", function(){
    document.getElementById(d + '').style.backgroundColor = "white";
  }, false);

  document.getElementById(d + '').addEventListener("mouseout", function(){
    document.getElementById(d + '').style.backgroundColor = "blue";
  }, false);

  document.getElementById(d + '').addEventListener("click", function(){
    document.getElementById(d + '').style.backgroundColor = "red";
  }, false);
}


    //Rotate the ships
    function rotate() {
      if (isHorizontal) {
        destroyer.classList.toggle('destroyer-container-vertical')
        submarine.classList.toggle('submarine-container-vertical')
        cruiser.classList.toggle('cruiser-container-vertical')
        battleship.classList.toggle('battleship-container-vertical')
        carrier.classList.toggle('carrier-container-vertical')
        isHorizontal = false
        // console.log(isHorizontal)
        return
      }
      if (!isHorizontal) {
        destroyer.classList.toggle('destroyer-container-vertical')
        submarine.classList.toggle('submarine-container-vertical')
        cruiser.classList.toggle('cruiser-container-vertical')
        battleship.classList.toggle('battleship-container-vertical')
        carrier.classList.toggle('carrier-container-vertical')
        isHorizontal = true
        // console.log(isHorizontal)
        return
      }
    }
    rotateButton.addEventListener('click', rotate)

    //move around user ship
    ships.forEach(ship => ship.addEventListener('dragstart', dragStart))
    userSquares.forEach(square => square.addEventListener('dragstart', dragStart))
    userSquares.forEach(square => square.addEventListener('dragover', dragOver))
    userSquares.forEach(square => square.addEventListener('dragenter', dragEnter))
    userSquares.forEach(square => square.addEventListener('dragleave', dragLeave))
    userSquares.forEach(square => square.addEventListener('drop', dragDrop))
    userSquares.forEach(square => square.addEventListener('dragend', dragEnd))


    let selectedShipNameWithIndex
    let draggedShip
    let draggedShipLength


    ships.forEach(ship => ship.addEventListener('mousedown', (e) => {
      selectedShipNameWithIndex = e.target.id
      // console.log(selectedShipNameWithIndex)
    }))

    function dragStart() {
      draggedShip = this
      draggedShipLength = this.childNodes.length
      // console.log(draggedShip)
    }


    function dragOver(e) {
      e.preventDefault()
    }

    function dragEnter(e) {
      e.preventDefault()
    }

    function dragLeave() {
      // console.log('drag leave')
    }


    function dragDrop() {
      let shipNameWithLastId = draggedShip.lastChild.id
      let shipClass = shipNameWithLastId.slice(0, -2)
      // console.log(shipClass)
      let lastShipIndex = parseInt(shipNameWithLastId.substr(-1))
      let shipLastId = lastShipIndex + parseInt(this.dataset.id)
      // console.log(shipLastId)
      const notAllowedHorizontal = [0,10,20,30,40,50,60,70,80,90,1,11,21,31,41,51,61,71,81,91,2,22,32,42,52,62,72,82,92,3,13,23,33,43,53,63,73,83,93]
      const notAllowedVertical = [99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60]

      
      let newNotAllowedHorizontal = notAllowedHorizontal.splice(0, 10 * lastShipIndex)
      let newNotAllowedVertical = notAllowedVertical.splice(0, 10 * lastShipIndex)
  
      selectedShipIndex = parseInt(selectedShipNameWithIndex.substr(-1))
  
      shipLastId = shipLastId - selectedShipIndex
      // console.log(shipLastId)
  
      if (isHorizontal && !newNotAllowedHorizontal.includes(shipLastId)) {
        for (let i=0; i < draggedShipLength; i++) {
          let directionClass
          if (i === 0) directionClass = 'start'
          if (i === draggedShipLength - 1) directionClass = 'end'
          userSquares[parseInt(this.dataset.id) - selectedShipIndex + i].classList.add('taken', 'horizontal', directionClass, shipClass)
        }
      //As long as the index of the ship the user's dragging is not in the newNotAllowedVertical array! This will help the ships rebound back to the displayGrid.

      } else if (!isHorizontal && !newNotAllowedVertical.includes(shipLastId)) {
        for (let i=0; i < draggedShipLength; i++) {
          let directionClass
          if (i === 0) directionClass = 'start'
          if (i === draggedShipLength - 1) directionClass = 'end'
          userSquares[parseInt(this.dataset.id) - selectedShipIndex + width*i].classList.add('taken', 'vertical', directionClass, shipClass)
        }
      } else return

  
      displayGrid.removeChild(draggedShip)
      if(!displayGrid.querySelector('.ship')) allShipsPlaced = true
    }
  
    function dragEnd() {
      // console.log('dragend')
    }

  })

var carrier = {name: "carrier", length: 5};
var battleship = {name: "Battleship", length: 4};
var cruiser = {name: "Cruiser", length: 3};
var submarine = {name: "Submarine", length: 3};
var destroyer = {name: "Destroyer", length: 2};

var allShips = [carrier, battleship, cruiser, submarine, destroyer];
// //computer randomly places ships
// randomPlace();
// //what should be the grid that this is editing?
// function randomPlace(){
//     var row;
//     var col;
//     var isHorizontal;
//     var boatPlaced = false;

//     for(ship of allShips){
//         do{
//             isHorizontal = (Math.floor(Math.random()*2) == 1);
//             var length = ship.length;
//             row = Math.floor(Math.random()* 10);
//             col = Math.floor(Math.random()* 10);

//             if(isHorizontal){
//                 if(row + length > 10){
//                     boatPlaced = false
//                 }
//                 else {
//                     for (var c = col; c < col + length; c++){
//                     if (computerArray[row][c] == "*"){
//                         boatPlaced = false;
//                     }
//                     else{ boatPlaced = true;}
//                 }
//                 if(boatPlaced){
//                     for (var c = col; c < col + length; c++){
//                         computerArray[row][c] = "*";
//                         console.log([row][c]);
//                     }

//                 }
//                 }
//             }
//             //if vertical
//             else{
//                 if(col+ length > 10){
//                     boatPlaced = false
//                 }
//                 else {
//                     for (var r = row; r < row + length; r++){
//                     if (computerArray[r][col] == "*"){
//                         boatPlaced = false;
//                     }
//                     else{ boatPlaced = true;}
//                     }
//                 }
//                 if(boatPlaced){
//                     for (var r = row; r < row + length; r++){
//                         computerArray[r][col] = "*";
//                     }
//                 }
//             }
//         }while(boatPlaced == false)
//     }
// }
function Reset() {
  location.reload();
}
// When the user clicks on btn, open the popup for instructions
function getHelp() {
  var popup = document.getElementById("rules");
  popup.classList.toggle("popup");
  }



  
//when user clicks start game:
function startGame(){
  document.getElementById("whose-go").innerHTML = "Choose your target";
}



