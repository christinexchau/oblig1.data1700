
let billetter = [];
    function kjopBillett() {
    // Validering av input
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let epost = document.getElementById("epost").value;
    let telefon = document.getElementById("telefon").value;
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;

    //Bruker if-setninger for å kunne sjekke om alle verdiene er skrevet riktig
    if (navn === "" || epost === "" || telefon === "") {
        alert("Vennligst fyll ut alle feltene korrekt.");
        return;
    }

    if (!epostRegex(epost)) {
        alert("Vennligst skriv inn mailen din riktig");
        return;
    }

    if(!telefonRegex(telefon)) {
        alert("Vennligst skriv inn et gyldig telefonnummer");
        return;
    }

    if (antall <= 0) {
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

    // Pusher alle inputene inn i Arrayet (BillettLista)
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
    billettListe.innerHTML = '';''

    for (let i = 0; i < billett.length; i++) {
        const billett = billett[i];
        const li = document.createElement('li');
        li.textContent = `Fornavn: ${billett.fornavn} ${billett.etternavn}, Telefon: ${billett.telefon}, Epost ${billett.epost}, Film:${billett.film}, Antall: ${billett.antall}`;
        billettListe.appendChild(li);
    }
}

    function slettAlleBilletter() {
        billetter = []; //Sletter inputene i Arrayet slik at den blir tom
        visBilletter();
    }


    //Funksjonen for validering av epost
    function epostRegex(epost) {
        const gyldigEpost = /\S+@\S+\.\S+/;
        return gyldigEpost.test(epost);
    }


    //Funksjonen for validering av telefon
    function telefonRegex(telefon) {
        const gyldigTelefon = /^\d{8}$/;
        return gyldigTelefon.test(telefon);
    }
