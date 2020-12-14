

let terrain= new Terrain($("#terrain"));  //Créé le terrain

let balle= new Balle($("#balle"));        //Créé la balle

let joueur0 = new Joueur($("#Sgauche"))   //Créé les joueurs pour les scores
let joueur1 = new Joueur($("#Sdroite"))

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
    if (event.key === "a") {
        raquetteGauche.monter();
    }
    if (event.key === "q") {
        raquetteGauche.descendre();
    }
    if (event.key === "p") {
        raquetteDroite.monter();
    }
    if (event.key === "m") {
        raquetteDroite.descendre();
    }
    event.preventDefault();
}, true);
window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) {
        return
    }
    event.preventDefault();
    if (event.key === "a" || event.key === "q") {
        raquetteGauche.arret();
    }
    if (event.key === "p" || event.key === "m") {
        raquetteDroite.arret();
    }
}, true);