// RI-Creare la navbar con i vari dropdown del sito: https://www.revolut.com/en-IT
// I dropdown però appaiono e scompaiono al click e non al rollover.
// Cerco poi di gestire il fatto che possa essere aperto 1 solo dropdown alla volta.

$( document ).ready(function() {

  // sicuramente esiste un modo per accorpare tutte queste funzioni e renderle univoche
  $(".nav_right ul li").not("#Tariffazione").click(function(){

    $(this).children("ul").toggle();
    $(this).siblings().children("ul").hide();

  })

  $(".dropdown i").click(function(){

    $("#ham_menu").addClass("active");
    $(".nav_hidden").hide();

  });

  $(".close").click(function(){

    $("#ham_menu").removeClass("active");
    $(".nav_hidden").show();

  });

  $("#ham_menu > div > ul > li:not(#Tariffazione_ham)").click(function(){

    $(this).next().toggle();

  });

})
