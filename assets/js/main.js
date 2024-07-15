const header = document.querySelector(".header");
const toTop = document.querySelector(".to__top");
const main = document.querySelector(".main");

window.onscroll = function () {
  if (this.scrollY > 150 && window.innerWidth > 768) {
    header.style.position = "fixed";
    header.style.opacity = "0.8";
  } else {
    header.style.position = "static";
    header.style.opacity = "1";
  }
  if (this.scrollY > 150) {
    main.style.paddingTop = "150px";
    toTop.style.bottom = "30px";
  } else {
    main.style.paddingTop = "0";
    toTop.style.bottom = "-100px";
  }
};


toTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// navMenu

const humburger = document.querySelector(".humburger");
const navMenu = document.querySelector(".navbar");
humburger.addEventListener("click", function () {
  if (!navMenu.classList.contains("menu__active")) {
    navMenu.classList.add("menu__active");
    document.body.style.overflow = "hidden";
  } else {
    navMenu.classList.remove("menu__active");
    document.body.style.overflow = "";
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > "768") {
    navMenu.classList.remove("menu__active");
    document.body.style.overflow = "";
  }
});

//Language

const language = document.querySelector(".language");
const lang = document.querySelector(".lang");
const langs = document.querySelector(".langs");
const langLi = document.querySelectorAll(".langs li");
const globe = document.querySelector(".globe");

language.addEventListener("mouseover", function () {
  langs.style.display = "block";
  globe.style.transform = "rotate(180deg)"
  globe.style.color = "var(--brown)"
});
language.addEventListener("mouseout", function () {
  langs.style.display = "none";
  globe.style.transform = "rotate(0)"
  globe.style.color = "var(--cream)"

});

langLi.forEach(function (li) {
  li.addEventListener("click", function () {
    let langContent = lang.textContent;
    lang.textContent = li.textContent;
    li.textContent = langContent;
    langs.style.display = "none";
  });
});


//Language Mob

const languageMob = document.querySelector(".language__mob");
const langMob = document.querySelector(".lang__mob");
const langsMob = document.querySelector(".langs__mob");
const langLiMob = document.querySelectorAll(".langs__mob li");

languageMob.addEventListener("mouseover", function () {
  langsMob.style.display = "block";

});
languageMob.addEventListener("mouseout", function () {
  langsMob.style.display = "none";

});
langLiMob.forEach(function (li) {
  li.addEventListener("mouseover", function () {
    let langContent = langMob.textContent;
    langMob.textContent = li.textContent;
    li.textContent = langContent;
    langsMob.style.display = "none";
  });
});


// webkit
const webkit = document.querySelector(".text p");
webkit.addEventListener("click", function () {
  webkit.classList.toggle("d-block");
});