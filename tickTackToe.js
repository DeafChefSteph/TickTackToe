"use strict";

const welcomeField = (() =>{

    const activateWelcomeField = () =>{
        const submitBtn = document.querySelector('#submitButton');
        const playerOneInput = document.querySelector('#player1');
        const playerTwoInput = document.querySelector('#player2');

        const welcomeFieldDiv = document.querySelector('#welcomeField');
        //const tickTackToeField = document.querySelector('#tickTackToeField');
        const mainField = document.querySelector('#main'); 
        
        
        submitBtn.addEventListener('click', function (){

            
            
           playerOne =  Player (playerOneInput.value, "X",0,0);
           playerTwo = Player (playerTwoInput.value, "O",0,0);

            

            welcomeFieldDiv.style.display ='none';
            mainField.style.display ='flex';

            sidebarOne.fillSideBar();
            sidebarTwo.fillSideBar();

        
        });
    }


    return {activateWelcomeField};
        
})();


const gameBoard = (() => {
    const tickTackToeField = document.querySelector('#tickTackToeField');
    let numberOfMoves = 2;
    let p1Started = true;
    let stateOfEachTile = [];

    const createGameboard = () => {
        let gameBoardDiv = []; 
        for (let i = 0; i < 9; i++)
        {
            gameBoardDiv[i] = document.createElement('div');
            gameBoardDiv[i].classList.add('gameBoardDiv');
            gameBoardDiv[i].setAttribute('id','gameBoardDiv'+i);
            tickTackToeField.appendChild(gameBoardDiv[i]);
        }
        return gameBoardDiv;
    }; 

    const activateTiles = (allDivs) => {
        for(let i = 0;i < 9;i++)
        {
            allDivs[i].addEventListener('click', function() {

                
                let index = parseInt(this.id.toString().replace(/\D/g,''));
                
                if(_isItPlayerOnesMove(numberOfMoves)) {
                    if(_drawSymbol(allDivs[index],playerOne.getPlayStone()) == true) {
                        stateOfEachTile[index] = playerOne.getPlayStone();
                        numberOfMoves++; 
                    }
                }
                else {
                    if(_drawSymbol(allDivs[index],playerTwo.getPlayStone()) == true) {
                        stateOfEachTile[index] = playerTwo.getPlayStone();
                        numberOfMoves++; 
                    }
                }
                if(_checkIfWon() == 1) { 
                    setTimeout(function(){
                        _showResultMessage(1); 
                        _logStates(1);
                    },1000);
                 }
                else if (_checkIfWon() == -1) {
                    setTimeout(function(){
                        _showResultMessage(-1); 
                        _logStates(-1); 
                    },1000) 
                
                }
                else if(_checkIfWon() == 2)
                {
                    setTimeout(function(){
                        _showResultMessage(0);
                    },1000);
                     
                }
                
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
        let cnt = 0;

        for(let i =0; i < 9;i++) 
            if(stateOfEachTile[i] == 'X' || stateOfEachTile[i] == 'O') cnt ++; 
        
        if( stateOfEachTile[0] == playerOne.getPlayStone()&& stateOfEachTile[1] == playerOne.getPlayStone() && stateOfEachTile[2] == playerOne.getPlayStone() ||
            stateOfEachTile[3] == playerOne.getPlayStone() && stateOfEachTile[4] == playerOne.getPlayStone() && stateOfEachTile[5] == playerOne.getPlayStone() ||
            stateOfEachTile[6] == playerOne.getPlayStone() && stateOfEachTile[7] == playerOne.getPlayStone() && stateOfEachTile[8] == playerOne.getPlayStone() ||
            stateOfEachTile[0] == playerOne.getPlayStone() && stateOfEachTile[3] == playerOne.getPlayStone() && stateOfEachTile[6] == playerOne.getPlayStone() ||
            stateOfEachTile[1] == playerOne.getPlayStone() && stateOfEachTile[4] == playerOne.getPlayStone() && stateOfEachTile[7] == playerOne.getPlayStone() ||
            stateOfEachTile[2] == playerOne.getPlayStone() && stateOfEachTile[5] == playerOne.getPlayStone() && stateOfEachTile[8] == playerOne.getPlayStone() ||
            stateOfEachTile[0] == playerOne.getPlayStone() && stateOfEachTile[4] == playerOne.getPlayStone() && stateOfEachTile[8] == playerOne.getPlayStone() ||
            stateOfEachTile[2] == playerOne.getPlayStone() && stateOfEachTile[4] == playerOne.getPlayStone() && stateOfEachTile[6] == playerOne.getPlayStone() )
            
            {
                return 1;
            }
        else if(stateOfEachTile[0] == playerTwo.getPlayStone() && stateOfEachTile[1] == playerTwo.getPlayStone() && stateOfEachTile[2] == playerTwo.getPlayStone() ||
                stateOfEachTile[3] == playerTwo.getPlayStone() && stateOfEachTile[4] == playerTwo.getPlayStone() && stateOfEachTile[5] == playerTwo.getPlayStone() ||
                stateOfEachTile[6] == playerTwo.getPlayStone() && stateOfEachTile[7] == playerTwo.getPlayStone() && stateOfEachTile[8] == playerTwo.getPlayStone() ||
                stateOfEachTile[0] == playerTwo.getPlayStone() && stateOfEachTile[3] == playerTwo.getPlayStone() && stateOfEachTile[6] == playerTwo.getPlayStone() ||
                stateOfEachTile[1] == playerTwo.getPlayStone() && stateOfEachTile[4] == playerTwo.getPlayStone() && stateOfEachTile[7] == playerTwo.getPlayStone() ||
                stateOfEachTile[2] == playerTwo.getPlayStone() && stateOfEachTile[5] == playerTwo.getPlayStone() && stateOfEachTile[8] == playerTwo.getPlayStone() ||
                stateOfEachTile[0] == playerTwo.getPlayStone() && stateOfEachTile[4] == playerTwo.getPlayStone() && stateOfEachTile[8] == playerTwo.getPlayStone() ||
                stateOfEachTile[2] == playerTwo.getPlayStone() && stateOfEachTile[4] == playerTwo.getPlayStone() && stateOfEachTile[6] == playerTwo.getPlayStone()  )
                {
                    return -1;
                }
        
       else if(cnt > 8) return 2;
        else return 0; 
    }

    const _showResultMessage = (state) => {
        const winMessageDiv = document.querySelector('#winMessage');
        const winMessagePara = document.querySelector('#winMessagePara');
        const mainDiv = document.querySelector('#main'); 

        const rematchButton = document.querySelector('#rematchButton');

        winMessageDiv.style.display ='block';
        mainDiv.style.display ='none';  

       let  playerOneName = playerOne.getPlayerName();
        let playerTwoName = playerTwo.getPlayerName();

        if(state == 1) winMessagePara.textContent = playerOneName + ' won';
        else if(state == 0) winMessagePara.textContent = playerOneName + " draws " + playerTwoName;
        else if (state == -1) winMessagePara.textContent = playerTwoName + ' won';

        rematchButton.addEventListener('click', function(){
            mainDiv.style.display ='flex';
            winMessageDiv.style.display = 'none';
            sidebarOne.getElement(); 
            sidebarTwo.getElement();
            sidebarOne.fillSideBar();
            sidebarTwo.fillSideBar();  
            _clearField();
            stateOfEachTile = [];

            if(p1Started == true) 
            {
                numberOfMoves = 1;
                p1Started = false;
            }
            else{
                numberOfMoves = 2; 
                p1Started = true;
            }

            
            
            

        }); 
    
    }

    const _logStates = (result) => {
  
        if(result == 1) {   
        
            playerOne.addPlayerWin(); 
            playerTwo.addPlayerLoses(); 
        }
        else if (result == -1) {

            playerOne.addPlayerLoses();
            playerTwo.addPlayerWin();     
        }

    } 

    const _clearField = () => {
        const allGameBoardBivs = document.querySelectorAll('.gameBoardDiv');
     allGameBoardBivs.forEach(key => {
        key.textContent = ' '; 
     });
    }

    return {createGameboard, activateTiles}; 
})();

const Player = (playerName, playStone, playerWins, playerLoses) => {

  

    const getPlayerName = () => playerName;
    const getPlayStone = () => playStone;
    const getPlayerWins = () => playerWins;
    const getPlayerLoses = () => playerLoses;  

    const addPlayerWin = () => {    playerWins++;   }
    const addPlayerLoses = () => {  playerLoses++;   }

    /*const setPlayStone = (stone) => {playStone = stone; 
    console.log(playStone);
}*/
    const toggleStone = () => {
        if(playStone == "X") playStone = 'O';
        else if(playStone == 'O') playStone = 'X'; 
    }


    return {getPlayerName ,getPlayStone, getPlayerWins, getPlayerLoses, 
        addPlayerWin, addPlayerLoses, toggleStone }; 
}; 

const Sidebar = (number) => {
    
    let element;
    let id;

    const getElement = () =>{
        id = number; 
        if(number == 1) element = document.querySelector('#sideBarOne')
        else element = document.querySelector('#sideBarTwo');  
    } 

    const fillSideBar = () =>{
        let playerName, playerPlayStone, playerWins, playerLoses, player;
        if(id == 1)
        {
            playerName = document.querySelector('#playerOneName');
            playerPlayStone = document.querySelector('#playerOnePlaystone');
            playerWins = document.querySelector('#playerOneWins');
            playerLoses = document.querySelector('#playerOneLoses');
            player = playerOne;
        }
        else if(id == 2)
        {
            playerName = document.querySelector('#playerTwoName');
            playerPlayStone = document.querySelector('#playerTwoPlaystone');
            playerWins = document.querySelector('#playerTwoWins');
            playerLoses = document.querySelector('#playerTwoLoses');
            player = playerTwo; 
        }
       
           playerName.textContent = player.getPlayerName(); 
           playerPlayStone.textContent = player.getPlayStone();
           playerWins.textContent = player.getPlayerWins();
           playerLoses.textContent = player.getPlayerLoses();
    } 

    return {getElement, fillSideBar}; 
    

} 



let playerOne, playerTwo; 

let sidebarOne = Sidebar(1);
let sidebarTwo = Sidebar(2);

welcomeField.activateWelcomeField(); 

const arrOfTiles = gameBoard.createGameboard();

gameBoard.activateTiles(arrOfTiles);

sidebarOne.getElement();
sidebarTwo.getElement();






