
$( document ).ready(function() {
    
 
 
    var currentPokemon;
    var html = '';
    
    
    for(var prop in Pokemon) 
    {       
            currentPokemon = prop;
            html +=
            '<tr data-toggle="modal" data-target="#PokemonModal" value="' + currentPokemon + '"><td>'
            +Pokemon[prop].num+
            '</td><td>'
            +Pokemon[prop].species+
            '</td><td>'
            +Pokemon[prop].types[0];
            if  (Pokemon[prop].types.length == 2) {
            html +=
            '<br />' +Pokemon[prop].types[1];}
            html+=
            '</td></tr>';
            
     }
$('#Pokedex tr').first().after(html);

var pokemonRow;
$("#Pokedex").on('click','tr',function(e){
    e.preventDefault();
    pokemonRow = $(this).attr('value');
    $("#PokemonModal").append("<div class='modal-dialog' id='PokedexModalDialog'><div class='modal-content'><div class='modal-header'><a href='#'><h3>" + Pokemon[pokemonRow].species + "</h3></a></div><div class='modal-body'><table><tr><th>HP</th><th>Attack</th><th>Defence</th><th>Special<br />Attack</th><th>Special<br />Defence</th><th>Speed</th></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr></table></div><div class='modal-footer'><a class='btn btn-default' data-dismiss ='modal'>Close</a></div>");
    

}); 
   

   
});


