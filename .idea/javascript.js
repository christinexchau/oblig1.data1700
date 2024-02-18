/*
let billetter = [];

//Lager funksjonen for kjøpBillett
function kjopBillett() {
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let epost = document.getElementById("epost").value;
    let telefon = document.getElementById("telefon").value;
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;


    //Bruker if-setninger for å validere input-verdier
    if (fornavn === "" || etternavn === "" || epost === "" || telefon === "" || film === "" || antall === "") {
        alert("Vennligst fyll ut alle feltene.");
        return;
    }

    //Validering for epost
    if (!gyldigEpost(epost)) {
        alert("Skriv inn en gyldig e-postadresse.");
        return;
    }

    //Validering for telefon
    if (!gyldigTelefon(telefon)) {
        alert("Skriv inn et gyldig telefonnummer.");
        return;
    }

    //Lagde en const variabel for inputene
    const infoBillett = {
        fornavn: fornavn,
        etternavn: etternavn,
        epost: epost,
        telefon: telefon,
        film: film,
        antall: antall
    }

    //inforBilletten blir pusha/lagt inn i Arrayet
    billetter.push(infoBillett);
    visBilletter();
    tomInput();
}

//Funksjonen som viser billetene til brukeren
function visBilletter() {
    const billettListe = document.getElementById('billettListe');
    billettListe.innerHTML = '';

    for (let i = 0; i < billetter.length; i++) {
        const billett = billetter[i];
        const li = document.createElement('li');
        li.textContent = `Navn: ${billett.fornavn} ${billett.etternavn}, E-post: ${billett.epost},
            Telefonnummer: ${billett.telefon}, Film: ${billett.film}, Antall billetter: ${billett.antall}`;
        billettListe.appendChild(li);
    }
}

//Funksjon for å slette alle billetter
function slettAlleBilletter() {
    billetter = [];
    visBilletter();
}

//Funksjon for epostvalidering
function gyldigEpost(epost) {
    const epostRegex = /\S+@\S+\.\S+/;
    return epostRegex.test(epost);
}

//Funksjon for telefonvalidering
function gyldigTelefon(telefon) {
    const telefonRegex = /^\d{8}$/;
    return telefonRegex.test(telefon);
}

//Funksjon for å tømme alle input-verdiene
function tomInput () {
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("epost").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("film").value = "";
}

 */