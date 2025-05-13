$(() => {
    let menuber = document.querySelector(".menuber")
    let navresponsiv = document.querySelector(".navresponsiv")
    menuber.addEventListener("click", () => {
        navresponsiv.classList.toggle("hidden");
    })


    $('.multiple-items').slick({
        slidesToShow: 3.5,
        slidesToScroll: 3.5,
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
    let multiple_items = document.querySelectorAll(".multiple-items a img");
    multiple_items.forEach((e) => {
        e.addEventListener("click", (event) => {
            let deta = event.target.getAttribute("secondlink");
            let name = event.target.getAttribute("name");
            localStorage.setItem("link", JSON.stringify(deta));
            localStorage.setItem("link_name", JSON.stringify(name));

        });
    });

    let hoverimg = document.querySelector(".hoverimg")
    let hoverimgp = document.querySelector(".hoverimg p")

    hoverimg.children[0].addEventListener("mousemove", () => {
        hoverimgp.style.opacity = 1;
    })
    hoverimg.children[0].addEventListener("mouseleave", () => {
        hoverimgp.style.opacity = 0;
    })

})

$(() => {
    let deat = JSON.parse(localStorage.getItem("link"));
    let name = JSON.parse(localStorage.getItem("link_name"));

    let game_iframe = document.querySelector("iframe");
    let heding = document.querySelector(".heding")
    if (deat && game_iframe) {
        game_iframe.src = deat;
    }
    heding.innerText = name
});


