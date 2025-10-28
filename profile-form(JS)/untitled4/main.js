const swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    loop: false,
    speed: 800,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    keyboard: {enabled: true},
});

const links = document.querySelectorAll(".Links li");

function Navigate(index) {
    swiper.slideTo(index);
    setActiveLink(index);
}

function setActiveLink(index) {
    links.forEach((li, i) => {
        li.classList.toggle("activeList", i === index);
    });
}

document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.textContent.includes("Contact")) {
            Navigate(4);
        } else if (btn.textContent.includes("Hire")) {
            Navigate(4);
        }
    });
});

const contactForm = document.querySelector(".contactMe form");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("✅ پیام شما ارسال شد (شبیه‌سازی).");
        contactForm.reset();
    });
}

swiper.on("slideChange", () => {
    setActiveLink(swiper.activeIndex);
});