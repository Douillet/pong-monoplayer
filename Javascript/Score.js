class Score{
    constructor($element){
        this.$element = $element;
        this.score = 0;
    }
    ajoutScore(){
        this.score += 10;
        this.$element.text(this.score);
    }
}