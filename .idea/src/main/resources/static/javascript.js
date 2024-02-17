
let billetter = [];
    function kjopBillett() {
    // Validering av input
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let epost = document.getElementById("epost").value;
    let telefon = document.getElementById("telefon").value;
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;

    if (navn === "" || epost === "" || telefon === "") {
        alert("Vennligst fyll ut alle feltene korrekt.");
        return;
    }

    else if (!epostRegex(epost)) {
        alert("Vennligst skriv inn mailen din riktig");
        return;
    }

    else if(!telefonRegex(telefon)) {
        alert("Vennligst skriv inn et gyldig telefonnummer");
        return;
    }

    else if (antall <= 0) {
        alert("Vennligst fyll inn antall billetter");
        return;
    }

    const infoBillett = {
        fornavn: fornavn,
        etternavn: etternavn,
        epost: epost,
        telefon: telefon,
        film: film,
        antall: antall
    };

    billetter.push(infoBillett);

    document.getElementById('fornavn').value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById('email').value = "";
    document.getElementById('telefon').value = "";
    document.getElementById('antall').value = "";
    document.getElementById("film").value = "";
    visBilletter();}


function visBilletter() {
    const billettListe = document.getElementById('billettListe');
    billettListe.innerHTML = '';
    for (let i = 0; i < billett.length; i++) {
        const billett = billett[i];
        const li = document.createElement('li');
        li.textContent = `Navn: ${billett.fornavn}, E-post: ${billett.epost}, Telefonnummer: ${billett.telefon}`;
        billettListe.appendChild(li);
    }
}

    function slettAlleBilletter() {
        billetter = []; // Tømmer arrayet
        visBilletter(); // Oppdaterer billettlisten
    }

    function epostRegex(epost) {
        const gyldigEpost = /\S+@\S+\.\S+/;
        return gyldigEpost.test(epost);
    }

    function telefonRegex(telefon) {
        const gyldigTelefon = /^\d{8}$/;
        return gyldigTelefon.test(telefon);
    }
