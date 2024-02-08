// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Potete realizzare lo stile che volete, sin quando tutto è leggibile con facilità :muscolo::carnagione-2:



const startbutton = document.getElementById("bottone");
console.log(startbutton);

document.querySelector("#bottone").addEventListener("click",
function()
{


    funzionamentogioco();

}

)

function funzionamentogioco ()
{
    
    const grid = document.getElementById("grid");

    grid.innerHTML="";
    // creazione elemento del dom
    let newelement = document.createElement("div");

selezione_difficolta(newelement);



    // primo passaggio da fare è che le celle si inseriscano automaticamente
// loop che ci permette di inserire i quadrati nella cella in modo automatico
for(let i=0; i<number ;i++)
{
    // creazione elemento del dom
    newelement = document.createElement("div");
    // associazione class square al new element
    newelement.classList.add("square");
    // appeso il nuovo elemento
    grid.append(newelement);
    // abbiamo inserito gli elementi dell'indice +1
    newelement.innerText=[i+1];

    

    // inserisco un event
    newelement.addEventListener("click",function()
    {
        // In JavaScript, la parola chiave this si riferisce a un oggetto.L'oggetto dipende dal modo in cui viene richiamato (utilizzato o chiamato).La parola chiave this si riferisce a oggetti diversi a seconda di come viene utilizzata:
        this.classList.toggle("active");
        console.log(this);
        // con la classe sopra riportata noi andiamo ad aggiungere la classe sctive all' elemento sctive e grazie a toggle noi possiamo metterle e toglierle
    }
    
    );
}
}

// funzione per selezionare difficoltà
function selezione_difficolta(newelement)
    {
       const difficult = document.getElementById("difficulty").value;
    console.log(difficult);

    if(difficult=="easy")
    {
        number=100;

    //    grid.classList.add("easy");
       grid.className=difficult;

    }
    else if(difficult=="medium")
    {
        number=81;
        // grid.classList.add("medium");
        grid.className=difficult;
    }
    else
    {
        grid.classList.remove("medio");
        
        number=49;
        
        grid.classList.add("difficult");
        
    }
    }



// dobbiamo generare una funzione cheinserisca un numero solo se non è presente

function generatearrayofnumber(number)
{
    // dichiarazione di un array
    const arrayofnumber = [] ;

    while(arrayofnumber.length < number)
    {
        const newelement= generateRandomNumber(number);
        // if controlla se l'array non include il numero generato 
        if(!arrayofnumber.includes(newelement))
        {
            arrayofnumber.push(newelement);
        }
    }

    return arrayofnumber;
    

}


// funzione per generare un numero randomico

// function generateRandomNumber(number)
// {
//     // dichiarazione variabile randomica,Math.floor per restituire numero intero,Math.random per valore randomico,maxnumber valore massimo , +1 perchè parte da 0
//     const randomnumber = Math.floor(Math.random()* number)+1 ;
//     // mi dara il valore numerico uscito dalla nostra funzione;
//     return randomnumber;
// }

// function pariodispari(number)
// {
//     if(number % 2 == 0)
//     {
//     }
//     else
//     {
//     }
    
// }