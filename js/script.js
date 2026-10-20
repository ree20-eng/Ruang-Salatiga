
const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        function () {

            nav.classList.toggle("open");

        }
    );

}


document
    .querySelectorAll(".nav a")
    .forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                nav.classList.remove("open");

            }
        );

    });



const header =
    document.getElementById("siteHeader");


window.addEventListener(
    "scroll",
    function() {

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }
);


const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("show");

                        observer
                            .unobserve(
                                entry.target
                            );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    function(element) {

        observer.observe(element);

    }
);


const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav a"
    );


window.addEventListener(
    "scroll",
    function() {

        let current =
            "home";


        sections.forEach(
            function(section) {

                const top =
                    section.offsetTop - 180;


                if (
                    window.scrollY >= top
                ) {

                    current =
                        section.id;

                }

            }
        );


        navLinks.forEach(
            function(link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) === "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", function () {
    history.replaceState(null, "", window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
});