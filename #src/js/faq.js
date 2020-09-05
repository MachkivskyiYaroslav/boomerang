var $btn = document.getElementById('nav-icon');
$btn.addEventListener('click', function () {
    $btn.classList.toggle('open');
});
var el = document.getElementsByClassName('link_collapse');
for (let i = 0; i < el.length; i++) {
    el[i].addEventListener('click',function () {
        el[i].classList.toggle('active__link__collapse')
    })
}
