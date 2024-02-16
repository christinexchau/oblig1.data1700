
// Lage en Array for å lagre inputverdiene fra brukeren
let billetter = [];

function kjøpBilletter() {

    let film = document.getElementById("film").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let epost = document.getElementById('epost').value;
    let telefonnr = document.getElementById('telefonnr').value;
    let antall = document.getElementById("antall").value;

    if (fornavn === "" || etternavn === "" || telefonnr === "" || epost === "" || antall === "") {
        alert("Alle felt må fylles ut");
        return;

    } else if (!antall <= 0) {
        alert("Skriv inn antall billetter")
        return;

    } else if (!epostRedex(epost)) {
        alert("Skriv inn mailen din riktig")
        return;

    } else if (!telefonnrRedex(telefonnr)) {
        alert("Skriv inn telefonnummeret riktig")
        return;

    }

    billetter.push({
        fornavn: fornavn,
        etternavn: etternavn,
        epost: epost,
        telefonnr: telefonnr,
        film: film
    });


    }

function visBilletter() {

}
function epostRedex (epost){
    const gyldigEpost = /\S+@\S+\.\S+/;
    return gyldigEpost.test(epost);
}

function telefonnrRedex (telefonnr) {
    const gyldigTelefonnummer = /^\d{8}$/;
    return gyldigTelefonnummer.test(telefonnr);
}

//Lager en funksjon for å kunne slette arrayet/billetlista
function slettAlleBilletter () {


}



