document.addEventListener('DOMContentLoaded', function () {
    const parallaxBg = document.querySelector('.parallax-bg');

    document.addEventListener('mousemove', function (e) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        parallaxBg.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
    });
});
