const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");
const initialTheme = savedTheme === "light" ? "light" : "dark";

document.documentElement.dataset.theme = initialTheme;

function updateThemeToggle() {
  const isLight = document.documentElement.dataset.theme === "light";
  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme",
  );
}

if (themeToggle) {
  updateThemeToggle();
  themeToggle.addEventListener("click", function () {
    const nextTheme =
      document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
    updateThemeToggle();
  });
}

var achieve = document.getElementById("ll-ach");
if (achieve) {
  achieve.addEventListener("click", function (e) {
    window.location.href = "achievements.html";
  });
}
var mini = document.getElementById("MINI()");
if (mini) {
  mini.addEventListener("click", function (e) {
    window.location.href = "";
  });
}
var Ach = document.getElementById("Ach");
if (Ach) {
  Ach.addEventListener("click", function (e) {
    window.location.href = "https://starzz90.github.io/EnzoSite";
  });
}
var Code = document.getElementById("ll-code");
if (Code) {
  Code.addEventListener("click", function (e) {
    window.location.href = "coding.html";
  });
}
var home = document.getElementById("home");
if (home) {
  home.addEventListener("click", function (e) {
    window.location.href = "index.html";
  });
}
var exp = document.getElementById("ll-exp-t");
if (exp) {
  exp.addEventListener("click", function (e) {
    window.location.href = "experience.html";
  });
}
var Eng = document.getElementById("ll-eng");
if (Eng) {
  Eng.addEventListener("click", function (e) {
    window.location.href = "engineering.html";
  });
}
function Engineering() {
  window.location.href = "engineering.html";
}
function Retur() {
  window.location.href = "index.html";
}
function Cod() {
  window.location.href = "coding.html";
}
function Experience() {
  window.location.href = "experience.html";
}

const SideLive = document.querySelector(".LIVE-BAR");
const Side = document.querySelector(".sidebar");
const topNav = document.querySelector(".top-nav");
const differ = document.querySelector(".differ");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

const observer = new MutationObserver(() => {
  const SideLiveStyle = window.getComputedStyle(SideLive).display !== "none";
  Side.style.display = SideLiveStyle ? "none" : "block";
  topNav.style.display = SideLiveStyle ? "flex" : "none";
  differ.style.display = SideLiveStyle ? "flex" : "none";
  left.style.display = SideLiveStyle ? "flex" : "block";
  right.style.display = SideLiveStyle ? "flex" : "block";
});

observer.observe(SideLive, { attributes: true, attributeFilter: ["style"] });

var ra = document.getElementById("ra");
if (ra) {
  ra.addEventListener("click", function (e) {
    ra.classList.toggle("hovered");
  });
}

function buttonToggle() {
  document.getElementById("hidden").style.display = "block";
}

var hidden = document.getElementById("hidden");
var tog = document.getElementById("bugle");

if (tog) {
  tog.addEventListener("click", function (e) {
    hidden.classList.toggle("hovered");
  });
}

var mini = document.getElementById("minis");
var achieved = document.getElementById("archie");

function minis() {
  window.location.href = "https://github.com/Starzz90/MINI-PROJECTS";
}
if (achieved) {
  achieved.addEventListener("click", function (e) {
    window.location.href = "https://starzz90.github.io/EnzoSite";
  });
}
function updateCertificateLinks() {
  const cards = document.querySelectorAll(".achieve-card");

  cards.forEach(function (card) {
    const link = card.querySelector(".redirect");
    const image = card.querySelector(".certs img");

    if (!link || !image) return;

    const imageSrc = image.getAttribute("src");
    if (imageSrc) {
      link.setAttribute("href", imageSrc);
    }
  });
}

if (
  document.querySelector(".achieve-card") &&
  document.querySelector(".redirect")
) {
  window.addEventListener("load", updateCertificateLinks);
}
