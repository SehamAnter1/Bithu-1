// Change nav Backgroun when Scrolling
let nav = document.getElementById("navbar");
window.addEventListener("scroll", (e) => {
    if (this.scrollY > 50) {
        nav.classList.add("changeBg");
    } else {
        nav.classList.remove("changeBg");
    }
});

let menu = document.getElementById("navContainer"),
    openMenu = document.getElementById("open_btn"),
    closeMenu = document.getElementById("close_btn");
let logo = document.getElementById("logo");
openMenu.addEventListener("click", () => {
    menu.classList.add("collapse");
    logo.style.display = "none";
    openMenu.style.opacity = 0;
});
document.addEventListener("click", (element) => {
    if (
        element.target.id != "open_btn" &&
        element.target.parentElement.id != "open_btn" &&
        element.target.id != "navContainer"
    ) {
        menu.classList.remove("collapse");
        openMenu.style.opacity = 1;
        logo.style.display = "block";
    }
});

// landing counter

window.addEventListener("load", () => {
    let count = document.querySelector(".counter");
    countDown(count, 500);
});
function countDown(counter, speed) {
    let target = counter.dataset.count;
    let counting = setInterval(() => {
        counter.textContent++;
        if (counter.textContent == target) {
            clearInterval(counting);
        }
    }, speed / target);
}
let Section = document.getElementById("countNumber"),
    counterContainer = document.querySelectorAll(".counterContainer li"),
    startedFunction = false;
window.addEventListener("scroll", () => {
    let top = this.scrollY;
    let windowHeight = this.innerHeight;
    let numberTop = Section.offsetTop;
    let numberHeight = Section.offsetHeight;
    if (top >= numberTop + numberHeight - windowHeight) {
        if (!startedFunction) {
            counterContainer.forEach((num) => {
                countDown(num.querySelector("h3"), 1000);
            });
        }
        startedFunction = true;
    }
});
// according
let show = document.querySelectorAll(".accordion"),
    sign = document.querySelectorAll(".accordion_container i");

show.forEach((question) => {
    question.addEventListener("click", () => {
        if (question.classList.contains("active")) {
            question.classList.toggle("active");
            if (question.classList.contains("active")) {
                addMinus(question.querySelector("i"));
            } else {
                removeMinus(question.querySelector("i"));
            }
        } else {
            show.forEach((element) => {
                element.classList.remove("active");
            });
            question.classList.add("active");
            sign.forEach((e) => {
                e.classList.remove("fa-minus");
                e.classList.add("fa-plus");
            });
            addMinus(question.querySelector("i"));
        }
    });
});
function addMinus(selector) {
    selector.classList.remove("fa-plus");
    selector.classList.add("fa-minus");
}
function removeMinus(selector) {
    selector.classList.add("fa-plus");
    selector.classList.remove("fa-minus");
}
