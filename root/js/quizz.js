//------------------------------------------------------------
// Création du tableau 'textes'
var reponse1V =  "<p> Et bien oui ! La part des individus en France se déclarant <em>non-religieux</em> et ayant déjà eu un rapport sexuel avec quelqu'un du même sexe est de <span class='chiffre'>16%</span>. Il en est de même pour les individus appartenant à <span class='emph'>une religion autre que le catholicisme</span>.<p> Les catholiques quant à eux sont moins tentés par les expériences homosexuelles, mais la différence n'est pas bien significative... <span class='chiffre''>12%</span> des catholiques ont déjà eu une expérience avec quelqu'un du même sexe. C'est à dire seulement <span class='chiffre'>4 points</span> de pourcentage de moins que le reste de la population !</p>",
    reponse1F = "<p> Pas du tout ! On est loin de l'époque où la foi et l'homosexualité sont incompatibles ! La part des individus en France se déclarant <em>non-religieux</em> et ayant déjà eu un rapport sexuel avec quelqu'un du même sexe est de <span class='chiffre'>16%</span>. Il en est de même pour les individus appartenant à <span class='emph'>une religion autre que le catholicisme</span>.<p> Les catholiques quant à eux sont moins tentés par les expériences homosexuelles, mais la différence n'est pas bien significative... <span class='chiffre''>12%</span> des catholiques ont déjà eu une expérience avec quelqu'un du même sexe. C'est à dire seulement <span class='chiffre'>4 points</span> de pourcentage de moins que le reste de la population !</p>";

document.querySelector("#quizz1 .commentaire").innerHTML = reponse1V ;


textes = {
        vrai : [
            reponse1V ,
            "C'est vrai" ,
            "Tout à fait"
        ],
        faux : [
            reponse1F ,
            "Pas vrai du tout" ,
            "T'es nul." 
    ]};



//-------------------------------------------------------------
// Début du script        
var clics = document.querySelectorAll('.fenetreQuestion'),  // Récupération de toutes les fenêtres de question
    Reponse = {                                               // Création d'un prototype contenant la fenêtre mère parente et le clic
        init:function(bloc,result){
            this.fenetre = bloc ;
            this.result = result ;
        }
    },
    reponse = Object.create(Reponse),                       // Création de l'objet réponse
    infogra, comm, question;                                                     // Création des variables utilisées dans la boucle

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
            infogra = document.querySelector("#" + idFenetre + " .infographie") ;   // On enregistre les trois enfants de la fenêtre mère
            question = document.querySelector("#" + idFenetre + " .fenetreQuestion") ;      // On récupère l'élément question
            comm = document.querySelector("#"+ idFenetre + " .commentaire") ;       // On récupère le commentaire de réponse
            console.log(infogra) ;
            console.log(question) ;
            console.log(comm) ;
        
            question.style.WebkitFilter = 'opacity(0%)' ;                   // On désaffiche la fenêtre question
            infogra.style.WebkitFilter = 'none' ;            // On enlève le flous sur les infographies
            comm.style.WebkitFilter = 'none' ;
            question.style.zIndex = '-1' ;
            // On remplit la fenêtre commentaire
            noQuestion = idFenetre.charAt(5) - 1;
            (reponse.result) ? comm.innerHTML = textes.vrai[noQuestion]: comm.innerHTML = textes.faux[noQuestion] ;  
            // comm.style.fontWeight = 'bold' ;
        }
                            console.log('Fini toutes les instructions') ;
    });
}


