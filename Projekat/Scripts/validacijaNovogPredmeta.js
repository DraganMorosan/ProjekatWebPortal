﻿$(document).ready(function () {
    console.log('aa');
    $('#predmetForma').validate({
        rules: {
            predmetNaziv: {
                required: true,
                maxlength: 255
            },
            predmetOpis: {
                required: true,
                minlength: 5,
                maxlength: 1000
            }
        },

        messages: {
            predmetNaziv: {
                required: "Polje naziv je obavezno.",
                maxlength: "Polje naziv može sadržati najviše 255 karaktera."
            },
            predmetOpis: {
                required: "Polje opis je obavezno.",
                minlength: "Polje opis mora sadržati najmanje 5 karaktera.",
                maxlength: "Polje opis može sadržati najviše 1000 karaktera."
            }
        }

    });
});