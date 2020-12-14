class Vie{
    constructor($element){
        this.$element = $element;
        this.compteur = 5;
    }
    perds(){
        this.compteur = this.compteur - 1 ;
        this.$element.text(this.compteur);
    }
}