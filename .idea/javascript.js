/*
let billetter = [];

function kjopBillett() {
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let epost = document.getElementById("epost").value;
    let telefon = document.getElementById("telefon").value;
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;

    if (fornavn === "" || etternavn === "" || epost === "" || telefon === "" || film === "" || antall === "") {
        alert("Vennligst fyll ut alle feltene.");
        return;
    }

    if (!gyldigEpost(epost)) {
        alert("Vennligst skriv inn et gyldig e-postadresse.");
        return;
    }

    if (!gyldigTelefon(telefon)) {
        alert("Vennligst skriv inn et gyldig telefonnummer.");
        return;
    }

    if (antall <= 0) {
        alert("Vennligst fyll inn et gyldig antall billetter.");
        return;
    }

    const infoBillett = {
        fornavn: fornavn,
        etternavn: etternavn,
        epost: epost,
        telefon: telefon,
        film: film,
        antall: antall
    }

    billetter.push(infoBillett);
    visBilletter();
    tomInput();

}

function visBilletter() {
    const billettListe = document.getElementById('billettListe');
    billettListe.innerHTML = '';

    for (let i = 0; i < billetter.length; i++) {
        const billett = billetter[i];
        const li = document.createElement('li');
        li.textContent = `Navn: ${billett.fornavn} ${billett.etternavn}, E-post: ${billett.epost}, Telefonnummer: ${billett.telefon}, Film: ${billett.film}, Antall: ${billett.antall}`;
        billettListe.appendChild(li);
    }
}
function slettAlleBilletter() {
    billetter = [];
    visBilletter();
}

function gyldigEpost(epost) {
    // Tilpasset e-postvalidering
    const epostRegex = /\S+@\S+\.\S+/;
    return epostRegex.test(epost);
}

function gyldigTelefon(telefon) {
    // Tilpasset validering for telefonnummer
    const telefonRegex = /^\d{8}$/;
    return telefonRegex.test(telefon);
}
function tomInput () {
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("epost").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("film").value = "";
}

 */
