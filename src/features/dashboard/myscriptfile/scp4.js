window.addEventListener('scroll',reveal4);
function reveal4(){
    var reveals4 = document.querySelectorAll('.reveal4');
    for(var i=0;i<reveals4.length;i++){
        var windowheight4 = window.innerHeight;
        var revealtop4 = reveals4[i].getBoundingClientRect().top;
        var revealpoint4 = 100;

        if(revealtop4 < windowheight4 - revealpoint4){
            reveals4[i].classList.add('active');
        }
        else{
            reveals4[i].classList.remove('active');
        }
    }
}
