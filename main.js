$(document).ready(function(){

// Al click del pulsante next richiamo la mia funzione che mi fa scorrere le imgs in avanti
$('.next').click(function(){
    nextImg();
});


// Al click del pulsante prev richiamo la mia funzione che mi fa scorrere le imgs all'indientro
$('.prev').click(function(){
    prevImg();
});


//*** funzioni ***//

function nextImg(){ //** Funzione Next **//

    var activeImg = $('.images img.active'); //memorizzo in una var l'img attiva
    var activeDot = $('.nav i.active');

    activeImg.removeClass('active'); //tolgo la classe active all'img
    activeDot.removeClass('active'); //tolgo la classe active al pallino


    if (activeImg.hasClass('last')){
        $('.images img.first').addClass('active');
        $('.nav i.first').addClass('active');
    } else {
        activeImg.next().addClass('active'); //aggiungo la classe active all'img successiva (con .next())
        activeDot.next().addClass('active'); //aggiungo la classe active al pallino successivo (con .next())
    }
}

function prevImg(){
    var activeImg = $('.images img.active');
    var activeDot = $('.nav i.active');

    activeImg.removeClass('active');
    activeDot.removeClass('active');

    if (activeImg.hasClass('first')){
        $('.images img.last').addClass('active');
        $('.nav i.last').addClass('active');
    } else {
        activeImg.prev().addClass('active');
        activeDot.prev().addClass('active'); //aggiungo la classe active al pallino precedente (con .prev())
    }
}

});