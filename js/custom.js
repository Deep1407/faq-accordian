// JavaScript Document
jQuery('#custom-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


const questions = document.querySelectorAll('.qusn');

questions.forEach((qusn) => qusn.addEventListener('click', () => {
    if(qusn.parentNode.classList.contains('active')){
        qusn.parentNode.classList.toggle('active');
    }
    else
    {
        questions.forEach((qusn) => qusn.parentNode.classList.remove('active'));
        qusn.parentNode.classList.add('active');
    }
}));