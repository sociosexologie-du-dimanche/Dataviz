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
        
var clics = document.querySelectorAll('.fenetreQuestion'),  // Récupération de toutes les fenêtres de question
    Reponse = {                                               // Création d'un prototype contenant la fenêtre mère parente et le clic
        init:function(bloc,result){
            this.fenetre = bloc ;
            this.result = result ;
        }
    },
    reponse = Object.create(Reponse),                       // Création de l'objet réponse
    infogra, comm, question,
    textes = {
        vrai : [
            "Oui" ,
            "C'est vrai" ,
            "Tout à fait"
        ],
        faux : [
            "Non" ,
            "Pas vrai du tout" ,
            "T'es nul." 
    ]};                                                     // Création des variables utilisées dans la boucle
    console.log(textes)

for (i=0, n=clics.length; i<n; i++) {                       // On 'prépare à l'écoute' toutes les fenêtres de la page
    clics[i].addEventListener('click',function(e){
                        console.log('Entré dans une boucle') ;
                        console.log(e.target) ;
        if (e.target.className === 'reponseV') {                    // On récupère true si cliqué sur V, false si cliqué sur F
            reponse.init(e.target.parentNode.parentNode,true);      // et un caractère vide si cliqué ailleurs dans la fenêtre
        } else if (e.target.className === 'reponseF') {
            reponse.init(e.target.parentNode.parentNode,false);
        } else {
            reponse.init(e.target.parentNode.parentNode,'erreur');
        }
                        console.log("l'objet réponse est :") ;
                        console.log(reponse) ;
        
        idFenetre = reponse.fenetre.id ;
        
        if (reponse.result != 'erreur') {                                  // On ne modifie le CSS que si l'utilisateur a répondu
            infogra = reponse.fenetre.firstElementChild ;                 // On enregistre les trois enfants de la fenêtre mère
            question = reponse.fenetre.lastElementChild ;                                // On récupère l'élément question
            comm = document.querySelector("#"+ idFenetre + " .commentaire") ;       // On récupère le commentaire de réponse
            console.log(infogra) ;
            console.log(question) ;
            console.log(comm) ;
        
            question.style.display = 'none' ;                   // On désaffiche la fenêtre question
            infogra.style.WebkitFilter = 'none' ;            // On enlève le flous sur les infographies
            comm.style.WebkitFilter = 'none' ;
            // On remplit la fenêtre commentaire
            noQuestion = idFenetre.charAt(5) - 1;
            (reponse.result) ? comm.innerHTML = textes.vrai[noQuestion]: comm.innerHTML = textes.faux[noQuestion] ;  
            comm.style.fontWeight = 'bold' ;
        }
                            console.log('Fini toutes les instructions') ;
    });
}


