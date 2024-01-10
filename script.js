document.addEventListener('DOMContentLoaded', function() {
    var arrow = document.getElementById('arrow');
    var angle = 0;
    setInterval(function() {
        angle += 45; // Ändra vinkeln med 45 grader
        arrow.style.transform = 'rotate(' + angle + 'deg)';
    }, 200); // Uppdatera varje sekund
});
