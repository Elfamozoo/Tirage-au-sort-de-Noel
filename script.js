// Creation du tableau.
const liste = [];
// Creation des tableaux afin de definir un historique des gifters et des receivers de cadeaux.
const gifters = [];
const receivers = [];



// Creation d'une fonction (procedure).
function getUserChoice() {
    // Création de la variable qui recup le contenu de l'input.
    const nom = document.getElementById('nom').value;

    document.getElementById('nom').value = "";

    // Ajout du contenu dans le tableau avec .push()
    liste.push(nom);

    // Console log pour voir si ca fonctionne.
    console.log(liste);
}


// Fonction quand on clic sur entrée.
document.querySelector("#nom").addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        getUserChoice()
        getUserList()
    }
});


// Fonction quand on clic sur Ajouter.
const send = document.getElementById('send');

send.addEventListener("click", function () {
    getUserChoice()
    getUserList()
});


// Fonction qui recupere les utilisateurs du tableau.
function getUserList() {
    const userList = document.getElementById('liste');

    userList.textContent = liste.toString();
}


// Variable du bouton lancer le tirage.
const go = document.getElementById('go');

// Creation d'une fonction qui renvoi un numero generé aleatoirement.
function generateRandomNumber(liste) {
    return Math.floor(Math.random() * liste.length);
}

function generateChoiceName(choix) {
    return liste[choix];
}

// Ajout de l'evenement qui fais que quand on clique sur le bouton cela lance la fonction du tirage.
go.addEventListener('click', function () {

    // Variable randomPick declaré
    let randomPick;

    // Boucle qui genere un randomPick tant qu'il est present dans mon tableau gifters.
    do {
        randomPick = generateRandomNumber(liste);
    } while (gifters.includes(randomPick));

    // Ajout du contenu dans le tableau avec .push()
    gifters.push(randomPick);

    // Variable qui dis que l'ont veut le contenu et pas un numero et retire le resultat du tableau.
    const resultat = generateChoiceName(randomPick);

    // Variable randomPick2 declaré
    let randomPick2;

    // Boucle afin d'empecher la redondance tant que randomPick2 est egale a randomPick celui va continuer a se generer.
    do {
        randomPick2 = generateRandomNumber(liste);
    } while (randomPick === randomPick2 || receivers.includes(randomPick2));

    // Ajout du contenu dans le tableau avec .push()
    receivers.push(randomPick2);

    const resultat2 = generateChoiceName(randomPick2);

    // Ajout du resultat au paragraphe.
    document.getElementById('resultat').textContent = resultat + " doit faire un cadeau à " + resultat2;

    // console.log pour voir si ca fonctionne.
    console.log(gifters, receivers);
});