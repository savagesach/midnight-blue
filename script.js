var userGrid = [8][8];

for(var i = 0; i < 8; i++)
    for(var j = 0; j < 8; j++)
    {
        var d = document.createElement("div");
        d.classList.add('MyClass');
        userGrid[i][j] = d;
    }