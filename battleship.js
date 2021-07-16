var board = [];
var pboard = [];
var text = document.getElementById("info-text");


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
var pfleetSquares = [];
for(let a = 0; a < fleet.length; a++)
{
    let temp = [];
    let temp2 = [];
    for(let b = 0; b < fleet[a].length; b++)
    {
        temp.push(NaN);
        temp2.push(NaN);
    }
    fleetSquares.push(temp);
    pfleetSquares.push(temp2);
}

function initialize() {
    //make the computer board//
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
                if(board[r][c+i].isOccupied)
                {
                    open = false;
                    break;
                }
                if((r + 1) != 10)
                {
                    if(board[r+1][c+i].isOccupied)
                    {
                        open = false;
                        break;
                    }
                }
                if((r - 1) != -1)
                {
                    if(board[r-1][c+i].isOccupied)
                    {
                        open = false;
                        break;
                    }
                }
            }
            if(open)
            {
                for(let i = 0; i < boat.length; i++)
                {
                    fleetSquares[b][i] = board[r][c+i];
                    board[r][c+i].isOccupied = true;
                    // board[r][c+i].cell.style.setProperty("background-color", "black");
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
                if(board[r+i][c].isOccupied)
                {
                    open = false;
                    break;
                }
                if((c + 1) != 10)
                {
                    if(board[r+i][c+1].isOccupied)
                    {
                        open = false;
                        break;
                    }
                }
                if((c - 1) != -1)
                {
                    if(board[r+i][c-1].isOccupied)
                    {
                        open = false;
                        break;
                    }
                }
            }
            if(open)
            {
                for(let i = 0; i < boat.length; i++)
                {
                    fleetSquares[b][i] = board[r+i][c];
                    board[r+i][c].isOccupied = true;
                    // board[r+i][c].cell.style.setProperty("background-color", "black");
                }
                b++;
            }
        }
    }

    //player board


    //make the player board//
    var rowElements = document.getElementsByClassName("prow");
    for(let row of rowElements) {
        let rowArray = [];
        pboard.push(rowArray);
        let colElements = row.getElementsByClassName("col");
        for(let col of colElements) {
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
                if(pboard[r][c+i].isOccupied)
                {
                    open = false;
                    break;
                }
                if((r + 1) != 10)
                {
                    if(board[r+1][c+i].isOccupied)
                    {
                        open = false;
                        break;
                    }
                }
                if((r - 1) != -1)
                {
                    if(board[r-1][c+i].isOccupied)
                    {
                        open = false;
                        break;
                    }
                }
            }
            if(open)
            {
                for(let i = 0; i < boat.length; i++)
                {
                    pfleetSquares[b][i] = pboard[r][c+i];
                    pboard[r][c+i].isOccupied = true;
                    pboard[r][c+i].cell.style.setProperty("background-color", "gray");
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
                if(pboard[r+i][c].isOccupied)
                {
                    open = false;
                    break;
                }
                if((c + 1) != 10)
                {
                    if(board[r+i][c+1].isOccupied)
                    {
                        open = false;
                        break;
                    }
                }
                if((c - 1) != -1)
                {
                    if(board[r+i][c-1].isOccupied)
                    {
                        open = false;
                        break;
                    }
                }
            }
            if(open)
            {
                for(let i = 0; i < boat.length; i++)
                {
                    pfleetSquares[b][i] = pboard[r+i][c];
                    pboard[r+i][c].isOccupied = true;
                    pboard[r+i][c].cell.style.setProperty("background-color", "gray");
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

        if(fleetSquares.length == 0)
        {
            document.body.style.backgroundColor("gold");
            text.visibility = 'show';
            text.textContent = "YOU WIN";
            return;
        }

    } else {
        this.boatSegment.cell.style.setProperty("background-image", "url('Shooting-Images/missed.png')");
    }

    smartShot();

}



////                 PLAYING        AGAINST          CPU          ///////////////
var start = false;
document.addEventListener("keyup", specificKey, false);
    function specificKey(event)
    {
        if(event.key == 'p' && !start)
        {
            startGame();
            document.getElementById('random').style.visibility = 'hidden';
            document.getElementById('info-text').style.visibility = 'hidden';
            start = true;
        }
    }

function startGame()
{
    console.log("play");
    computerShoot(Math.floor(Math.random()* 10), Math.floor(Math.random()* 10));
}

var phitSquares = [];
var phitPos = [];
var shot = [];
function computerShoot(r, c)
{
    let tem = {r, c};
    shot.push(tem);
    if(pboard[r][c].firedUpon) {
        //don't do anything
        return;
    }
    pboard[r][c].firedUpon = true;
    //if this is a hit
    if(pboard[r][c].isOccupied) {
        //reduce the number of boat cells remaining
        pboard[r][c].cell.style.setProperty("background-image", "url('Shooting-Images/hit.png')");
        phitSquares.push(pboard[r][c]);
        let t = {r, c};
        phitPos.push(t);
        for(let i = 0; i < pfleetSquares.length; i++)
        {
            let sunk = true;
            for(let j = 0; j < pfleetSquares[i].length; j++)
            {
                if(phitSquares.indexOf(pfleetSquares[i][j]) == -1)
                {
                    sunk = false;
                    break;
                }
            }
            if(sunk)
            {
                console.log(i);
                for(let j = 0; j < pfleetSquares[i].length; j++)
                {
                    pfleetSquares[i][j].cell.style.setProperty("background-color", "maroon");
                }
                pfleetSquares.splice(i, 1);
                break;
            }
        }

        if(pfleetSquares.length == 0)
        {
            document.body.style.backgroundColor("red");
            text.textContent = "YOU LOSE";
        }

    } else {
        pboard[r][c].cell.style.setProperty("background-image", "url('Shooting-Images/missed.png')");
    }
}

function smartShot()
{
    console.log(phitSquares);
    for(let i = 0; i < phitSquares.length; i++)
    {
        for( let j = 0; j < pfleetSquares.length; j++)
        {
            if(pfleetSquares.indexOf(phitSquares) != -1)
            {
                let dir = Math.ceil(Math.random()*4);
                let row = 0;
                let col = 0;
                for(let k = 0; k < phitPos.length; p++)
                {
                    if(phitSquares[i] == pboard(phitPos[k][0], phitPos[k][1]))
                    {
                        row = phitPos[k][0];
                        col = phitPos[k][1];
                        break;
                    }
                }
                if(dir < 3)
                {
                    if(row + 1 == 10)
                    {
                        dir = 1;
                    }
                    if(row - 1 == -1)
                    {
                        dir = 2;
                    }
                }
                else
                {
                    if(row + 1 == 10)
                    {
                        dir = 3;
                    }
                    if(row - 1 == -1)
                    {
                        dir = 4;
                    }
                }

                if(dir == 1)
                {
                    computerShoot(row + 1, col);
                }
                else if(dir == 2)
                {
                    computerShoot(row - 1, col);
                }
                else if(dir == 3)
                {
                    computerShoot(row, col + 1);
                }
                else
                {
                    computerShoot(row, col - 1);
                }
                return;
            }
        }
    }
    while(true)
    {
        let arr = [];
        arr.push(Math.floor(Math.random() * 10));
        arr.push(Math.floor(Math.random() * 10));
        if(shot.indexOf(arr) == -1)
        {
            computerShoot(arr[0], arr[1]);
            return;
        }
    }
}
