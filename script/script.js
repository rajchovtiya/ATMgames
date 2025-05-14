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
    let multiple_items = document.querySelectorAll(".multiple-items2 a img");
    multiple_items.forEach((e) => {
        e.addEventListener("click", (event) => {
            let deta = event.target.getAttribute("secondlink");
            let name = event.target.getAttribute("name");
            localStorage.setItem("link", JSON.stringify(deta));
            localStorage.setItem("link_name", JSON.stringify(name));

        });
    });


    let hoverimg = document.querySelectorAll(".hoverimg a img");

    hoverimg.forEach((e) => {
        e.addEventListener("mousemove", (em) => {
            // Check if <p> already exists
            let existing = e.parentElement.querySelector("p.ahover");
            if (!existing) {
                let nameimg = em.target.getAttribute("alt");
                let p = document.createElement("p");
                p.innerText = nameimg;
                p.classList.add("ahover");
                e.parentElement.appendChild(p);
            }
        });

        e.addEventListener("mouseleave", () => {
            let existing = e.parentElement.querySelector("p.ahover");
            if (existing) {
                existing.remove();
            }
        });
    });

    let blur = document.querySelector("#blur")
    let close = document.querySelector(".close")
    let AD_class = document.querySelector(".AD_class")
    close.addEventListener("click", () => {
        blur.classList.remove("blur-md")
        AD_class.classList.add("hidden")
    })


})

$(() => {

    let multiple_items = document.querySelectorAll(".multiple-items2 a img");
    multiple_items.forEach((e) => {
        e.addEventListener("click", (event) => {
            let deta = event.target.getAttribute("secondlink");
            let name = event.target.getAttribute("name");
            localStorage.setItem("link", JSON.stringify(deta));
            localStorage.setItem("link_name", JSON.stringify(name));

        });
    });

    let deat = JSON.parse(localStorage.getItem("link"));
    let name = JSON.parse(localStorage.getItem("link_name"));

    let game_iframe = document.querySelector("iframe");
    let heding = document.querySelector(".heding")
    if (deat && game_iframe) {
        game_iframe.src = deat;
    }
    heding.innerText = name


    let hoverimg = document.querySelectorAll(".hoverimg a img");

    hoverimg.forEach((e) => {
        e.addEventListener("mousemove", (em) => {
            // Check if <p> already exists
            let existing = e.parentElement.querySelector("p.ahover");
            if (!existing) {
                let nameimg = em.target.getAttribute("alt");
                let p = document.createElement("p");
                p.innerText = nameimg;
                p.classList.add("ahover");
                e.parentElement.appendChild(p);
            }
        });

        e.addEventListener("mouseleave", () => {
            let existing = e.parentElement.querySelector("p.ahover");
            if (existing) {
                existing.remove();
            }
        });
    });


});

$(() => {
    let data = async () => {
        let jsondeta = await fetch("deta.json")
        let sconddeta = await jsondeta.json()
        console.log(sconddeta)
    }

    data()
})

