var $btn = document.getElementById('nav-icon');
$btn.addEventListener('click', function () {
    $btn.classList.toggle('open');
});


$(document).ready(function(){
    $(".forgot").click(function(){
        $("#modalForgot").modal('show');
    });
});
