document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const icon = document.querySelectorAll('.menu-toggle .icon .bar');
    const nav = document.querySelector('.nav');

    menuToggle.classList.toggle('active');
    icon.forEach(bar => bar.classList.toggle('active'));
    nav.classList.toggle('active');
});
function clearInput() {
    document.getElementById('text-input').value = '';
}

const redirect = () => window.location.href = "./index.html";

