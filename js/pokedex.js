
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
$(".table").on('click','tr',function(e){
    e.preventDefault();
    pokemonRow = $(this).attr('value');
}); 


   $( "#Pokedex tr" ).click(function() {
       $("#PokedexModalContent").append("
       
        <div class="modal-header"><h3>" + pokemonRow + "</h3>
                </div>
                <div class="modal-body">
                <p>Testing Text</p>
                </div>
                <div class="modal-footer">
                <a class="btn btn-default" data-dismiss ="modal">
                                Close
                </a>
                </div>
 ");
});
   

   
});


