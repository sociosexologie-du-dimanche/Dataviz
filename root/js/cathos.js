// test 

var imagesCathos = document.getElementById('imagesCathos'),     // Récupération des div contenant les iamges
    imagesAthees = document.getElementById('imagesAthees'),
    chiffre = document.getElementById('chiffreInfoCathos'),     // Récupération de la div contenant les chiffres
    // Remplissage variables de texte contenant les chiffres
    texteDepart = "Survolez les <a href='https://youtu.be/dExlgiBADhI' target='_blank' class='lienCache'>petits bonhommes</a> pour voir les chiffres !",
    texteCathoOui = "Cathos ayant eu une expérience homo : <span class='chiffre'>12%</span>" ,
    texteCathoNon = "Cathos n'ayant pas eu une d'expérience homo : <span class='emph'>88%</span>",
    texteAtheeOui = "Non-religieux ayant eu une expérience homo : <span class='chiffre'>16%</span>" ,
    texteAtheeNon = "Non-religieux n'ayant pas eu une d'expérience homo : <span class='emph'>84%</span>",
    // HTML à insérer dans les div span pour avoir l'image
    cathoOui = "<img src='Images/cathoOui.png'/>" ,
    cathoNon = "<img src='Images/cathoNon.png'/>",
    atheeOui = "<img src='Images/atheeOui.png'/>" ,
    atheeNon = "<img src='Images/atheeNon.png'/>";
    
var petitBloc , autreReligion ; // Variables utilisées dans la boucle initialisées ici

// On va faire la même chose pour les deux lignes de bonhommes, donc on fait une fonction
var alignerImages = function (religion,imageOui,imageNon,nombreOui) {
    
    // Les deux boucles for ajoutent en ligne les images en utilisant des span
    for (i=0;i<nombreOui;i++) {
        petitBloc = document.createElement('span') ;
        petitBloc.setAttribute('id','span'+i) ;
        petitBloc.setAttribute('class','oui') ;
        religion.appendChild(petitBloc) ;
        petitBloc.innerHTML = imageOui ;
    }

    for (i=0;i<20-nombreOui;i++) {
        petitBloc = document.createElement('span') ;
        petitBloc.setAttribute('id','span'+i) ;
        petitBloc.setAttribute('class','non') ;
        religion.appendChild(petitBloc) ;
        petitBloc.innerHTML = imageNon ;
    }

    // Réaction des bonhommes lors du survol de la souris
    religion.addEventListener('mouseover', function(e){
        
        // On enregistre quelle religion/non-religion est survolée
        reliSur = e.target.parentElement.parentElement ;
        (reliSur.id === 'imagesCathos') ? autreReligion = imagesAthees : autreReligion = imagesCathos ;
        
        // selon que c'est les images oui ou non qui sont survolées, on opacifie les autres et on affiche la bonne réponse
        if (e.target.parentElement.className === 'oui') {
            nons = document.querySelectorAll('#' + reliSur.id + ' .non') ;
            for (j=0,n=nons.length;j<n;j++){
                nons[j].style.opacity = '0.5' ;
            }
            (reliSur.id === 'imagesCathos') ? chiffre.innerHTML = texteCathoOui : chiffre.innerHTML = texteAtheeOui ;
        } else if (e.target.parentElement.className === 'non') {
            ouis = document.querySelectorAll('#'+ reliSur.id + ' .oui') ;
            for (j=0,n=ouis.length;j<n;j++){
                ouis[j].style.opacity = '0.5' ;
            }
            (reliSur.id === 'imagesCathos') ? chiffre.innerHTML = texteCathoNon : chiffre.innerHTML = texteAtheeNon ;
        }
        
        // on opacifie également l'autre ligne d'images pour plus de lisibilité ;
        autreReligion.style.opacity = '0.5' ;
    });

    // lorsque la souris sort des images, tout redevient normal et on raffiche le texte de départ
    religion.addEventListener('mouseout', function(e){
        nons = document.querySelectorAll('.non') ;
        ouis = document.querySelectorAll('.oui') ;
        for (j=0,n=ouis.length;j<n;j++){
            ouis[j].style.opacity = '1' ;
        }
        for (j=0,n=nons.length;j<n;j++){
            nons[j].style.opacity = '1' ;
        }
        chiffre.innerHTML = texteDepart ;
        imagesCathos.style.opacity = '1' ;
        imagesAthees.style.opacity = '1' ;
    });
}

chiffre.innerHTML = texteDepart ; // remplissage par le texte de départ à l'ouverture de la page

alignerImages(imagesCathos,cathoOui,cathoNon,3) ;
alignerImages(imagesAthees,atheeOui,atheeNon,4) ;
