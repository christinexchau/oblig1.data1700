let billetter = []; //lagre en array for billetter
function kjøpBilletter() {

    let form = document.getElementById('billettStruktur');

    let fornavn = document.getElementById("fornavn");
    let etternavn = document.getElementById("etternavn");
    let epost = document.getElementById('epost');
    let telefonnr = document.getElementById('telefonnr');
    let antall = document.getElementById("antall");

    let telefonnrRegex = document.getElementById("telefonnrRegex");
    let epostRegex = document.getElementById("epostRegex");


    if (!gyldigEpost(epost.value)) {
        epostError.textContent = 'Vennligst skriv inn en gyldig e-postadresse.';
        gyldigVerdi = false;
    } else {
        epostError.textContent = '';
    }

    if (!gyldigTelefonnummer(telefonnr.value)) {
        telefonnrError.textContent = 'Vennligst skriv inn et gyldig telefonnummer.';
        gyldigVerdi = false;
    } else {
        telefonnrError.textContent = '';
    }

    if (!gyldigVerdi) {
        event.preventDefault();
    }
}

function slettAlleBilletter () {

}
