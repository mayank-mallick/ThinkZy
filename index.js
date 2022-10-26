// Responsive nav 
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

// sticky navigation
const sectionMain = document.querySelector(".section-main");
const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
}
);
observer.observe(sectionMain);