// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Potete realizzare lo stile che volete, sin quando tutto è leggibile con facilità :muscolo::carnagione-2:


// primo passaggio da fare è che le celle si inseriscano automaticamente
const grid = document.getElementById("grid");

// loop che ci permette di inserire i quadrati nella cella in modo automatico
for(let i=0;i<49;i++)
{
    const newelement = document.createElement("div")
    newelement.classList.add("square");
    grid.append(newelement);
    

    // inserisco un event lit
    newelement.addEventListener("click",function()
    {
        // In JavaScript, la parola chiave this si riferisce a un oggetto.L'oggetto dipende dal modo in cui viene richiamato (utilizzato o chiamato).La parola chiave this si riferisce a oggetti diversi a seconda di come viene utilizzata:
        this.classList.add("active");
        // con la classe sopra riportata noi andiamo ad aggiungere la classe sctive all' elemento
    }
    );
}