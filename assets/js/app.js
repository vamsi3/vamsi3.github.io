particlesJS.load('particles-js', 'assets/particles.json', function() {});
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})
$(document).ready(function() {
    var colors = ['#8064a2', '#5bc0de', 'black', '#d9534f', 'green'];
    var buttons = ['btn-outline-dark', 'btn-outline-info', 'btn-outline-dark', 'btn-outline-danger', 'btn-outline-success'];
    var idx = Math.floor(Math.random() * colors.length);
    var col = colors[idx],
        btn = buttons[idx];
    $('#particles-js').css('background-color', col);
    $('a[role="button"]').addClass(btn);
    $('a[class="dropdown-item"]').addClass(btn);
    $('button').addClass(btn);
});
