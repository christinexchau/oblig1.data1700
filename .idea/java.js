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