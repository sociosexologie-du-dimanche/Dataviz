// test 

var imagesCathos = document.getElementById('imagesCathos'),
    imagesAthees = document.getElementById('imagesAthees'),
    chiffre = document.getElementById('chiffreInfoCathos'),
    texteDepart = "Survolez les <a href='https://youtu.be/dExlgiBADhI' target='_blank' class='lienCache'>petits bonhommes</a> pour voir les chiffres !",
    texteCathoOui = "Cathos ayant eu une expérience homo : <span class='chiffre'>12%</span>" ,
    texteCathoNon = "Cathos n'ayant pas eu une d'expérience homo : <span class='emph'>88%</span>",
    texteAtheeOui = "Non-religieux ayant eu une expérience homo : <span class='chiffre'>16%</span>" ,
    texteAtheeNon = "Non-religieux n'ayant pas eu une d'expérience homo : <span class='emph'>84%</span>",
    cathoOui = "<img src='Images/cathoOui.png'/>" ,
    cathoNon = "<img src='Images/cathoNon.png'/>",
    atheeOui = "<img src='Images/atheeOui.png'/>" ,
    atheeNon = "<img src='Images/atheeNon.png'/>";
    
var petitBloc , autreReligion ;

var alignerImages = function (religion,imageOui,imageNon,nombreOui) {
    
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

    religion.addEventListener('mouseover', function(e){
        reliSur = e.target.parentElement.parentElement ;
        (reliSur.id === 'imagesCathos') ? autreReligion = imagesAthees : autreReligion = imagesCathos ;
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
        autreReligion.style.opacity = '0.5' ;
    });

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

chiffre.innerHTML = texteDepart ;
/*
for (i=0;i<3;i++) {
    petitBloc = document.createElement('span') ;
    petitBloc.setAttribute('id','span'+i) ;
    petitBloc.setAttribute('class','oui') ;
    images.appendChild(petitBloc) ;
    petitBloc.innerHTML = cathoOui ;
}


for (i=0;i<17;i++) {
    petitBloc = document.createElement('span') ;
    petitBloc.setAttribute('id','span'+i) ;
    petitBloc.setAttribute('class','non') ;
    images.appendChild(petitBloc) ;
    petitBloc.innerHTML = cathoNon ;
}

images.addEventListener('mouseover', function(e){
        if (e.target.parentElement.className === 'oui') {
            nons = document.querySelectorAll('.non') ;
            for (j=0,n=nons.length;j<n;j++){
                nons[j].style.opacity = '0.5' ;
            }
            chiffre.innerHTML = texteNon ;
        } else if (e.target.parentElement.className === 'non') {
            ouis = document.querySelectorAll('.oui') ;
            for (j=0,n=ouis.length;j<n;j++){
                ouis[j].style.opacity = '0.5' ;
            }
            chiffre.innerHTML = texteOui ;

        }
    });

images.addEventListener('mouseout', function(e){
    nons = document.querySelectorAll('.non') ;
    ouis = document.querySelectorAll('.oui') ;
    for (j=0,n=ouis.length;j<n;j++){
        ouis[j].style.opacity = '1' ;
    }
    for (j=0,n=nons.length;j<n;j++){
        nons[j].style.opacity = '1' ;
    }
    chiffre.innerHTML = texteDepart ;
});
*/

alignerImages(imagesCathos,cathoOui,cathoNon,3) ;
alignerImages(imagesAthees,atheeOui,atheeNon,4) ;
