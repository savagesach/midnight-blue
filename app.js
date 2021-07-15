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
    var allShipsPlaced = false
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

    const computerArray = [[document.getElementById('100'),document.getElementById('101'),document.getElementById('102'),document.getElementById('103'),document.getElementById('104'),document.getElementById('105'),document.getElementById('106'),document.getElementById('107'),document.getElementById('108'),document.getElementById('109')] , [document.getElementById('110'),document.getElementById('111'),document.getElementById('112'),document.getElementById('113'),document.getElementById('114'),document.getElementById('115'),document.getElementById('116'),document.getElementById('117'),document.getElementById('118'),document.getElementById('119')] , [document.getElementById('120'),document.getElementById('121'),document.getElementById('122'),document.getElementById('123'),document.getElementById('124'),document.getElementById('125'),document.getElementById('126'),document.getElementById('127'),document.getElementById('128'),document.getElementById('129')] , [document.getElementById('130'),document.getElementById('131'),document.getElementById('132'),document.getElementById('133'),document.getElementById('134'),document.getElementById('135'),document.getElementById('136'),document.getElementById('137'),document.getElementById('138'),document.getElementById('139')] , [document.getElementById('140'),document.getElementById('141'),document.getElementById('142'),document.getElementById('143'),document.getElementById('144'),document.getElementById('145'),document.getElementById('146'),document.getElementById('147'),document.getElementById('148'),document.getElementById('149')] , [document.getElementById('100'),document.getElementById('101'),document.getElementById('152'),document.getElementById('153'),document.getElementById('154'),document.getElementById('155'),document.getElementById('156'),document.getElementById('157'),document.getElementById('158'),document.getElementById('159')] , [document.getElementById('160'),document.getElementById('161'),document.getElementById('162'),document.getElementById('163'),document.getElementById('164'),document.getElementById('165'),document.getElementById('166'),document.getElementById('167'),document.getElementById('168'),document.getElementById('169')] , [document.getElementById('170'),document.getElementById('171'),document.getElementById('172'),document.getElementById('173'),document.getElementById('174'),document.getElementById('175'),document.getElementById('176'),document.getElementById('177'),document.getElementById('178'),document.getElementById('179')] , [document.getElementById('180'),document.getElementById('181'),document.getElementById('182'),document.getElementById('183'),document.getElementById('184'),document.getElementById('185'),document.getElementById('186'),document.getElementById('187'),document.getElementById('188'),document.getElementById('189')] , [document.getElementById('190'),document.getElementById('191'),document.getElementById('192'),document.getElementById('193'),document.getElementById('194'),document.getElementById('195'),document.getElementById('196'),document.getElementById('197'),document.getElementById('198'),document.getElementById('199')]];
    

    computerArray = [];
    let count = 100;
          square.className += "oneByOne";
        
      

    createBoard(userGrid, userSquares, 0)
    createBoard(computerGrid, computerSquares, 100)
     //Create Board

     function createBoard(grid, squares, start) {
        for (let i = start; i < width*width + start; i++) {
          const square = document.createElement('div')
          square.dataset.id = i
          grid.appendChild(square)
          squares.push(square)
          square.className += "oneByOne";
          square.addEventListener('click', chosen);
        }
      }

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
    createBoard(userGrid, userSquares, 0)
    createBoard(computerGrid, computerSquares, 100)
     //Create Board
     function createBoard(grid, squares, start) {
        for (let i = start; i < width*width + start; i++) {
          const square = document.createElement('div')
          square.dataset.id = i
          grid.appendChild(square)
          squares.push(square)
          square.className += "oneByOne";
        }
      }

    //When user clicks
// for(var d = 100; d < 200; d++)
// {
//   if(document.getElementById(d))
//   document.getElementById(d + '').addEventListener("mouseover", function(){
//     document.getElementById(d + '').style.backgroundColor = "white";
//   }, false);

//   document.getElementById(d + '').addEventListener("mouseout", function(){
//     document.getElementById(d + '').style.backgroundColor = "blue";
//   }, false);

