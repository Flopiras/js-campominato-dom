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
    
    //creare 100 celle
    
    for(let i = 0; i < cellAmount; i++){
        const cell = createCell();
        
        //preparare il collegamento per l'html
        grid.appendChild(cell);
        
        
        //mettere la cella in ascolto
    
        cell.addEventListener('click', function(){
            let isSelected;
            if(!isSelected){
            //inserire il numero all'interno delle celle
            cell.classList.add('selected');
            const cellNumber = [++i];
            cell.innerText = cellNumber;
            console.log(i)
            }

        })

    }  
       
    
})

