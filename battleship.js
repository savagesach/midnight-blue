var board = [];
var fleet = [
    {
        name: "Aircraft Carrier",
        length: 5,
    },
    {
        name: "Battleship",
        length: 5,
    },
    {
        name: "Destroyer",
        length: 4,
    },
    {
        name: "Cruiser",
        length: 3,
    },
    {
        name: "PT Boat",
        length: 2,
    }
]
var fleetSquares = []
for(let a = 0; a < fleet.length; a++)
{
    let temp = [];
    for(let b = 0; b < fleet[a].length; b++)
    {
        temp.push(NaN);
    }
    fleetSquares.push(temp);
}
var numberOfMisslesRemaining = 90;

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

    for(let b = 0; b < fleet.length;)
    {
        let boat = fleet[b];
        if(Math.random() < .5)
        {
            let r = Math.floor(Math.random()*10);
            let c = Math.floor(Math.random()*(10-boat.length));
            let open = true;
            for(let i = 0; i < boat.length; i++)
            {
                // if(r + 1 != 10)
                // {
                //     if(board[r+1][c+i].isOccupied)
                //     {
                //         open = false;
                //         break;
                //     }
                // }
                // if(r - 1 != -1)
                // {
                //     if(board[r-1][c+i].isOccupied)
                //     {
                //         open = false;
                //         break;
                //     }
                // }
                if(board[r][c+i].isOccupied)
                {
                    open = false;
                    break;
                }
            }
            if(open)
            {
                console.log("horizontal boat at " + c + ", " + r + ". Length: " + boat.length);
                for(let i = 0; i < boat.length; i++)
                {
                    fleetSquares[b][i] = board[r][c+i];
                    board[r][c+i].isOccupied = true;
                    if((r + 1) != 10)
                    {
                        board[r+1][c+i].isOccupied = true;
                    }
                    if((r - 1) != -1)
                    {
                        board[r-1][c+i].isOccupied = true;
                    }
                    board[r][c+i].cell.style.setProperty("background-color", "black");
                }
                b++;
            }
        }
        else
        {
            let r = Math.floor(Math.random()*(10-boat.length));
            let c = Math.floor(Math.random()*(10));
            let open = true;
            for(let i = 0; i < boat.length; i++)
            {
                // if(c + 1 != 10)
                // {
                //     if(board[r+i][c+1].isOccupied)
                //     {
                //         open = false;
                //         break;
                //     }
                // }
                // if(c - 1 != -1)
                // {
                //     if(board[r+i][c-1].isOccupied)
                //     {
                //         open = false;
                //         break;
                //     }
                // }
                if(board[r+i][c].isOccupied)
                {
                    open = false;
                    break;
                }
            }
            if(open)
            {
                console.log("vertical boat at " + c + ", " + r + ". Length: " + boat.length);
                for(let i = 0; i < boat.length; i++)
                {
                    fleetSquares[b][i] = board[r+i][c];
                    board[r+i][c].isOccupied = true;
                    if((c + 1) != 10)
                    {
                        board[r+i][c+1].isOccupied = true;
                    }
                    if((c - 1) != -1)
                    {
                        board[r+i][c-1].isOccupied = true;
                    }
                    board[r+i][c].cell.style.setProperty("background-color", "black");
                }
                b++;
            }
        }
    }
}
var hitSquares = [];
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
        this.boatSegment.cell.style.setProperty("background-image", "url('Shooting-Images/hit.png')");
        hitSquares.push(this.boatSegment);

        for(let i = 0; i < fleetSquares.length; i++)
        {
            let sunk = true;
            for(let j = 0; j < fleetSquares[i].length; j++)
            {
                if(hitSquares.indexOf(fleetSquares[i][j]) == -1)
                {
                    sunk = false;
                    break;
                }
            }
            if(sunk)
            {
                console.log(i);
                for(let j = 0; j < fleetSquares[i].length; j++)
                {
                    fleetSquares[i][j].cell.style.setProperty("background-color", "maroon");
                }
                fleetSquares.splice(i, 1);
                break;
            }
        }

    } else {
        this.boatSegment.cell.style.setProperty("background-image", "url('Shooting-Images/missed.png')");
    }
    //detect if the user has won or lost
    if(numberOfMisslesRemaining === 0) {
        alert("You lost");
    }
}
