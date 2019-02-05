
$(function(){
  //on va nommer la variable pour pouvoir arrondir le chiffre (Math.rond). Et le chiffre sera entre de 0 à 1 * 100 car nous voulons une resultat entre 0 et 100
  var random = Math.round(Math.random()*100);
  //on nomme la variable afin d'avoir le nombre d'essaie
  var compteur = 0;
  //on demande à l'id que lorsqu'on clique sur le bouton ils nous donnent la valeur;
  $('#result').click(function(){
var text = $('#resultNumber').val();
//Reprendre la variable pour avoir le nombre d'essai ++='+1';
compteur++;
//si
if (random==text){
  alert ('Vous avez reussit en '+compteur+' essais');
//sinon si
}else if(text<random){
  alert('le chiffre est plus haut');
  //sinon si
}else if(text>random){
  alert('le chiffre est plus bas');
}
  });
});
