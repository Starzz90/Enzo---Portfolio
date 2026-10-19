const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");
const initialTheme = savedTheme === "light" ? "light" : "dark";

document.documentElement.dataset.theme = initialTheme;

function initializeBackgroundDots() {
  const canvas = document.createElement("canvas");
  canvas.className = "background-dots";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);

  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Unable to initialize the background dot canvas.");
  }

  let dots = [];
  let width = 0;
  let height = 0;

  function drawDots(timestamp = 0) {
    const color = getComputedStyle(document.body)
      .getPropertyValue("--page-pattern")
      .trim();
    context.clearRect(0, 0, width, height);
    context.fillStyle = color;
    dots.forEach(function (dot) {
      const motion = timestamp * dot.speed + dot.phase;
      context.beginPath();
      context.arc(
        dot.x + Math.sin(motion) * 3,
        dot.y + Math.cos(motion) * 3,
        1,
        0,
        Math.PI * 2,
      );
      context.fill();
    });
  }

  function randomizeDots() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    const targetCount = Math.round((width * height) / 250);
    const minimumDistance = 8;
    const minimumDistanceSquared = minimumDistance * minimumDistance;
    const gridSize = minimumDistance;
    const grid = new Map();
    dots = [];

    for (
      let attempt = 0;
      attempt < targetCount * 10 && dots.length < targetCount;
      attempt++
    ) {
      const dot = {
        x: Math.random() * width,
        y: Math.random() * height,
        phase: Math.random() * Math.PI * 2,
        speed: 0.0005 + Math.random() * 0.001,
      };
      const gridX = Math.floor(dot.x / gridSize);
      const gridY = Math.floor(dot.y / gridSize);
      let hasNearbyDot = false;

      for (let x = gridX - 1; x <= gridX + 1 && !hasNearbyDot; x++) {
        for (let y = gridY - 1; y <= gridY + 1 && !hasNearbyDot; y++) {
          const neighbors = grid.get(x + "," + y) || [];
          hasNearbyDot = neighbors.some(function (other) {
            const dx = dot.x - other.x;
            const dy = dot.y - other.y;
            return dx * dx + dy * dy < minimumDistanceSquared;
          });
        }
      }

      if (!hasNearbyDot) {
        dots.push(dot);
        const cellKey = gridX + "," + gridY;
        const cellDots = grid.get(cellKey) || [];
        cellDots.push(dot);
        grid.set(cellKey, cellDots);
      }
    }

    drawDots();
  }

  randomizeDots();
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    function animateDots(timestamp) {
      drawDots(timestamp);
      window.requestAnimationFrame(animateDots);
    }

    window.requestAnimationFrame(animateDots);
  }
  window.addEventListener("resize", randomizeDots);
  new MutationObserver(drawDots).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
}

initializeBackgroundDots();

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

