class Joueur{
    constructor($element){
        this.$element = $element;
        this.cote = 0; //0 si c'est le coté gauche et 1 si c'est le coté droit
        this.score = 0;
    }
    ajoutScore(){
        this.score += 1;
        this.$element.text(this.score);
    }
}