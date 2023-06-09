console.log('js ok');

// |----------|
// | FUNZIONI |
// |----------|

//generare cella
function createCell(cellAmount){
    const cell = document.createElement('div');
    cell.className = 'cell'; 

    return cell;
}


//generare bombe
function createBombs(totalCell, bombNumber){
    const bombs = [];
    
    while(bombs.length < bombNumber){
        let randomBomb;
        do{
        randomBomb = Math.floor(Math.random() * totalCell) + 1;
        }
        while(bombs.includes(randomBomb));
        bombs.push(randomBomb);
    }
    
    return bombs
}

//finire la partita
function endGame(totalScore, maxScore, isBomb){

    let message = '';

    //condizioni di fine partita
    if(isBomb){
     message = alert(`HAI PERSO! Hai totalizzato ${totalScore} punti`);
    }
    else if(totalScore === maxScore){
        message = alert(`COMPLIMENTI HAI VINTO! Hai totalizzato ${maxScore}`);
    }

    return message
}


//elementi del DOM
const grid = document.getElementById('grid');
const button = document.getElementById('button-play');
const scoreDisplay = document.getElementById('score');
const scoreCard = document.getElementById('score-card');



//bottone in ascolto
button.addEventListener('click', () => {
    //appare la card per il punteggio
    scoreCard.classList.remove('d-none')
    
    const cols = 10;
    const rows = 10;
    const cellAmount = rows * cols;
    const bombAmount = 16;
    let score = 0;
    const maxScore = cellAmount - bombAmount;

    

    //creare le bombe
    const bombs = createBombs(cellAmount, bombAmount);
    console.log(bombs);

    //creare 100 celle
    for(let i = 0; i < cellAmount; i++){
        const cell = createCell();
        
        //preparare il collegamento per l'html
        grid.appendChild(cell);
        
        
        //mettere la cella in ascolto
        cell.addEventListener('click', function(){
            //verificare che la cella non sia selected
            const isSelected = cell.classList.contains('selected');
            if (isSelected) return
            
            //inserire il numero all'interno delle celle
            cell.classList.add('selected');
            const cellNumber = [i + 1];
            cell.innerText = cellNumber;
            console.log(i);
            score++;
            
            //verificare se l'indice della cella sta tra le bombe
            const isBomb = bombs.includes(++i);
            //aggiungere le bombe
            if(isBomb){
                cell.classList.add('danger');
            }
                
            
            //punteggio nel display
            scoreDisplay.innerText = score;
            
            endGame(maxScore, score, isBomb);

        })
        
    }

})

