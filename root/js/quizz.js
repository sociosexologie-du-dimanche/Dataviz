(function(){
//------------------------------------------------------------
// Création du tableau 'textes'
    var    reponse1V =  "<p> Et bien oui ! La part des individus en France se déclarant <em>non-religieux</em> et ayant déjà eu un rapport sexuel avec quelqu'un du même sexe est de <span class='chiffre'>16%</span>. Il en est de même pour les individus appartenant à <span class='emph'>une religion autre que le catholicisme</span>.<p> Les catholiques quant à eux sont moins tentés par les expériences homosexuelles, mais la différence n'est pas bien significative... <span class='chiffre'>12%</span> des catholiques ont déjà eu une expérience avec quelqu'un du même sexe. C'est à dire seulement <span class='chiffre'>4 points</span> de pourcentage de moins que le reste de la population !</p>",
        reponse1F = "<p> Pas du tout ! On est loin de l'époque où la foi et l'homosexualité sont incompatibles ! La part des individus en France se déclarant <em>non-religieux</em> et ayant déjà eu un rapport sexuel avec quelqu'un du même sexe est de <span class='chiffre'>16%</span>. Il en est de même pour les individus appartenant à <span class='emph'>une religion autre que le catholicisme</span>.<p> Les catholiques quant à eux sont moins tentés par les expériences homosexuelles, mais la différence n'est pas bien significative... <span class='chiffre''>12%</span> des catholiques ont déjà eu une expérience avec quelqu'un du même sexe. C'est à dire seulement <span class='chiffre'>4 points</span> de pourcentage de moins que le reste de la population !</p>",
        reponse2V = "<p> Effectivement ! Il paraît que les femmes vont plus souvent dans les détails que les hommes lors de leurs conversations entre amis... On entend rarement un homme aller dans le détail à propos de ce qu'il a fait ou pas à sa partenaire la nuit dernière. On entend d'ailleurs encore trop rarement un homme parler de sexe en laissant entendre qu'il était là pour le plaisir de l'autre...</p><p>Mais dans les faits, on constate qu'<span class='emph'>une proportion plus grande d'hommes (49%) que de femmes (36%) <em>suce ou lèche souvent le sexe de son/sa partenaire</em></span>. Inversement, <span class='chiffre'>15%</span> des femmes déclarent ne jamais le faire, contre <em>seulement</em> <span class='chiffre'>11%</span> des hommes. Au fond, c'est plutôt clair, quel que soit le sexe de votre partenaire, les gâteries, c'est bien, mangez-en.</p>",
        reponse2F = "<p> Ah, l'imaginaire collectif et les faits... deux choses radicalement différentes ! Il est vrai que dans une société androcentrée, une conséquence <em>attendue</em> de la domination masculine serait que les gâteries soient plutôt données par les femmes et reçues par les hommes... et bien non, et tant mieux !</p><p>On constate qu'<span class='emph'>une proportion plus grande d'hommes (49%) que de femmes (36%) <em>suce ou lèche souvent le sexe de son/sa partenaire</em></span>. Inversement, <span class='chiffre'>15%</span> des femmes déclarent ne jamais le faire, contre <em>seulement</em> <span class='chiffre'>11%</span> des hommes. Au fond, c'est plutôt clair, quel que soit le sexe de votre partenaire, les gâteries, c'est bien, mangez-en.</p>",
        reponse3F = "<p>Bien tenté, mais non ! Parmi les hommes disposant d'un diplôme supérieur au baccalauréat, <span class='chiffre'>48%</span> déclarent sucer ou lécher souvent le sexe de leur partenaire. Parmi ceux ayant un diplôme inférieur au baccalauréat, ils sont <span class='chiffre'>50%</span> ! Inversement, <span class='chiffre'>13%</span> des premiers déclarent ne jamais le faire, contre <span class='chiffre'>13%</span> pour les seconds. La différence n'est de fait pas énorme, et elle est plus grande chez les femmes.</p><p> Chez les femmes, l'effet du diplôme est inversé. Les diplômées sont plus nombreuses à utiliser leur bouche <span class='emph'>souvent</span> et moins nombreuses à ne le faire <span class='emph'>jamais</span>. Que traduit cet effet opposé entre les hommes et les femmes ? L'éducation contribue à réduire les différences de pratiques sexuelles entre hommes et femmes, comme ça tout le monde profite des talents lingaux de l'autre sexe ! Sur l'infographie ci-dessus, on vous résume toutes ces informations.</p><p class='hidden'> Pour les attentifs qui ont remarqué que la longueur des barres ne correspond pas au pourcentage donné : elle correspond à la proportion relative des répondants entre les deux modalités <em>souvent</em> et <em>jamais</em>, afin de mieux comparer les différentes séries. La somme des pourcentages ne fait pas 100, et c'est normal !</p>",
        reponse3V="<p>C'est bien ça ! Parmi les femmes disposant d'un diplôme supérieur au baccalauréat, <span class='chiffre'>36%</span> déclarent sucer ou lécher souvent le sexe de leur partenaire. Parmi celles ayant un diplôme inférieur au baccalauréat, elles sont <span class='chiffre'>29%</span>. Inversement, <span class='chiffre'>14%</span> des premières déclarent ne jamais le faire, contre <span class='chiffre'>18%</span> pour les secondes. Ces écarts sont plus grands que chez les hommes, environ deux fois plus grands.</p><p> Chez les hommes, l'effet du diplôme est inversé. Les diplômés sont moins nombreux à utiliser leur bouche <span class='emph'>souvent</span> et plus nombreux à ne le faire <span class='emph'>jamais</span>. Que traduit cet effet opposé entre les hommes et les femmes ? L'éducation contribue à réduire les différences de pratiques sexuelles entre hommes et femmes, comme ça tout le monde profite des talents lingaux de l'autre sexe ! Sur l'infographie ci-dessus, on vous résume toutes ces informations.</p><p class='hidden'> Pour les  attentifs qui ont remarqué que la longueur des barres ne correspond pas au pourcentage donné : elle correspond à la proportion relative des répondants entre les deux modalités <em>souvent</em> et <em>jamais</em>, afin de mieux comparer les différentes séries. La somme des pourcentages ne fait pas 100, et c'est normal !</p>",
        reponse4V="<p> Oui... et Non! Si la pratique de la sodomie est plus faible chez les électeurs du Modem-UDI et UMP (11% et 12%) contre 17% et 16% chez les PS et les Verts, les électeurs FN sont tête du classement avec le Front de gauche avec 22% des électeurs ayant déjà pratique la pénétration anale. On retrouve d'ailleurs le même schéma concernant les rapports homosexuels : FN et Front de Gauche sont en tête, avec respectivement 59% et 57% des électeurs ayant déjà eu une relation sexuelle avec quelqu'un du même sexe contre 51% en moyenne chez les autres partis. En voilà une valeur commune!</p>",
        reponse4F="<p> Oui... et Non! Si la pratique de la sodomie est plus faible chez les électeurs du Modem-UDI et UMP (11% et 12%) contre 17% et 16% chez les PS et les Verts, les électeurs FN sont tête du classement avec le Front de gauche avec 22% des électeurs ayant déjà pratique la pénétration anale. On retrouve d'ailleurs le même schéma concernant les rapports homosexuels : FN et Front de Gauche sont en tête, avec respectivement 59% et 57% des électeurs ayant déjà eu une relation sexuelle avec quelqu'un du même sexe contre 51% en moyenne chez les autres partis. En voilà une valeur commune!</p>",
        reponse5V="bla bla bla",
        reponse5F=reponse5V,
    textes = {
        vrai : [
            reponse1V ,
            reponse2V ,
            reponse3V ,
            reponse4V ,
            reponse5V ,
        ],
        faux : [
            reponse1F ,
            reponse2F ,
            reponse3F , 
            reponse4F ,
            reponse5F ,
    ]},scroller = function(){};
    
    
    document.querySelector("#quizz1 .commentaire").innerHTML = reponse1V ;
    document.querySelector("#quizz2 .commentaire").innerHTML = reponse2V ;
     document.querySelector("#quizz3 .commentaire").innerHTML = reponse3V ;
     document.querySelector("#quizz4 .commentaire").innerHTML = reponse4V ;
    document.querySelector("#quizz5 .commentaire").innerHTML = reponse5V ;

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
        infogra, comm, question,                               // Création des variables utilisées dans la boucle
        action = function(){
            question.style.WebkitFilter = 'opacity(0%)' ;     // On désaffiche la fenêtre question
            infogra.style.WebkitFilter = 'none' ;            // On enlève le flous sur les infographies
            comm.style.WebkitFilter = 'none' ;
            
            question.style.filter = 'opacity(0%)' ;     // On désaffiche la fenêtre question
            infogra.style.filter = 'none' ;            // On enlève le flous sur les infographies
            comm.style.filter = 'none' ;
            
            question.style.zIndex = '-1' ;  // On passe la fenêtre question derrière pour pas pouvoir cliquer dessus
        };

    for (i=0, n=clics.length; i<n; i++) {                       // On 'prépare à l'écoute' toutes les fenêtres de la page
        clics[i].addEventListener('click',function(e){

            if (e.target.className === 'reponseV') {                    // On récupère true si cliqué sur V, false si cliqué sur F
                reponse.init(e.target.parentNode.parentNode,true);      // et un caractère vide si cliqué ailleurs dans la fenêtre
            } else if (e.target.className === 'reponseF') {
                reponse.init(e.target.parentNode.parentNode,false);
            } else {
                reponse.init(e.target.parentNode.parentNode,'erreur');
            }
        
            idFenetre = reponse.fenetre.id ;
        
            if (reponse.result != 'erreur') {                                  // On ne modifie le CSS que si l'utilisateur a répondu
                infogra = document.querySelector("#" + idFenetre + " .infographie") ;   // On enregistre les trois enfants de la fenêtre mère
                question = document.querySelector("#" + idFenetre + " .fenetreQuestion") ;      // On récupère l'élément question
                comm = document.querySelector("#"+ idFenetre + " .commentaire") ;       // On récupère le commentaire de réponse
                noQuestion = idFenetre.charAt(5) - 1;
                (reponse.result) ? comm.innerHTML = textes.vrai[noQuestion]: comm.innerHTML = textes.faux[noQuestion] ; 
                setTimeout(action,200) ;
                
                switch (noQuestion+1) { // On scrolle la page sur le quizz 3 pour avoir une explication pleine page
                    case 2 :
                        window.scrollBy(0,190) ;
                        break ;
                    case 3 :
                        window.scrollBy(0,175) ;
                        break ;
                    case 4 :
                        window.scrollBy(0,240) ;
                        break ;
                    case 5 :
                        window.scrollBy(0,480) ;
                }
            }
        });
    }
})();


