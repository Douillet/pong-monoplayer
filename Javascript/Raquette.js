class Raquette{
    constructor($element){
        this.$element=$element
        //let $raquette = $(".raquette","gauche");
        //Rappelle des infos graphiques du CSS pour correspondre colision, mouvement et visuel
        this.haut=parseInt($element.css("top"));
        this.gauche=parseInt($element.css("left"));
        this.largeur=parseInt($element.css("width"));
        this.hauteur=parseInt($element.css("height"));
        
        

        this.vitesse=3; //Vitesse de déplacement automatique de la raquette
        this.direction=0; //+1 fait descendre, -1 fait monter
    }

    get droite(){
        return this.gauche+this.largeur;
    }
    set droite(value){
        this.gauche = value - this.largeur;
    }

    get bas(){
        return this.haut+this.hauteur;
    }
    set bas(value){
        this.haut = value - this.hauteur
    }


    deplacement()
    {
        this.haut = this.haut + this.vitesse*this.direction; //vitesse comprenant la direction 
        this.limitedemouvements();
        this.majHTML();
        //console.log($element.css("width"));
    }

    monter()
    {
        this.direction=-1;
    }
    descendre()
    {
        this.direction=1;
    }
    arret()
    {
        this.direction=0;
    }
    limitedemouvements(){
        if(this.bas>terrain.hauteur){ //permet à la raquette de remonter quand elle touche le bas du terrain
            this.bas=terrain.hauteur
            this.direction=0;}
        if(this.haut<0){//permet à la raquette de redescendre quand elle touche le haut du terrain
            this.haut=0
            this.direction=0;
        }
    }
    tiltRaquetteDroite() {
        //ajouter une classe du css
        this.$element.addClass("tiltRaquetteDroite");
        let buffer = this;

        setTimeout(
            function () {
                //retirer une classe au bout de 200 millisecondes
                buffer.$element.removeClass("tiltRaquetteDroite");
            }, 500
        );
    }
    tiltRaquetteGauche() {
        //ajouter une classe du css
        this.$element.addClass("tiltRaquetteGauche");
        let buffer = this;

        setTimeout(
            function () {
                //retirer une classe au bout de 200 millisecondes
                buffer.$element.removeClass("tiltRaquetteGauche");
            }, 500
        );
    }
    majHTML(){
        this.$element.css("top", this.haut); //actualisation du CSS
}

}