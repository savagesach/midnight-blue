var board = [];
var fleet = [
    {
        name: "Aircraft Carrier",
        length: 5,
        width: 2,
        isHorizontal: Math.floor(Math.random() * 2) == 1,
        topLeftCornerX: null,
        topLeftCornerY: null
    },
    {
        name: "Battleship",
        length: 5,
        width: 1,
        isHorizontal: Math.floor(Math.random() * 2) == 1,
        topLeftCornerX: null,
        topLeftCornerY: null
    },
    {
        name: "Destroyer",
        length: 4,
        width: 1,
        isHorizontal: Math.floor(Math.random() * 2) == 1,
        topLeftCornerX: null,
        topLeftCornerY: null
    },
    {
        name: "Cruiser",
        length: 3,
        width: 1,
        isHorizontal: Math.floor(Math.random() * 2) == 1,
        topLeftCornerX: null,
        topLeftCornerY: null
    },
    {
        name: "PT Boat",
        length: 2,
        width: 1,
        isHorizontal: Math.floor(Math.random() * 2) == 1,
        topLeftCornerX: null,
        topLeftCornerY: null
    }
]
var numberOfMisslesRemaining = 90;
var boatCellsRemaining = 0;
function initialize() {
    //make the board
    var rowElements = document.getElementsByClassName("crow");
    for(let row of rowElements) {
        let rowArray = [];
        board.push(rowArray);
        let colElements = row.getElementsByClassName("col");
        for(let col of colElements) {
            col.addEventListener("click", missleFire, false);
            var boatSegment = {cell: col, isOccupied: false, firedUpon: false}
            rowArray.push(boatSegment);
            col.boatSegment = boatSegment;
        }
    }
    //set the ships on the board
    for(let boat of fleet) {
        let rightBuffer = boat.width;
        let bottomBuffer = boat.length;
        if(boat.isHorizontal) {
            rightBuffer = boat.length;
            bottomBuffer = boat.width;
        }
        let boatIsNotProperlyPlaced = true;
        while(boatIsNotProperlyPlaced) {
            //propose an x-coordinate for the boat
            boat.topLeftCornerX = Math.floor(Math.random() * (board.length - rightBuffer + 1));
            boat.topLeftCornerY = Math.floor(Math.random() * (board.length - bottomBuffer + 1));
            let x = boat.topLeftCornerX;
            let y = boat.topLeftCornerY;
            let boatIsProperlyPlaced = true;
            //determine if any of the locations for this proposed boat location are already occupied
            while(x < boat.topLeftCornerX + rightBuffer && boatIsProperlyPlaced) {
                while(y < boat.topLeftCornerY + bottomBuffer && boatIsProperlyPlaced) {
                    boatIsProperlyPlaced = !board[y][x].isOccupied;
                    y++;
                }
                x++;
            }
            //if we found an intersection, try again
            boatIsNotProperlyPlaced = !boatIsProperlyPlaced;
        }
        for(let x = boat.topLeftCornerX; x < boat.topLeftCornerX + rightBuffer; x++) {
            for (let y = boat.topLeftCornerY; y < boat.topLeftCornerY + bottomBuffer; y++) {
                board[y][x].isOccupied = true;
                boatCellsRemaining++
                board[y][x].cell.style.setProperty("background-color", "black");
            }
        }
    }
}
function missleFire() {
    //if this cell was already fired upon
    if(this.boatSegment.firedUpon) {
        //don't do anything
        return;
    }
    numberOfMisslesRemaining--
    this.boatSegment.firedUpon = true;
    //if this is a hit
    if(this.boatSegment.isOccupied) {
        //reduce the number of boat cells remaining
        boatCellsRemaining--
        this.boatSegment.cell.style.setProperty("background-color", "red");
    } else {
        this.boatSegment.cell.style.setProperty("background-color", "white");
    }
    //detect if the user has won or lost
    if(boatCellsRemaining === 0) {
        alert("You won");
    } else if(numberOfMisslesRemaining === 0) {
        alert("You lost");
    }
}
