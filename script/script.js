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
    let game_container = document.querySelector(".game-container")
    let data = async () => {
        game_container.children = ""
        let jsondeta = await fetch("deta.json")
        let sconddeta = await jsondeta.json()
        let name = localStorage.getItem("link_name");
        sconddeta.forEach((e) => {
            e.Description.forEach((em) => {
                if (e.title_name == JSON.parse(name)) {
                    let p = document.createElement("p")
                    let p2 = document.createElement("p")
                    let p3 = document.createElement("p")
                    let p4 = document.createElement("p")
                    let p5 = document.createElement("p")
                    let p6 = document.createElement("p")

                    p.classList.add("textcolor")
                    p2.classList.add("textcolor")
                    p3.classList.add("textcolor")
                    p4.classList.add("textcolor")
                    p5.classList.add("textcolor")
                    p6.classList.add("textcolor")
                    p.innerText = em.text1
                    p2.innerText = em.text2
                    p3.innerText = em.text3
                    p4.innerText = em.text4
                    p5.innerText = em.text5
                    p6.innerText = em.text6
                    game_container.appendChild(p)
                    game_container.appendChild(p2)
                    game_container.appendChild(p3)
                    game_container.appendChild(p4)
                    game_container.appendChild(p5)
                    game_container.appendChild(p6)

                }
            })


        })

    }

    data()
})


