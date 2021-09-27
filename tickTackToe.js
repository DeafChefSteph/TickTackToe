
const gameBoard = (() => {
    const tickTackToeField = document.querySelector('#tickTackToeField');
    let numberOfMoves = 0;
    let stateOfEachTile = [];

    const createGameboard = () => {
        let gameBoardDiv = []; 
        for (let i = 0; i < 9; i++)
        {
            gameBoardDiv[i] = document.createElement('div');
            gameBoardDiv[i].classList.add('gameBoardDiv');
            gameBoardDiv[i].setAttribute('id','gameBoardDiv'+i);
            tickTackToeField.appendChild(gameBoardDiv[i]);
            

           /* gameBoardDiv[i].addEventListener('click', (function() {
                console.log(this.id);
            }).bind(gameBoardDiv)); */
        }
        return gameBoardDiv;
    }; 

    const activateTiles = (allDivs) => {
        for(let i = 0;i < 9;i++)
        {
            allDivs[i].addEventListener('click', function() {

                let index = parseInt(this.id.toString().replace(/\D/g,''));
                
                if(_isItPlayerOnesMove(numberOfMoves)) {
                    if(_drawSymbol(allDivs[index],"X") == true) {
                        stateOfEachTile[index] = "X";
                        numberOfMoves++; 
                    }
                }
                else {
                    if(_drawSymbol(allDivs[index],"O") == true) {
                        stateOfEachTile[index] = "O";
                        numberOfMoves++; 
                    }
                }
                if(_checkIfWon() == 1) {alert("X won"); location.reload();}
                else if (_checkIfWon() == -1) {alert("O won"); location.reload();}
            });
        }
    }

    const _drawSymbol = (div ,stringSymbol) =>{
        let index = parseInt(div.id.toString().replace(/\D/g,''));
        
        let element = document.getElementById('paraInDiv'+index);

        if(typeof(element) != 'undefined' && element != null)
        {
            alert ('Tile already in use'); 
            return false;
        }
        else{
            const para = document.createElement('p');
            para.classList.add('paraInDiv');
            para.setAttribute('id','paraInDiv'+index);
            para.textContent = stringSymbol;
            div.appendChild(para);
            return true;
        }
    }

    const _isItPlayerOnesMove = (moveNumber) =>{
        if(moveNumber%2) return false; 
        else return true;
    }

    const _checkIfWon = () =>{
        if( stateOfEachTile[0] == "X" && stateOfEachTile[1] == "X" && stateOfEachTile[2] == "X" ||
            stateOfEachTile[3] == "X" && stateOfEachTile[4] == "X" && stateOfEachTile[5] == "X" ||
            stateOfEachTile[6] == "X" && stateOfEachTile[7] == "X" && stateOfEachTile[8] == "X" ||
            stateOfEachTile[0] == "X" && stateOfEachTile[3] == "X" && stateOfEachTile[6] == "X" ||
            stateOfEachTile[1] == "X" && stateOfEachTile[4] == "X" && stateOfEachTile[7] == "X" ||
            stateOfEachTile[2] == "X" && stateOfEachTile[5] == "X" && stateOfEachTile[8] == "X" ||
            stateOfEachTile[0] == "X" && stateOfEachTile[4] == "X" && stateOfEachTile[8] == "X" ||
            stateOfEachTile[2] == "X" && stateOfEachTile[4] == "X" && stateOfEachTile[6] == "X" )
            
            {
                return 1;
            }
        else if(stateOfEachTile[0] == "O" && stateOfEachTile[1] == "O" && stateOfEachTile[2] == "O" ||
                stateOfEachTile[3] == "O" && stateOfEachTile[4] == "O" && stateOfEachTile[5] == "O" ||
                stateOfEachTile[6] == "O" && stateOfEachTile[7] == "O" && stateOfEachTile[8] == "O" ||
                stateOfEachTile[0] == "O" && stateOfEachTile[3] == "O" && stateOfEachTile[6] == "O" ||
                stateOfEachTile[1] == "O" && stateOfEachTile[4] == "O" && stateOfEachTile[7] == "O" ||
                stateOfEachTile[2] == "O" && stateOfEachTile[5] == "O" && stateOfEachTile[8] == "O" ||
                stateOfEachTile[0] == "O" && stateOfEachTile[4] == "O" && stateOfEachTile[8] == "O" ||
                stateOfEachTile[2] == "O" && stateOfEachTile[4] == "O" && stateOfEachTile[6] == "O"  )
                {
                    return -1;
                }
        else return 0; 
    }



    return {createGameboard, activateTiles}; 
})();

const Player = (playerName, playStone) => {

    
    let stateOfEachTile = []; 

    const getPlayerName = () => playerName;
    const getPlayStone = () => playStone; 

    

    return {getPlayerName ,getPlayStone}; 
}; 

let player1 = Player ('Player 1', false);
let player2 = Player ('Player 2', true); 

const arrOfTiles = gameBoard.createGameboard();

gameBoard.activateTiles(arrOfTiles);
