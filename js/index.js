$(document).ready(function(){
    $('.slider').slick({
        arrows:true,//стрелки включены //
        dots:true, //кнопки включены//
        adaptiveHeight:true, //адаптация по высоте //
        slidesToShow:3, // количество слайдов для отображения за раз//
        slidesToScroll:1, //прокручивается по ... страниц//
        speed:1000,
        easing:'linear', //стиль анимации //
        infinite:true, // бесконечный ли слайд//
        initialSlide:0, // стартуем с 0 слайда//
        autoplay:true, // автоматическое проигрывание слайдера//
        autoplaySpeed:1500,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        draggble:false,// отключение прокрутки слайдера мышкой на компе//
        swipe:true, // отключение прокрутки слайдера мышкой на мобиле //
        touchThreshold: 5, // //
        touchMove: true, // передвижение пальцем по экрану//
        waitForAnimate:false, // анимация происходит только после окончания анимации предыдущего//
        centerMode:false, //главный слайд по центру//
        variableWidth:false, //убирает расстояние м-ду картинками//
        rows:1, //картинки в ... ряда //
        slidesPerRow:1, //количество слайдов для отображения увеличивается в... раз //
        vertical:false, //вкл вертикальный слайдер//
        verticalSwiping:false, // вертикальная прокрутка, для верт слайдера//
        asNavFor:'.sliderbig', //связывание 2х слайдеров//
        responsive:[
            {
                breakpoint:768,
                settings:{
                    slidesToShow:2, 
                }
            },{
                breakpoint:565,
                settings:{
                    slidesToShow:1, 
                }
            },
        ]
    });
    $('.sliderbig').slick({
        arrows:false,
        fade:true,
        slidesToShow:1,
        asNavFor:'.slider',
    });
//любой элемент можно сделать управляющими:право,лево//
    $('.link_l').click(function(event) {
        $('slider').slick('slickPrev');
    });
    $('.link_r').click(function(event) {
        $('slider').slick('slickNext');
    });
}); 