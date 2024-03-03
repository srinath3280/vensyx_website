window.addEventListener('scroll',reveal2);
function reveal2(){
    var reveals2 = document.querySelectorAll('.reveal2');
    for(var i=0;i<reveals2.length;i++){
        var windowheight2 = window.innerHeight;
        var revealtop2 = reveals2[i].getBoundingClientRect().top;
        var revealpoint2 = 100;

        if(revealtop2 < windowheight2 - revealpoint2){
            reveals2[i].classList.add('active');
        }
        else{
            reveals2[i].classList.remove('active');
        }
    }
}