//   document.getElementById(d + '').addEventListener("click", function(){
//     document.getElementById(d + '').style.backgroundColor = "red";
//   }, false);
// }

    createBoard(userGrid, userSquares, 0)
    createBoard(computerGrid, computerSquares, 100)
     //Create Board
     function createBoard(grid, squares, start) {
        for (let i = start; i < width*width + start; i++) {
          const square = document.createElement('div')
          square.dataset.id = i
          grid.appendChild(square)
          squares.push(square)
          square.className += "oneByOne";
        }
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

  })

var carrier = {name: "carrier", length: 5};
var battleship = {name: "Battleship", length: 4};
var cruiser = {name: "Cruiser", length: 3};
var submarine = {name: "Submarine", length: 3};
var destroyer = {name: "Destroyer", length: 2};

var allShips = [carrier, battleship, cruiser, submarine, destroyer];

//computer randomly places ships
var printArr = []
for(var i = 0; i < 10; i++)
{
  var tmp = [];
  for(var j = 0; j < 10; j++)
  {
    tmp[j] = 'o';
  }
  printArr.push(tmp);
}
console.log(printArr);

function computerPlace()
{
  while(allShips.length > 0)
  {
    //horizontal
    if(Math.floor(Math.random() * 2) == 1)
    {
      const row = Math.floor(Math.random()* (10-allShips[0].length));
      const col = Math.floor(Math.random()*10);
      var open = true;
      //checks to see if the space is open
      for(var i = 0; i < allShips[0].length; i++)
      {
        if(printArr[(row + i)][col] != 'o')
        {
          open = false;
          break;
        }
      }
      //places the ships if it's open
      if(open)
      {
        for(var i = 0; i < allShips[0].length; i++)
        {
          printArr[(row + i)][col] = 'x';
        }
        allShips.shift();
      }
    }
    else
    {
      var row = Math.floor(Math.random()*10);
      var col = Math.floor(Math.random()* (10-allShips[0].length));
      var open = true;
      //checks to see if the space is open
      for(var i = 0; i < allShips[0].length; i++)
      {
        if(printArr[row][col+i] != 'o')
        {
          open = false;
          break;
        }
      }
      //places the ships if it's open
      if(open)
      {
        for(var i = 0; i < allShips[0].length; i++)
        {
          printArr[row][col+i] = 'x';
        }
        allShips.shift();
      }
    }
  }
  colorBoard()
}
function colorBoard()
{//Computer Array
  const computerArray = [[document.getElementById('100'),document.getElementById('101'),document.getElementById('102'),document.getElementById('103'),document.getElementById('104'),document.getElementById('105'),document.getElementById('106'),document.getElementById('107'),document.getElementById('108'),document.getElementById('109')] , [document.getElementById('110'),document.getElementById('111'),document.getElementById('112'),document.getElementById('113'),document.getElementById('114'),document.getElementById('115'),document.getElementById('116'),document.getElementById('117'),document.getElementById('118'),document.getElementById('119')] , [document.getElementById('120'),document.getElementById('121'),document.getElementById('122'),document.getElementById('123'),document.getElementById('124'),document.getElementById('125'),document.getElementById('126'),document.getElementById('127'),document.getElementById('128'),document.getElementById('129')] , [document.getElementById('130'),document.getElementById('131'),document.getElementById('132'),document.getElementById('133'),document.getElementById('134'),document.getElementById('135'),document.getElementById('136'),document.getElementById('137'),document.getElementById('138'),document.getElementById('139')] , [document.getElementById('140'),document.getElementById('141'),document.getElementById('142'),document.getElementById('143'),document.getElementById('144'),document.getElementById('145'),document.getElementById('146'),document.getElementById('147'),document.getElementById('148'),document.getElementById('149')] , [document.getElementById('100'),document.getElementById('101'),document.getElementById('152'),document.getElementById('153'),document.getElementById('154'),document.getElementById('155'),document.getElementById('156'),document.getElementById('157'),document.getElementById('158'),document.getElementById('159')] , [document.getElementById('160'),document.getElementById('161'),document.getElementById('162'),document.getElementById('163'),document.getElementById('164'),document.getElementById('165'),document.getElementById('166'),document.getElementById('167'),document.getElementById('168'),document.getElementById('169')] , [document.getElementById('170'),document.getElementById('171'),document.getElementById('172'),document.getElementById('173'),document.getElementById('174'),document.getElementById('175'),document.getElementById('176'),document.getElementById('177'),document.getElementById('178'),document.getElementById('179')] , [document.getElementById('180'),document.getElementById('181'),document.getElementById('182'),document.getElementById('183'),document.getElementById('184'),document.getElementById('185'),document.getElementById('186'),document.getElementById('187'),document.getElementById('188'),document.getElementById('189')] , [document.getElementById('190'),document.getElementById('191'),document.getElementById('192'),document.getElementById('193'),document.getElementById('194'),document.getElementById('195'),document.getElementById('196'),document.getElementById('197'),document.getElementById('198'),document.getElementById('199')]];
  for(var i = 0; i < 10; i++)
  {
    for(var j = 0; j <10; j++)
    {
      if(printArr[i][j] == 'x')
      {
        computerArray[i][j].style.backgroundColor = "black";
      }
    }
  }
}
computerPlace();

