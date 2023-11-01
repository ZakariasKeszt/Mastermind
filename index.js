var row = 1;
var column = 1;
var guesscounter = 0;
const color = ["piros", "zöld", "kék", "narancssárga", "lila", "sárga"];
const colorcoded = ["red", "green", "blue", "orange", "purple", "yellow"];
var guess = ["?", "?", "?", "?"];
var solution = ["?", "?", "?", "?"];

newgame(color);

function newgame(color){
    
    for(let i = 1; i <= 12; i+=1){
        for(let o = 1; o <= 4; o+=1){
            document.getElementById(`box${i}.${o}`).style.backgroundColor = "transparent";
        }
        for(let o = 1; o <= 4; o+=1){
            document.getElementById(`return${i}.${o}`).style.backgroundColor = "transparent";
        }

    }
    for (let i = 0; i < solution.length; i+=1){
        let x = Math.floor(Math.random()*6);
        solution[i] = color[x];
    }
    row = 1;
    column = 1;
    guesscounter = 0;
    guess = ["?", "?", "?", "?"];
    console.log(solution);
    return [row, column, guess, guesscounter, solution];
}


function game(color, colorcoded){
    let input = document.getElementById("clienttext").value;
    document.getElementById('clienttext').value = "";
    if(color.includes(input)){
        guess[guesscounter] = input;
        for(let a = 0; a <= 5; a += 1){
            if(input == color[a]){
                input = colorcoded[a];
                break;
            }
            else{
                continue;
            }
        }
    }
    else{
        alert("nem használható szín");
        return;
    }
    console.log(row, column, input, guess[guesscounter]);
    document.getElementById(`box${row}.${column}`).style.backgroundColor = input;
    guesscounter += 1;
    column += 1;
    if(column==5){
        row += 1;
        column = 1;
    }
    check();
    return [row, column, guess, guesscounter];
}

function check(){
    var point = 0;
    if(guesscounter==4){
        for(let i = 0; i<=3; i+=1){
            if(solution[i] == guess[i]){
                document.getElementById(`return${row-1}.${i+1}`).style.backgroundColor = "black";
                point += 1;
            }
            else if(solution.includes(guess[i])){
                document.getElementById(`return${row-1}.${i+1}`).style.backgroundColor = "white";
            }
            else{
                continue;
            }
        }
        guesscounter = 0;
        if(point == 4){
            alert("Nyertél! Automatikusan indítunk egy új játékot!");
            newgame(color);
        }
        else if(row == 13){
            gameover();
        }
    }
}

function gameover(){
    alert("Nem sikerült megfejteni a kódot! Indítunk egy új játékot!;)")
    newgame(color);
}

//Code by: Keszhelyi Zakariás
//https://github.com/ZakariasKeszt/Mastermind