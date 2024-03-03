window.addEventListener('scroll',reveal1);
function reveal1(){
    var reveals1 = document.querySelectorAll('.reveal1');
    for(var i=0;i<reveals1.length;i++){
        var windowheight1 = window.innerHeight;
        var revealtop1 = reveals1[i].getBoundingClientRect().top;
        var revealpoint1 = 100;

        if(revealtop1 < windowheight1 - revealpoint1){
            reveals1[i].classList.add('active');
        }
        else{
            reveals1[i].classList.remove('active');
        }
    }
}