console.log(printArr);
//what should be the grid that this is editing?


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
//computer randomly places ships
randomPlace();
//what should be the grid that this is editing?
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
                if(col + length > 10){
                    boatPlaced = false
                }
                else {
                    for (var c = col; c < col + length; c++){
                    if (computerArray[row][c] == "*"){
                        boatPlaced = false;
                    }
                    else{ boatPlaced = true;}
                }
                if(boatPlaced){
                    for (var c = col; c < col + length; c++){
                        computerArray[row][c] = "*";
                        console.log([row][c]);
                    }
                }
                }
            }
            //if vertical
            else{
                if(row + length >= 10){
                    boatPlaced = false
                }
                else {
                    for (var r = row; r < row + length; r++){
                    if (computerArray[r][col] == "*"){
                        boatPlaced = false;
                    }
                    else{ boatPlaced = true;}
                    }
                }
                if(boatPlaced){
                    for (var r = row; r < row + length; r++){
                        computerArray[r][col] = "*";
                    }
                }
            }
        }while(boatPlaced == false)
    }
}
randomPlace(allShips[0])
randomPlace(allShips[1])
randomPlace(allShips[2])
randomPlace(allShips[3])
randomPlace(allShips[4])

document.getElementById("start").addEventListener("click", randomPlace)
document.getElementById("start").addEventListener("click", startGame)

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
  if (allShipsPlaced){
    document.getElementById("whose-go").innerHTML = "Choose your target";
    document.getElementById("setup-buttons").innerHTML = " ";
  }
  else{
    document.getElementById("whose-go").innerHTML = "Place your ships before clicking start!";
  }
}

function chosen(){
  if(document.querySelectorAll(".selected") != null){
    document.querySelectorAll(".selected").forEach(element => element.classList.remove("selected"));
  }
  this.classList.add("selected");
}

function startGame() {
  if(isGameOver) return
  if(currentPlayer=== "user"){
      document.getElementById("whose-go").innerHTML = "Your Turn!";
      computerSquares.forEach(square => square.addEventListener('click',function(e){
        fire(square)
      }))
    }
    if(currentPlayer==="computer"){
      whoseTurn.innerHTML = "CPU Turn!";
      computerFire()
    }
  }
startButton.addEventListern("click", startGame)
function Reset() {
  location.reload();
}
//   else{
//     square.ClassList.add("miss")
//   }
// currentPlayer = "computer"
// startGame()
// }

function computerFire(){
let randomFire = Math.floor(Math.random()*userSquares.length)
if(userSquares[randomFire].classList.contains('taken')){
  userSquares[randomFire].classList.add('hit')
}
else{
  userSquares[randomFire].classList.add('miss')
}
currentPlayer = "user"
document.getElementById("whose-go").innerHTML = "Your Turn"
}
function endGame(){
  if(!userSquares.classList.contains('taken')){
    document.getElementById("whose-go").innerHTML = "CPU has won the game!"
    gameOver()
  }
  if(!computerSqaures.classList.contains('taken')){
    document.getElementById("whose-go").innerHTML = "You have won the game!"
    gameOver()
  }
}
function gameOver(){
  isGameOver = true
  startButton.innerHTML = "Restart Game"
}
