
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

   $( "Pokedex tr" ).click(function() {
       alert( "Handler for .click() called." );
});
   

   
});


