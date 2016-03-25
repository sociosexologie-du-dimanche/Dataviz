// Flouter le canvas quand mouseouver sur le corps, déflouter quand en sort
(function(){
    var corps = document.getElementById('corps'),
        canvas = document.getElementById('mycanvas'),
        aurevoir = document.getElementById('aurevoir');
    corps.addEventListener('mouseover',function() { 
        canvas.style.WebkitFilter = 'blur(5px)' ;
        canvas.style.filter = 'blur(5px)' ;
    });
    corps.addEventListener('mouseout',function() { 
        canvas.style.WebkitFilter = 'none' ;
        canvas.style.filter = 'none' ;
    });
})();

// Apparition de la vidéo quand on clique sur le titre pour la section gâteries
(function(){
    var videoPipe = document.createElement('iframe'),
        titreGaterie = document.getElementById('titreGateries'),
        titreSatis = document.getElementById('titreSatis'),
        compteur = 0,
        compteurMouseOver = 0,
        compteurMouseOver2 = 0,
        toolTip = document.createElement('div'),
        toolTip2 = document.createElement('div'),
        affiche = function(){
            videoPipe.style.opacity = '1' ;
        },
        retire = function(){
            titreGaterie.removeChild(videoPipe);
        };
    videoPipe.setAttribute('id','videoPipe') ;
    videoPipe.width = '420' ;
    videoPipe.height = '315' ;
    videoPipe.src = 'https://www.youtube.com/embed/ZyZBkGETvE8';
    videoPipe.allowFullscreen = false ;
    
    toolTip.setAttribute('class','tooltip') ;
    toolTip2.setAttribute('class','tooltip') ;
    toolTip.innerHTML = "Un bonus se cache </br> derrière le titre..." ;
    toolTip2.innerHTML = "Oui, ce titre est plutôt déprimant..." ;

    titreGaterie.appendChild(toolTip) ;
    titreSatis.appendChild(toolTip2) ;

    titreGaterie.addEventListener('click',function(){
        compteur++ ;
        if (compteur%2===1) {
            titreGaterie.appendChild(videoPipe);
            titreGateries.style.height = '600px';
            setTimeout(affiche,200) ;
        } else {
            titreGaterie.style.height = '50px';
            videoPipe.style.opacity = '0' ;
            setTimeout(retire,1000) ;
        };
    });
    // Création d'un tooltip !
    titreGaterie.firstElementChild.firstElementChild.addEventListener('mouseover',function(){
        compteurMouseOver++ ;
        if (compteurMouseOver === 1 ) { toolTip.style.opacity = '1' } ;
    }) ;
    titreGaterie.firstElementChild.firstElementChild.addEventListener('mouseout',function(){
        toolTip.style.opacity = '0' ;
    }) ;
    titreSatis.firstElementChild.firstElementChild.addEventListener('mouseover',function(){
        compteurMouseOver2++ ;
        if (compteurMouseOver2 === 1 ) { toolTip2.style.opacity = '1' } ;
    }) ;
    titreSatis.firstElementChild.firstElementChild.addEventListener('mouseout',function(){
        toolTip2.style.opacity = '0' ;
    }) ;
})() ;

// Apparition de la liste de liens quand on clique sur le paragraphe Pam
(function(){
    var Pam = document.getElementById('listePam'),
        pPam = Pam.firstElementChild,
        motLien = document.getElementById('lienArticles'),
        liens = document.getElementById('liensPam'),
        compteur = 0,
        hauteurPetit = pPam.clientHeight.toString(),
        hauteurGrand = Pam.clientHeight.toString(),
        affiche = function(){
            liens.style.display = 'block' ;
        },
        retire = function(){
            liens.style.display = 'none' ;
        } ;
    Pam.style.height = hauteurPetit ;
    liens.style.display = 'none' ;
    motLien.addEventListener('click',function(){
        compteur ++ ;
        console.log(compteur) ;
        if (compteur%2 === 1) {
            Pam.style.height = '800px' ;
            setTimeout(affiche,100) ;
        } else {            
            Pam.style.height = '80px' ;
            setTimeout(retire,100) ;
        };
    });
})();

