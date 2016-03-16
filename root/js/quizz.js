/* Ce qu'il faut faire :

- créer un événement au clic de la soirée sur les div "reponseF" et "reponseV".
    pour les div reponseF, un clic on renvoie FALSE
    pour les div reponseV, un clic on renvoie TRUE
        > reponseF.addEventListener('click',function(e) {return false})
        > idem pour V
        > à ce stage on a enregistré e qui contient false ou true (à vérifier)
        > utiliser la structure parent pour récupérer les bonnes div
- instructions de modifications du css en conséquence :
        > effacer la fenetre question : question.style.display=none
        > enlever le blur : infographie.style.filter=none
        > afficher la fenetre commentaire : commentaire.style.display=block
        > remplir la fenetre commentaire selon la réponse : e ? commentaire.innerHtml('Vrai') | commentaire.innerHtml('Faux')
- trouver la commande qui gère la transition entre le blur et le non blur.
*/
        
var infogra = document.getElementById('info2'),
    question = document.querySelectorAll('.fenetreQuestion'),
    corps = document.querySelector('#corps');
console.log(infogra) ;
console.log(question)
console.log('Bonjour');
infogra.style.WebkitFilter = 'none' ;
for (i=0,c=question.length;i<c;i++){
    question[i].style.display = 'none' ;
}
corps.style.backgroundColor = 'rgb(0,0,0)' ;
console.log('je suis censé avoir changé le flou');