function initializeAchievementCarousel() {
  if (!document.getElementById("bugle")) return;

  const groups = Array.from(
    document.querySelectorAll(".triple-column, .double-column"),
  );
  const cards = Array.from(
    document.querySelectorAll(".achieve-card, .work-card"),
  ).filter(function (card) {
    return !card.closest("#hidden");
  });

  if (cards.length < 2) return;

  const firstGroup = groups.find(function (group) {
    return group.contains(cards[0]);
  });
  const carouselParent = firstGroup
    ? firstGroup.parentElement
    : cards[0].parentElement;
  const insertBefore = firstGroup || cards[0];

  const carousel = document.createElement("section");
  carousel.className = "achievement-carousel";
  carousel.setAttribute("role", "region");
  carousel.setAttribute("aria-roledescription", "carousel");
  carousel.setAttribute("aria-label", "Achievements");

  const viewport = document.createElement("div");
  viewport.className = "achievement-carousel-viewport";
  viewport.tabIndex = 0;

  const track = document.createElement("div");
  track.className = "achievement-carousel-track";

  function createSlide(card, index, isClone) {
    const slideCard = isClone ? card.cloneNode(true) : card;
    const slide = document.createElement("div");
    slide.className = "achievement-carousel-slide";
    slide.setAttribute("role", "group");
    slide.setAttribute("aria-roledescription", "slide");
    slide.setAttribute("aria-label", (index + 1) + " of " + cards.length);
    if (isClone) {
      slideCard.querySelectorAll("[id]").forEach(function (element) {
        element.removeAttribute("id");
      });
    }
    slide.appendChild(slideCard);
    return slide;
  }

  track.appendChild(createSlide(cards[cards.length - 1], cards.length - 1, true));
  cards.forEach(function (card, index) {
    track.appendChild(createSlide(card, index, false));
  });
  track.appendChild(createSlide(cards[0], 0, true));

  viewport.appendChild(track);

  const controls = document.createElement("div");
  controls.className = "achievement-carousel-controls";

  const previousButton = document.createElement("button");
  previousButton.className = "achievement-carousel-button";
  previousButton.type = "button";
  previousButton.setAttribute("aria-label", "Previous achievement");
  previousButton.textContent = "‹";

  const position = document.createElement("span");
  position.className = "achievement-carousel-position";
  position.setAttribute("aria-live", "polite");

  const nextButton = document.createElement("button");
  nextButton.className = "achievement-carousel-button";
  nextButton.type = "button";
  nextButton.setAttribute("aria-label", "Next achievement");
  nextButton.textContent = "›";

  controls.append(previousButton, position, nextButton);
  carousel.append(viewport, controls);

  carouselParent.insertBefore(carousel, insertBefore);
  groups.forEach(function (group) {
    group.remove();
  });

  let currentIndex = 1;
  function updateSlideState() {
    const logicalIndex = (currentIndex - 1 + cards.length) % cards.length;
    position.textContent = (logicalIndex + 1) + " / " + cards.length;

    track.querySelectorAll(".achievement-carousel-slide").forEach(
      function (slide, index) {
        const isActive = index === currentIndex;
        slide.setAttribute("aria-hidden", isActive ? "false" : "true");
        slide.inert = !isActive;
      },
    );
  }

  function positionTrack() {
    const activeSlide = track.children[currentIndex];
    const trackLeft = track.getBoundingClientRect().left;
    const activeSlideRect = activeSlide.getBoundingClientRect();
    const offset =
      viewport.clientWidth / 2 -
      (activeSlideRect.left - trackLeft) -
      activeSlide.offsetWidth / 2;
    track.style.transform = "translateX(" + offset + "px)";
  }

  function showSlide(index) {
    currentIndex = index;
    updateSlideState();
    positionTrack();
  }

  track.addEventListener("transitionend", function (event) {
    if (event.target !== track || event.propertyName !== "transform") return;

    if (currentIndex === 0 || currentIndex === cards.length + 1) {
      currentIndex = currentIndex === 0 ? cards.length : 1;
      track.style.transition = "none";
      updateSlideState();
      positionTrack();
      track.offsetHeight;
      track.style.transition = "";
    }
  });

  previousButton.addEventListener("click", function () {
    const baseIndex =
      currentIndex === 0
        ? cards.length
        : currentIndex === cards.length + 1
          ? 1
          : currentIndex;
    showSlide(baseIndex - 1);
  });

  nextButton.addEventListener("click", function () {
    const baseIndex =
      currentIndex === cards.length + 1
        ? 1
        : currentIndex === 0
          ? cards.length
          : currentIndex;
    showSlide(baseIndex + 1);
  });

  viewport.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      previousButton.click();
    } else if (event.key === "ArrowRight") {
      nextButton.click();
    } else {
      return;
    }

    event.preventDefault();
  });

  window.addEventListener("resize", positionTrack);
  updateSlideState();
  positionTrack();
}

initializeAchievementCarousel();
