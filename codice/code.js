// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Potete realizzare lo stile che volete, sin quando tutto è leggibile con facilità :muscolo::carnagione-2:




let number=prompt("inseerisci un numero");

const grid = document.getElementById("grid");

const arrayofnumber =generatearrayofnumber(number);


// primo passaggio da fare è che le celle si inseriscano automaticamente
// loop che ci permette di inserire i quadrati nella cella in modo automatico
for(let i=0; i<number ;i++)
{
    const newelement = document.createElement("div")
    newelement.classList.add("square");
    grid.append(newelement);
    newelement.innerText=arrayofnumber[i];
    

    // inserisco un event
    newelement.addEventListener("click",function()
    {
        // In JavaScript, la parola chiave this si riferisce a un oggetto.L'oggetto dipende dal modo in cui viene richiamato (utilizzato o chiamato).La parola chiave this si riferisce a oggetti diversi a seconda di come viene utilizzata:
        this.classList.toggle("active");
        // con la classe sopra riportata noi andiamo ad aggiungere la classe sctive all' elemento sctive e grazie a toggle noi possiamo metterle e toglierle
        if(newelement.innerText %2 ==0)
        {
            // se è vero
            this.classList.toggle("pari")
        }
        else
        {
            this.classList.toggle("dispari")
        }
    }
    
    );
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

function generateRandomNumber(number)
{
    // dichiarazione variabile randomica,Math.floor per restituire numero intero,Math.random per valore randomico,maxnumber valore massimo , +1 perchè parte da 0
    const randomnumber = Math.floor(Math.random()* number)+1 ;
    // mi dara il valore numerico uscito dalla nostra funzione;
    return randomnumber;
}

function pariodispari(number)
{
    if(number % 2 == 0)
    {
    }
    else
    {
    }
    
}