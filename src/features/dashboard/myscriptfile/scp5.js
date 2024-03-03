window.addEventListener('scroll',reveal5);
function reveal5(){
    var reveals5 = document.querySelectorAll('.reveal5');
    for(var i=0;i<reveals5.length;i++){
        var windowheight5 = window.innerHeight;
        var revealtop5 = reveals5[i].getBoundingClientRect().top;
        var revealpoint5 = 100;

        if(revealtop5 < windowheight5 - revealpoint5){
            reveals5[i].classList.add('active');
        }
        else{
            reveals5[i].classList.remove('active');
        }
    }
}
