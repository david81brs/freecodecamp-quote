/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

//console.log("JavaScript is amazing!");

$(document).ready(function(){
  var dbquotes = [
  {
    "frase":"A juventude realmente é curta mas, vocês atuaram brilhante e arduamente mais do que ninguém.",
    "autor":"Chefe Sugata"
  },
  {
    "frase":"Buba, Ahames.. vão se ver comigo.Vamos Change!",
    "autor":"Change Dragon"
  },
  {
    "frase":"Não te enrugues couro velho, que te quero para tambor!",
    "autor":"Chapolim Colorado"
  },
  {
    "frase":"Evitar os impostos é a única atividade que atualmente contém alguma recompensa.",
    "autor":"John Maynard Keynes"
  }
];
        // location.reload();
        var rdmy = Math.floor((Math.random() * dbquotes.length));
        $("#quotebox").html('<h3>\"'+dbquotes[rdmy].frase + '\"</h3>'+ "<h4> - " + dbquotes[rdmy].autor+"</h4><br>");
        $("#sendy").on("click", function(){
            rdmy = Math.floor((Math.random() * dbquotes.length));
            $("#quotebox")
            .html('<h3>\"'+dbquotes[rdmy].frase + '\"</h3>'+ "<h4 - >" + dbquotes[rdmy].autor+"</h4><br>")
            .delay("fast")
            .fadeIn();
        });
		$("#tweeter").on("click", function(){
			window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+encodeURIComponent(dbquotes[rdmy].frase + " - " + dbquotes[rdmy].autor),'_blank');
		});

});
