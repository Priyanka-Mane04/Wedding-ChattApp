(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).on("scroll", function () {
        $(".navbar").toggleClass("d-flex", $(this).scrollTop() > 200).fadeToggle("slow");
    });

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on("click", function (event) {
        if (this.hash) {
            event.preventDefault();

            $("html, body").animate(
                { scrollTop: $(this.hash).offset().top - 45 },
                1500,
                "easeInOutExpo"
            );

            $(".navbar-nav .active").removeClass("active");
            $(this).closest("li").addClass("active");
        }
    });

    // Modal Video
    $(document).ready(function () {
        $(".btn-play").on("click", function () {
            const videoSrc = $(this).data("src");
            $("#videoModal").on("shown.bs.modal", function () {
                $("#video").attr("src", videoSrc + "?autoplay=1&modestbranding=1&showinfo=0");
            }).on("hide.bs.modal", function () {
                $("#video").attr("src", "");
            });
        });
    });

    // Scroll to Bottom
    $(window).on("scroll", function () {
        $(".scroll-to-bottom").toggleClass("d-none", $(this).scrollTop() > 100);
    });

    // Portfolio isotope and filter
    $(document).ready(function () {
        let portfolioIsotope = $(".portfolio-container").isotope({
            itemSelector: ".portfolio-item",
            layoutMode: "fitRows"
        });

        $("#portfolio-flters li").on("click", function () {
            $("#portfolio-flters li").removeClass("active");
            $(this).addClass("active");
            portfolioIsotope.isotope({ filter: $(this).data("filter") });
        });
    });

    // Back to top button
    $(window).on("scroll", function () {
        $(".back-to-top").toggleClass("d-none", $(this).scrollTop() <= 200);
    });

    $(".back-to-top").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return false;
    });

    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 4 },
            1200: { items: 5 }
        }
    });

})(jQuery);
