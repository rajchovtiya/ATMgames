$(() => {
    let menuber = document.querySelector(".menuber")
    let navresponsiv = document.querySelector(".navresponsiv")
    menuber.addEventListener("click", () => {
        navresponsiv.classList.toggle("hidden");
    })


    $('.multiple-items').slick({
        slidesToShow: 3.7,
        slidesToScroll: 3,
        autoplaySpeed: 2000,
        prevArrow: $('.leftarrow'),
        nextArrow: $('.rightarrow'),
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }
        ]
    });
})


