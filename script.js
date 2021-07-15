
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
document.addEventListener('DOMContentLoaded', () => {
    const displayGrid = document.querySelector('.grid-display')
    const ships = document.querySelectorAll('.ship')
    const destroyer = document.querySelector('.destroyer-container')
    const submarine = document.querySelector('.submarine-container')
    const cruiser = document.querySelector('.cruiser-container')
    const battleship = document.querySelector('.battleship-container')
    const carrier = document.querySelector('.carrier-container')
    const rotateButton = document.querySelector('#rotate')
    const turnText = document.querySelector('#whose-go')
    const infoisplay = document.querySelector('#info')
    const currentPlayer = 'user'
    let isHorizontal = true
    let allShipsPlaced = false

function chosen(){
    if(document.querySelectorAll(".selected") != null){
      document.querySelectorAll(".selected").forEach(element => element.classList.remove("selected"));
    }
    this.classList.add("selected");
  }

    //Rotates Ships **NOT WORKING CURRENTLLY
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
        let shipLastId = lastShipIndex + parseInt(this.className)
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
            userSquares[parseInt(this.className) - selectedShipIndex + i].classList.add('taken', 'horizontal', directionClass, shipClass)
          }
        //As long as the index of the ship the user's dragging is not in the newNotAllowedVertical array! This will help the ships rebound back to the displayGrid.
  
        } else if (!isHorizontal && !newNotAllowedVertical.includes(shipLastId)) {
          for (let i=0; i < draggedShipLength; i++) {
            let directionClass
            if (i === 0) directionClass = 'start'
            if (i === draggedShipLength - 1) directionClass = 'end'
            userSquares[parseInt(this.className) - selectedShipIndex + width*i].classList.add('taken', 'vertical', directionClass, shipClass)
          }
        } else return
  
        displayGrid.removeChild(draggedShip)
        if(!displayGrid.querySelector('.ship')) allShipsPlaced = true
      }
      
      function dragEnd() {
        // console.log('dragend')
      }
      //start game
      function startGame() {
        if(isGameOver) return
        if(currentPlayer=== 'user'){
          turnText.innerHTML = 'Your Turn!'
          computerCols.forEach(col => col.addEventListener('click',function(e){
            userFire(col)
          }))
        }
        if(currentPlayer==='computer'){
          turnText.innerHTML = 'CPU Turn!';
          setTimer(computerGo, 750)
        }
      }
    
      startButton.addEventListerner('click',startGame)
    
    let destroyerHit = 0
    let submarineHit = 0
    let cruiserHit = 0
    let battleshipHit = 0
    let carrierHit = 0
    //user fire
    function userFire(col){
        if(!col.classList.contains('hit')){
            if(col.classList.contains('destroyer')) destroyerHit++
            if(col.classList.contains('submarine')) submarineHit++
            if(col.classList.contains('cruiser')) cruiserHit++
            if(col.classList.contains('battleship')) battleshipHit++
            if(col.classList.contains('carrier')) carrierHit++
        }
        if(col.classList.contains('taken')){
            col.classList.add('hit')
        }
        else{
            col.classList.add('miss')
        }
        currentPlayer= 'computer'
        startGame()
    }
    let cpuDestroyerHit = 0
    let cpuSubmarineHit = 0
    let cpuCruiserHit = 0
    let cpuBattleshipHit = 0
    let cpuCarrierHit = 0
      //Computer Randomly Fires
      function computerFire(){
        let random = Math.floor(Math.random() * col0.length)
        if(!col0[random].classList.contains('shot')){
            col0[random].classList.add('shot')
            if(col0[random].classList.contains('destroyer')) {
                col0[random].classList.add('hit')
                cpuDestroyerHit++
            }
            if(col0[random].classList.contains('submarine')) {
                col0[random].classList.add('hit')
                cpuSubmarineHit++
            }
            if(col0[random].classList.contains('cruiser')) {
                col0[random].classList.add('hit')
                cpuCruiserHit++
            }
            if(col0[random].classList.contains('battleship')) {
                col0[random].classList.add('hit')
                cpuBattleshipHit++
            }
            if(col0[random].classList.contains('carrier')) {
                col0[random].classList.add('hit')
                cpuCarrierHit++
            }    
        }
        else computerFire()
        currentPlayer = 'user'
        turnText.innerHTML = 'Your Turn!'
      }
      //checks if all ships are sunk
      function checkForWins(){
        if(destroyerHit === 2){
            infoDisplay.innerHTML = 'You sunk the computers destroyer'
            destroyerHit = 1
        }
        if(submarineHit === 3){
            infoDisplay.innerHTML = 'You sunk the computers submarine'
            submarineHit = 1
        }
        if(cruiserHit === 3){
            infoDisplay.innerHTML = 'You sunk the computers cruiser'
            cruiserHit = 1
        }
        if(battleshipHit === 4){
            infoDisplay.innerHTML = 'You sunk the computers battleship'
            battleshipHit = 1
        }
        if(carrierHit === 5){
            infoDisplay.innerHTML = 'You sunk the computer carrier!'
            carrierHit = 1
        }
        if(cpuDestroyerHit === 2){
            infoDisplay.innerHTML = 'The computer sunk your destroyer!'
            cpuDestroyerHit = 1
        }
        if(cpuSubmarineHit === 3){
            infoDisplay.innerHTML = 'The computer sunk your submarine!'
            cpuSubmarineHit = 1
        }
        if(cpuCruiserHit === 3){
            infoDisplay.innerHTML = 'The computer sunk your cruiser!'
            cpuCruiserHit = 1
        }
        if(cpuBattleshipHit === 4){
            infoDisplay.innerHTML = 'The computer sunk your battleship!'
            cpuBattleshipHit = 1
        }
        if(cpuCarrierHit === 5){
            infoDisplay.innerHTML = 'The computer sunk your carrier!'
            cpuCarrierHit = 1
        }
    }
      //Clears the board
      function reset() {
        location.reload();
      }
      
      // When the user clicks on btn, open the popup for instructions
      function getHelp() {
        var popup = document.getElementById("rules");
        popup.classList.toggle("popup");
        }
    })

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