// Tooltip pour liste des films et sources
(function(){
    var toolTip = document.getElementById('toolFilms'),
        toolIfop = document.getElementById('toolIfop'),
        toolContact = document.getElementById('toolContact'),
        toolAurevoir = document.getElementById('toolAurevoir'),
        fenetreBlur = document.getElementById('fenetreBlur'),
        texte = "<p>Toutes les images en arrière plan </br>sont des captures d'écran </br>des (bons) films suivants, données par ordre d'apparition :</p>",
        texteIfop = "<p>Les données utilisées pour réaliser ce site ont été récupérées auprès de l'<a href='http://www.ifop.com/?option=com_homepage' target='_blank'>Ifop</a>. Elles ont été recueillies lors d'une enquête menée à la demande du journal <a href='http://www.marianne.net/Cette-semaine-dans-Marianne-Les-Francais-la-politique-et-le-sexe_a238936.html' target='_blank'>Marianne</a>, dans le but d'étudier les relations entre sexualité et positionnement politique. Nous remercions l'Ifop d'avoir gracieusement mis à notre disposition les résultats de cette enquête.</p><p> Les graphiques interactifs ont été réalisés avec <a href='http://www.highcharts.com' target='_blank'>Highcharts</a>.</p>",
        texteContact = "<p>Ce site a été réalisé dans le cadre du cours de visualisation de données de l'<a href='http://www.ensae.fr' target='_blank'>Ensae ParisTech</a>. Vous pouvez nous contacter en utilisant les liens suivants :</p>",
        texteAurevoir = "Changer ce paragraphe en mettant : remerciements d'avoir vu le site, bla bla, boutons de partage fb twitter in, et une petite liste de lecture pour aller plus loin.",
        films = [ {
                nom : 'La mala vida',
                lien : 'http://www.imdb.com/title/tt0188874/'
            },{
                nom : 'Priest',
                lien : 'http://www.imdb.com/title/tt0110889/' ,
            },{
                nom :'Blue Valentine',
                lien : 'http://www.imdb.com/title/tt1120985/?ref_=fn_al_tt_1' ,
            },{
                nom :'Vicky Cristina Barcelona',
                lien : 'http://www.imdb.com/title/tt0497465/?ref_=nv_sr_1' ,
            },{
                nom :'Eyes Wide Shut',
                lien : 'http://www.imdb.com/title/tt0120663/?ref_=nv_sr_1' ,
            }
        ],
        contacts = [ {
                nom : 'Celle qui a les bonnes idées',
                lien : 'https://www.linkedin.com/in/marie-beigelman-955a8397'
            },{
                nom : 'Celui qui était ultramotivé depuis le début',
                lien : 'https://www.linkedin.com/in/ptanneau' ,
            },{
                nom : "Celle qui a fait preuve d'un soutien psychologique sans faille",
                lien : 'https://fr.linkedin.com/in/kim-montalibet-1a01a265' ,
            },{
                nom :'Celui qui aime bien coder la nuit',
                lien : 'https://fr.linkedin.com/in/romaindamian' ,
            }
        ],
        filmList = document.getElementById('filmList'),
        sourceDonnees = document.getElementById('sourceDonnees'),
        auteurs = document.getElementById('auteurs'),
        goodbye = document.getElementById('buttonGoodbye'),
        x = 0,
        y = 0,
        a = 0,
        b = 0,
        blurer = function(e){
            x = Math.random()*60;
            y = Math.random()*40;
            a = Math.random()*30;
            b = Math.random()*70;
            if (e.target === filmList) {
                toolTip.style.top = y+'%' ;
                toolTip.style.left = x+'%' ;
                toolTip.style.opacity = '1' ;
                toolTip.style.zIndex = '7' ;
            } else if (e.target === sourceDonnees) {
                toolIfop.style.top = a+'%' ;
                toolIfop.style.left = b+'%' ;
                toolIfop.style.opacity = '1' ;
                toolIfop.style.zIndex = '7' ;
            } else if (e.target === auteurs){
                toolContact.style.top = a+'%' ;
                toolContact.style.left = b+'%' ;
                toolContact.style.opacity = '1' ;
                toolContact.style.zIndex = '7' ;
            } else {
                toolAurevoir.style.opacity = '1' ;
                toolAurevoir.style.zIndex= '7' ;
            }
            fenetreBlur.style.opacity = '1' ;
            fenetreBlur.style.zIndex = '6' ;
        },
        cleaner = function(e){
            a = Math.random()*100;
            b = Math.random()*100;
            toolTip.style.top = a+'%' ;
            toolTip.style.left = b+'' ;
            toolTip.style.opacity = '0' ;
            toolTip.style.zIndex = '-1' ;
            
            toolIfop.style.top = a+'%' ;
            toolIfop.style.left = b+'' ;
            toolIfop.style.opacity = '0' ;
            toolIfop.style.zIndex = '-1' ;
            
            toolContact.style.top = a+'%' ;
            toolContact.style.left = b+'' ;
            toolContact.style.opacity = '0' ;
            toolContact.style.zIndex = '-1' ;
            
            toolAurevoir.style.opacity = '0' ;
            toolAurevoir.style.zIndex = '-1' ;
            
            fenetreBlur.style.opacity = '0' ;
            fenetreBlur.style.zIndex = '-1' ;
        };
    
    for (i = 0,n=films.length;i<n;i++){
        texte = texte + "<p><a href=" + films[i].lien + " target='_blank'>"+films[i].nom+"</a></p>" ;
    };
    for (i = 0,n=contacts.length;i<n;i++){
        texteContact = texteContact + "<p><a href=" + contacts[i].lien + " target='_blank'>"+contacts[i].nom+"</a></p>"
    }
    texte = texte + "<p> Le code javascript à l'origine des spermatozoïdes baladeurs est disponible <a href='http://paperjs.org/examples/tadpoles/' target='_blank'>ici</a>.</p>" ;
    toolTip.innerHTML = texte ;
    toolIfop.innerHTML = texteIfop ;
    toolContact.innerHTML = texteContact ;
    toolAurevoir.innerHTML = texteAurevoir ;
    filmList.addEventListener('click',function(e) {
        blurer(e) ;
    });
    sourceDonnees.addEventListener('click',function(e){
        blurer(e) ;
    });
    auteurs.addEventListener('click',function(e) {
        blurer(e) ;
    });
    goodbye.addEventListener('click',function(e) {
       blurer(e) ; 
    });
    fenetreBlur.addEventListener('click',function(e){
        cleaner(e) ;
    });
 })();

//ScrollTO
			$(document).ready(function() {
				$('.scrollTo').click( function() { // Au clic sur un élément
					var page = $(this).attr('href'); // Page cible
					var speed = 900; // Durée de l'animation (en ms)
					$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
					return false;
				});
			});