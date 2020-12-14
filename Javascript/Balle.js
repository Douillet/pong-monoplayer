class Balle{
    constructor($element){
        /*Permet d'appeler les informations saisies dans le code CSS pour faire correspondre
        les données de colisions et avec les données graphiques*/
        this.$element=$element;
        //coordonnées de la balles
        
        this.haut=parseInt($element.css("top"));
        this.gauche=parseInt($element.css("left"));
        
        //taille de la balle
        this.largeur=parseInt(($element).css("width"));
        this.hauteur=parseInt(($element).css("height"));
        
        //Configure la vitesse de la balle
        this.vitesseX= 1.5;//-Math.random()*10;  //selon la largeur IL FAUT ÉQUILIBRER LA VITESSE
        this.vitesseY= 1-Math.random()*2;  //selon la hauteur
        this.vitesseXmax= 5; //Cap de la vitesse Mac
        this.directionX= 1;
        this.directionY= 1;
    }
    //Permet d'actualiser ces termes dans le CSS
    majHTML(){
        this.$element.css("left",this.gauche);
        this.$element.css("top",this.haut);
        this.$element.css("width",this.largeur);
        this.$element.css("height",this.hauteur);
    }

    get droite(){ //créé la coordonnée droite
        return this.largeur+this.gauche;
    }
    set droite(value){ //récupère la coordonnée droite
        this.gauche = value - this.largeur;
    }
    get bas(){ //créé la coordonnée bas
        return this.hauteur+this.haut;
    }
    set bas(value){ //récupère la coordonnée bas
        this.haut = value - this.hauteur;
    }

    devieDirectionG() { //fonction qui permet de faire varier la direction de la balle selon l'endroit où elle rebondit sur la raquette
        //valeur entre 0 et 1
        let facteur = (this.bas - raquetteGauche.hauteur) / (raquetteGauche.haut + this.hauteur);  //produit en croix
        //valeur entre -0.25 et 0.25
        //facteur = facteur - 0.5;
        this.vitesseY = facteur * 3;
}
    devieDirectionD() { //fonction qui permet de faire varier la direction de la balle selon l'endroit où elle rebondit sur la raquette
        //valeur entre 0 et 1

        let facteur = (this.bas - raquetteDroite.hauteur) / (raquetteDroite.haut + this.hauteur);  //produit en croix
        //valeur entre -0.25 et 0.25
        //facteur = facteur - 0.5;
        this.vitesseY = facteur * 3;
    }

    mouvementetrebond() {
        this.gauche = this.gauche + this.vitesseX*this.directionX; //Donne un mouvement à la balle vers la droite
        this.haut = this.haut + this.vitesseY*this.directionY; //Donne un mouvement à la balle vers le bas

        //Collisions avec le terrain

       
        //bord bas
        if (this.bas > terrain.hauteur) {
            this.bas = terrain.hauteur;
            this.directionY = this.directionY* -1;
            terrain.tiltBas();
        }
        //bord haut
        if (this.haut < 0) {
            this.haut = 0;
            this.directionY = this.directionY * -1;
            terrain.tiltHaut();
        }

        //Collisions avec les raquettes
        //raquette droite
        if (this.droite >= raquetteDroite.gauche) { //conditions de rebond
            if (this.haut < raquetteDroite.bas) {
                if (this.bas > raquetteDroite.haut) {
                    this.droite = raquetteDroite.gauche;
                    this.directionX *= -1;
                    this.devieDirectionD();
                    raquetteDroite.tiltRaquetteDroite();
                    if (this.vitesseX < this.vitesseXmax) { //accélération
                        this.vitesseX += 0.25;
                        console.log(this.bas, "a");
                        console.log(raquetteDroite.haut, "b");
                        console.log(raquetteDroite.hauteur, "c");
                        console.log(this.hauteur, "a");
                        console.log((this.bas + raquetteDroite.haut) / (raquetteDroite.hauteur + this.hauteur));
                    } else {
                        this.vitesseX= this.vitesseXmax; //cap de la vitessemax
                        
                    }
                        
                    
                }
            }
        }

        //raquette gauche
        if (this.gauche <= raquetteGauche.droite) { //conditions de rebond
            if (this.bas > raquetteGauche.haut) {
                if (this.haut < raquetteGauche.bas) {
                    this.gauche = raquetteGauche.droite;
                    this.devieDirectionG()
                    raquetteGauche.tiltRaquetteGauche();
                    if (this.vitesseX < this.vitesseXmax) { //accélération
                        this.vitesseX += 0.25;
                        this.directionX *= -1;
                        console.log(this.directionY, "b");
                    } else {
                        this.vitesseX= this.vitesseXmax; //cap de la vitessemax
                        this.directionX *= -1;
                    }
                }
            }
        }
        
        //bord droit
        if (this.droite > terrain.largeur) {
            this.retouraucentre(); //expliqué en bas de code
            //this.droite=terrain.largeur;
            this.vitesseX = 2.5;
            this.directionX *= -1;
            terrain.tiltDroite();  //fait clignoter le terrain
            joueur0.ajoutScore();  //fait augmenter le score du joueur de gauche
        }
        //bord gauche
        if (this.gauche < 0) {
            this.retouraucentre(); //expliqué en bas de code
            this.vitesseX = 2.5;
            this.directionX *= -1;
            terrain.tiltGauche();  //fait clignoter le terrain 
            joueur1.ajoutScore();  //fait augmenter le score du joueur de droite
        }

    this.majHTML(); //Actualiser le CSS

}
    retouraucentre() //focntion renvoyant la balle au milieu
    {
        this.gauche = terrain.largeur / 2 - this.largeur/2;
        this.haut = terrain.hauteur / 2 - this.hauteur/2;
        this.vitesseY= 2-Math.random()*4; //modifie la direction verticale de manière à aléatoir à nouveau
    }
}

