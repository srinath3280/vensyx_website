window.addEventListener('scroll',reveal3);
function reveal3(){
    var reveals3 = document.querySelectorAll('.reveal3');
    for(var i=0;i<reveals3.length;i++){
        var windowheight3 = window.innerHeight;
        var revealtop3 = reveals3[i].getBoundingClientRect().top;
        var revealpoint3 = 100;

        if(revealtop3 < windowheight3 - revealpoint3){
            reveals3[i].classList.add('active');
        }
        else{
            reveals3[i].classList.remove('active');
        }
    }
}
