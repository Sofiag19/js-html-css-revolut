// RI-Creare la navbar con i vari dropdown del sito: https://www.revolut.com/en-IT
// I dropdown però appaiono e scompaiono al click e non al rollover.
// Cerco poi di gestire il fatto che possa essere aperto 1 solo dropdown alla volta.

$( document ).ready(function() {

  // sicuramente esiste un modo per accorpare tutte queste funzioni e renderle univoche
  $("#Accounts").click(function(){

    $("#Accounts ul").toggle();

  });

  $("#Prodotti").click(function(){

    $("#Prodotti ul").toggle();

  });

  $("#Azienda").click(function(){

    $("#Azienda ul").toggle();

  });

  $("#Aiuto").click(function(){

    $("#Aiuto ul").toggle();

  });

  $("#Lingue").click(function(){

    $("#Lingue ul").toggle();

  });

  $(".dropdown i").click(function(){

    $("#ham_menu").show();
    $(".nav_hidden").hide();
  });

  $("#ham_menu > div > a > i").click(function(){

    $("#ham_menu").hide();
    $(".nav_hidden").show();

  });

})
