
$( document ).ready(function() {
    
 
 
    var currentPokemon;
    var html = '';
    var html2 = '';
    
    
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
var x = 1;
var pokemonRow;
$("#Pokedex").on('click','tr',function(e){
    e.preventDefault();
    pokemonRow = $(this).attr('value');
     
       html2 += "<div class='modal-dialog' id='PokedexModalDialog'><div class='modal-content'><div class='modal-header'><a href='#'><h3>" 
       + Pokemon[pokemonRow].species + 
       "</h3></a></div><div class='modal-body'><h5>Abilities:" + Pokemon[pokemonRow].abilities[x] + "</h5><table class='table-striped'><tr><th> HP </th><th> Attack </th><th> Defence </th><th> Special <br /> Attack </th><th> Special <br /> Defence </th><th> Speed </th></tr><tr><td>"
	+Pokemon[pokemonRow].baseStats.hp+
	"</td><td>"
	+Pokemon[pokemonRow].baseStats.atk+
	"</td><td>"
	+Pokemon[pokemonRow].baseStats.def+
	"</td><td>"
	+Pokemon[pokemonRow].baseStats.spa+
	"</td><td>"
	+Pokemon[pokemonRow].baseStats.spd+
	"</td><td>"
	+Pokemon[pokemonRow].baseStats.spe+
	"</td></tr></table></div><div class='modal-footer'><a class='btn btn-default' data-dismiss ='modal'>Close</a></div>";
	$("#PokemonModal").append(html2)
});
		
                
                $(document).on('hide.bs.modal','#PokemonModal', function () {
                $("#PokedexModalDialog").remove();
                html2 = '';
});

   
});


