console.log('js ok');

//FUNZIONI

//generare cella
function createCell(){
    const cell = document.createElement('div');
    cell.className = 'cell'; 

    return cell;
}


//elementi del DOM
const grid = document.getElementById('grid');
const button = document.getElementById('button-play');

//bottone in ascolto
button.addEventListener('click', () => {

    
    const cellAmount = 100;
    
    //creare 100 celle
    for(let i = 0; i < cellAmount; i++){
        const cell = createCell();

    //preparare il collegamento per l'html
    grid.appendChild(cell);

    //mettere la cella in ascolto
    cell.addEventListener('click', function(){
        //inserire il numero all'interno delle celle
        cell.classList.add('selected');
        cell.innerText = [i];
    })
    }
    
    
})

