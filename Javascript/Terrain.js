class Terrain
{
    constructor($element)
    {
        //Appelle les variables du fichier CSS
        this.$element=$element;
        this.largeur=$element.width();
        this.hauteur=$element.height();
    }

tiltHaut() {
    //ajouter une classe du css
    this.$element.addClass("tiltHaut");
    let buffer = this;

    setTimeout(
        function () {
            //retirer une classe au bout de 200 millisecondes
            buffer.$element.removeClass("tiltHaut");
        }, 200
    );
}

tiltBas() {
    //ajouter une classe du css
    this.$element.addClass("tiltBas");
    let buffer = this;

    setTimeout(
        function () {
            //retirer une classe au bout de 200 millisecondes
            buffer.$element.removeClass("tiltBas");
        }, 200
    );
}

tiltDroite() {
    //ajouter une classe du css 
    this.$element.addClass("tiltDroite");
    let buffer = this;

    setTimeout(
        function () {
            //retirer une classe au bout de 200 millisecondes
            buffer.$element.removeClass("tiltDroite");
        }, 200
    );
}

tiltGauche() {
    //ajouter une classe du css
    this.$element.addClass("tiltGauche");
    let buffer = this;

    setTimeout(
        function () {
            //retirer une classe au bout de 200 millisecondes
            buffer.$element.removeClass("tiltGauche");
        }, 200
    );
}
}