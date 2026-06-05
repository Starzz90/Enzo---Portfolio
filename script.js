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
const top = document.querySelector(".top-nav");
const differ = document.querySelector(".differ");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

const observer = new MutationObserver(() => {
  const SideLiveStyle = window.getComputedStyle(SideLive).display !== "none";
  Side.style.display = SideLiveStyle ? "none" : "block";
  top.style.display = SideLiveStyle ? "flex" : "none";
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

const icons = document.querySelectorAll(".image-container");
const identity = document.getElementById("identity");
const box = document.querySelector(".box");

icons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    if (box) {
      box.style.display = "flex";
    }
    if (identity) {
      identity.textContent = icon.getAttribute("data-name");
    }
  });
  icon.addEventListener("mouseleave", () => {
    if (box) {
      box.style.display = "none";
    }
    if (identity) {
      identity.textContent = "";
    }
  });
});

const hideButton = document.querySelector("button#hide");
const hiddenDiv = document.querySelector(".hidden");

if (hideButton && hiddenDiv) {
  hideButton.addEventListener("click", function () {
    const isHidden = window.getComputedStyle(hiddenDiv).display === "none";
    hiddenDiv.style.display = isHidden ? "block" : "none";
    hideButton.textContent = isHidden
      ? "CLICK TO HIDE OTHERS"
      : "CLICK TO VIEW OTHERS";
  });
}
