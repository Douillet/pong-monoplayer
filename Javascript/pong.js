

let terrain= new Terrain($("#terrain"));  //Créé le terrain

let balle= new Balle($("#balle"));        //Créé la balle

let vie= new Vie($(".vie"));       //Créé la barre de vie
let score= new Score($(".score")); //Créé le score

let raquetteGauche=new Raquette($("#gauche")); //Créé les deux raquettes
let raquetteDroite=new Raquette($("#droite"));

let demarrer = false

setInterval(function() //Créé une fonction qui s'exécute toute les 10 millisecondes (le 10 à la fin)
{
    if(demarrer) {
        balle.mouvementetrebond();

        raquetteGauche.deplacement();

        raquetteDroite.deplacement();
    }
    //Appelle des classes correspondant aux objets et de leur fonction
    if(vie.compteur < 1 ) {
        demarrer = false;
        vie.compteur = 5;
    }


}, 10);


$("#btn-jouer").on("click", function (e) {
    e.preventDefault();
    demarrer=true;
    $(".ecran-debut").addClass("invisible");
});

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return
    }
    event.preventDefault();
    if (event.key === "h") {
        raquetteGauche.monter();
    }
    if (event.key === "b") {
        raquetteGauche.descendre();
    }
    if (event.key === "b") {
        raquetteDroite.monter();
    }
    if (event.key === "h") {
        raquetteDroite.descendre();
    }
    event.preventDefault();
}, true);
window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) {
        return
    }
    event.preventDefault();
    if (event.key === "h" || event.key === "b") {
        raquetteGauche.arret();
    }
    if (event.key === "b" || event.key === "h") {
        raquetteDroite.arret();
    }
}, true);