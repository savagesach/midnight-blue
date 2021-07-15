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
    const width = 10

     //Create Board
     function createBoard(grid, squares) {
        for (let i = 0; i < width*width; i++) {
          const square = document.createElement('div')
          square.dataset.id = i
          grid.appendChild(square)
          squares.push(square)
          square.className += "oneByOne";
        }
      }
      createBoard(userGrid, userSquares)
      createBoard(computerGrid, computerSquares)
        //Computer Array
      computerArray = [];
      let count = 0;
      for(var i = 0; i < 10; i++)
      {
          var tempArr = [];
          for(var j = 0; j < 10; j++)
          {
              tempArr.push[document.getElementById(count)];
              count++;
          }
          computerArray.push(tempArr);
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
                    else{ boatPlaced = true;}
                }
                if(boatPlaced){
                    for (var c = col; c < col + length; c++){
                        computerGrid[row][c] = "*";
                    }

                }
                }
            }
            //if vertical
            else{
                if(col+ length > computerGrid.length){
                    boatPlaced = false
                }
                else {
                    for (var r = row; r < row + length; r++){
                    if (computerGrid[r][col] == "*"){
                        boatPlaced = false;
                    }
                    else{ boatPlaced = true;}
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
function startGame() {
  if(isGameOver) return
  if(currentPlayer=== "user"){
    document.getElementbyId("whose-go").innerHTML = "Your Turn!";
  }
  if(currentPlayer==="computer"){
    document.getElementbyId("whose-go").innerHTML = "CPU Turn!";
  }
}
startButton.addEventListern("click", startGame)
function Reset() {
  location.reload();
}
// When the user clicks on btn, open the popup for instructions
function getHelp() {
  var popup = document.getElementById("rules");
  popup.classList.toggle("popup");
  }

  