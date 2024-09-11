$(document).ready(function () {
    // Page loader
    setTimeout(function () {
        $('#loader').fadeOut();
        $('#main-content').removeClass('hidden');
    }, 1500);

    // Lazy load images
    $('.lazyload').Lazy();

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
});

<script>
    document.querySelector('.navbar-toggle').addEventListener('click', function() {
        document.querySelector('.navbar ul').classList.toggle('active')
    });
</script>


