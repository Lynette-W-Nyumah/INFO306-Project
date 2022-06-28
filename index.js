



//JS codes for the scroll Effects
window.addEventListener('scroll',reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i<reveals.length; i++){

        var wins = window.innerHeight;
        var mid = reveals[i].getBoundingClientRect().top;
        var nums = 100;

        if(mid < wins - nums){
            reveals[i].classList.add('active');
        }

        else{
            reveals[i].classList.remove('active');

        }

    }
}

