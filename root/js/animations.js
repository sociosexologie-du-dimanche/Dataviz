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
    }) ;
    // Création d'un tooltip !
    titreGaterie.firstElementChild.firstElementChild.addEventListener('mouseover',function(){
        compteurMouseOver++ ;
        if (compteurMouseOver === 1 ) { toolTip.style.opacity = '1' } ;
    }) ;
    titreGaterie.firstElementChild.firstElementChild.addEventListener('mouseout',function(){
        toolTip.style.opacity = '0' ;
    }) ;
})() ;


