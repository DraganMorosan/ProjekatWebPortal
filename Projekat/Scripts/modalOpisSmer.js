﻿$(document).ready(function () {
    console.log('Skripta radi');

    $('.opis').click(function () {
        $opis = $(this);
        var smerNaziv = $opis.parent().parent().find("a[class='naziv-smera-na-kartici']").text();
        var smerOpis = $opis.parent().parent().find("div.opisSmera p").text();

        console.log(smerNaziv);
        console.log(smerOpis);
        $('.modal-header span').text(smerNaziv);
        $('.modal-body p').text(smerOpis);
    });
});

