// Flouter le canvas quand mouseouver sur le corps, déflouter quand en sort
(function(){
    var corps = document.getElementById('corps'),
        canvas = document.getElementById('mycanvas');
    corps.addEventListener('mouseover',function() { canvas.style.WebkitFilter = 'blur(5px)'}) ;
    corps.addEventListener('mouseout',function() { canvas.style.WebkitFilter = 'none'}) ;
})();

// Apparition de la vidéo quand on clique sur le titre pour la section gâteries
(function(){
    var videoPipe = document.createElement('iframe'),
        titreGaterie = document.getElementById('titreGateries'),
        compteur = 0,
        compteurMouseOver = 0,
        toolTip = document.createElement('div'),
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
    toolTip.innerHTML = "Un bonus se cache </br> derrière le titre..." ;

    titreGaterie.appendChild(toolTip) ;

    titreGaterie.addEventListener('click',function(){
        compteur++ ;
        if (compteur%2===1) {
            titreGaterie.appendChild(videoPipe);
            titreGateries.style.height = '600px';
            setTimeout(affiche,200) ;
        } else {
            titreGaterie.style.height = '100px';
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
})() ;

// Apparition de la liste de liens quand on clique sur le paragraphe Pam
(function(){
    var Pam = document.getElementById('listePam'),
        pPam = Pam.firstElementChild,
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
    pPam.addEventListener('click',function(){
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
        fenetreBlur = document.getElementById('fenetreBlur'),
        texte = "<p>Toutes les images en arrière plan </br>sont des captures d'écran </br>des (bons) films suivants :</p>",
        texteIfop = "<p>Les données utilisées pour réaliser ce site ont été récupérées auprès de l'<a href='http://www.ifop.com/?option=com_homepage' target='_blank'>Ifop</a>. Elles ont été recueillies lors d'une enquête menée à la demande du journal <a href='http://www.marianne.net/Cette-semaine-dans-Marianne-Les-Francais-la-politique-et-le-sexe_a238936.html' target='_blank'>Marianne</a>, dans le but d'étudier les relations entre sexualité et positionnement politique. Nous remercions l'Ifop d'avoir gracieusement mis à notre disposition les résultats de cette enquête.</p><p> Les graphiques interactifs ont été réalisés avec <a href='http://www.highcharts.com' target='_blank'>Highcharts</a> ou <a href='https://datawrapper.de' target='_blank'>Datawrapper</a>.</p>",
        films = [ {
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
        filmList = document.getElementById('filmList'),
        sourceDonnees = document.getElementById('sourceDonnees'),
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
            } else {
                toolIfop.style.top = a+'%' ;
                toolIfop.style.left = b+'%' ;
                toolIfop.style.opacity = '1' ;
                toolIfop.style.zIndex = '7' ;
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
            
            toolIfop.style.top = a+'' ;
            toolIfop.style.left = b+'' ;
            toolIfop.style.opacity = '0' ;
            toolIfop.style.zIndex = '-1' ;
            
            fenetreBlur.style.opacity = '0' ;
            fenetreBlur.style.zIndex = '-1' ;
        };
    
    for (i = 0,n=films.length;i<n;i++){
        texte = texte + "<p><a href=" + films[i].lien + " target='_blank'>"+films[i].nom+"</a></p>" ;
    };
    texte = texte + "<p> Le code javascript à l'origine des spermatozoïdes baladeurs est disponible <a href='http://paperjs.org/examples/tadpoles/' target='_blank'>ici</a>.</p>" ;
    toolTip.innerHTML = texte ;
    toolIfop.innerHTML = texteIfop ;
    
    filmList.addEventListener('click',function(e) {
        blurer(e) ;
    });
    sourceDonnees.addEventListener('click',function(e){
        blurer(e) ;
    });
    fenetreBlur.addEventListener('click',function(e){
        cleaner(e) ;
    });
 })();

