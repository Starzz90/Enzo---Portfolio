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

  let touchStart = null;
  viewport.addEventListener("pointerdown", function (event) {
    if (!event.isPrimary || event.pointerType !== "touch") return;
    touchStart = { x: event.clientX, y: event.clientY };
  });
  viewport.addEventListener("pointerup", function (event) {
    if (!touchStart || event.pointerType !== "touch") return;
    const deltaX = event.clientX - touchStart.x;
    const deltaY = event.clientY - touchStart.y;
    touchStart = null;
    if (Math.abs(deltaX) < 45 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) {
      return;
    }
    (deltaX < 0 ? nextButton : previousButton).click();
  });
  viewport.addEventListener("pointercancel", function () {
    touchStart = null;
  });

  window.addEventListener("resize", positionTrack);
  updateSlideState();
  positionTrack();
}

initializeAchievementCarousel();

function initializePortfolioTools() {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const progress = document.createElement("div");
  progress.className = "portfolio-scroll-progress";
  progress.setAttribute("role", "progressbar");
  progress.setAttribute("aria-label", "Page reading progress");
  progress.setAttribute("aria-valuemin", "0");
  progress.setAttribute("aria-valuemax", "100");
  const progressBar = document.createElement("span");
  progress.appendChild(progressBar);
  document.body.appendChild(progress);

  const tools = document.createElement("div");
  tools.className = "portfolio-tools";

  const searchButton = document.createElement("button");
  searchButton.className = "portfolio-tool-button portfolio-search-button";
  searchButton.type = "button";
  searchButton.setAttribute("aria-label", "Search this portfolio");
  searchButton.title = "Search this portfolio (Ctrl+K)";
  searchButton.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg>';

  const topButton = document.createElement("button");
  topButton.className = "portfolio-tool-button portfolio-top-button";
  topButton.type = "button";
  topButton.setAttribute("aria-label", "Back to top");
  topButton.title = "Back to top";
  topButton.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>';

  tools.append(searchButton, topButton);
  document.body.appendChild(tools);

  function updateScrollProgress() {
    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const percentage =
      scrollableHeight > 0
        ? Math.min(100, Math.round((window.scrollY / scrollableHeight) * 100))
        : 0;
    progressBar.style.transform = "scaleX(" + percentage / 100 + ")";
    progress.setAttribute("aria-valuenow", String(percentage));
    topButton.classList.toggle("is-visible", window.scrollY > 320);
  }

  let scrollUpdatePending = false;
  window.addEventListener(
    "scroll",
    function () {
      if (scrollUpdatePending) return;
      scrollUpdatePending = true;
      window.requestAnimationFrame(function () {
        updateScrollProgress();
        scrollUpdatePending = false;
      });
    },
    { passive: true },
  );
  window.addEventListener("resize", updateScrollProgress);
  updateScrollProgress();

  topButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  });

  const searchDialog = document.createElement("dialog");
  searchDialog.className = "portfolio-search-dialog";
  searchDialog.setAttribute("aria-label", "Search this portfolio");
  searchDialog.innerHTML =
    '<div class="portfolio-search-panel"><div class="portfolio-search-heading"><label for="portfolio-search-input">Search this portfolio</label><button class="portfolio-dialog-close" type="button" aria-label="Close search">×</button></div><input id="portfolio-search-input" class="portfolio-search-input" type="search" placeholder="Try “award”, “project”, or a skill…" autocomplete="off"><p class="portfolio-search-hint">Press Ctrl+K to open · Esc to close</p><div class="portfolio-search-results" role="listbox" aria-label="Search results"></div><p class="portfolio-search-status" role="status" aria-live="polite"></p></div>';
  document.body.appendChild(searchDialog);

  const searchInput = searchDialog.querySelector(".portfolio-search-input");
  const searchResults = searchDialog.querySelector(".portfolio-search-results");
  const searchStatus = searchDialog.querySelector(".portfolio-search-status");

  function collectSearchItems() {
    const items = [];
    const visited = new Set();
    const addItem = function (item) {
      if (!item.label || visited.has(item.key)) return;
      visited.add(item.key);
      items.push(item);
    };

    document.querySelectorAll(".sidebar a[href], .top-nav a[href]").forEach(
      function (link) {
        const href = link.getAttribute("href");
        const label =
          link.textContent.trim() ||
          link.getAttribute("aria-label") ||
          link.getAttribute("title") ||
          href;
        addItem({
          key: "link:" + href,
          label: label,
          detail: "Open page",
          href: href,
        });
      },
    );

    document.querySelectorAll("h1, h2, h3").forEach(function (heading) {
      if (heading.closest(".achieve-card, .work-card, .Project-card, .Project-card-n, .Uni-card")) {
        return;
      }
      const label = heading.textContent.trim();
      addItem({
        key: "heading:" + label,
        label: label,
        detail: "Section on this page",
        element: heading,
      });
    });

    document
      .querySelectorAll(
        ".achieve-card, .work-card, .Project-card, .Project-card-n, .Uni-card, .specs-card, .add-card",
      )
      .forEach(function (card, index) {
        if (card.closest('.achievement-carousel-slide[aria-hidden="true"]')) {
          return;
        }
        const heading = card.querySelector(
          "h1, h2, h3, h4, .project-name, .job, .identity",
        );
        const label =
          (heading && heading.textContent.trim()) ||
          card.textContent.trim().replace(/\s+/g, " ").slice(0, 72);
        const detail = card.textContent.trim().replace(/\s+/g, " ").slice(0, 180);
        addItem({
          key: "card:" + index + ":" + label,
          label: label,
          detail: detail,
          element: card,
        });
      });

    return items;
  }

  function renderSearchResults() {
    const query = searchInput.value.trim().toLocaleLowerCase();
    searchResults.replaceChildren();
    const allMatches = collectSearchItems()
      .filter(function (item) {
        return (
          !query ||
          (item.label + " " + item.detail).toLocaleLowerCase().includes(query)
        );
      });
    const matches = allMatches.slice(0, 12);

    matches.forEach(function (item) {
      const result = document.createElement("button");
      result.className = "portfolio-search-result";
      result.type = "button";
      result.setAttribute("role", "option");
      const title = document.createElement("strong");
      title.textContent = item.label;
      const detail = document.createElement("span");
      detail.textContent = item.detail;
      result.append(title, detail);
      result.addEventListener("click", function () {
        if (item.href) {
          window.location.href = item.href;
          return;
        }
        searchDialog.close();
        item.element.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
          block: "center",
        });
        item.element.tabIndex = -1;
        item.element.focus({ preventScroll: true });
      });
      searchResults.appendChild(result);
    });

    searchStatus.textContent = matches.length
      ? allMatches.length > matches.length
        ? "Showing " + matches.length + " of " + allMatches.length + " results"
        : allMatches.length + " results"
      : "No matching sections or items.";
  }

  function openSearch() {
    if (!searchDialog.open) {
      searchDialog.showModal();
      searchInput.value = "";
      renderSearchResults();
      searchInput.focus();
    }
  }

  searchButton.addEventListener("click", openSearch);
  searchDialog
    .querySelector(".portfolio-dialog-close")
    .addEventListener("click", function () {
      searchDialog.close();
    });
  searchInput.addEventListener("input", renderSearchResults);
  searchDialog.addEventListener("click", function (event) {
    if (event.target === searchDialog) searchDialog.close();
  });
  document.addEventListener("keydown", function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openSearch();
    }
  });

  const imageDialog = document.createElement("dialog");
  imageDialog.className = "portfolio-image-dialog";
  imageDialog.setAttribute("aria-label", "Image preview");
  imageDialog.innerHTML =
    '<div class="portfolio-image-panel"><button class="portfolio-dialog-close portfolio-image-close" type="button" aria-label="Close image preview">×</button><button class="portfolio-image-nav portfolio-image-previous" type="button" aria-label="Previous image">‹</button><figure><img class="portfolio-preview-image" alt=""><figcaption class="portfolio-image-caption"></figcaption></figure><button class="portfolio-image-nav portfolio-image-next" type="button" aria-label="Next image">›</button></div>';
  document.body.appendChild(imageDialog);

  const previewImage = imageDialog.querySelector(".portfolio-preview-image");
  const imageCaption = imageDialog.querySelector(".portfolio-image-caption");
  const previousImageButton = imageDialog.querySelector(
    ".portfolio-image-previous",
  );
  const nextImageButton = imageDialog.querySelector(".portfolio-image-next");
  let galleryImages = [];
  let currentImageIndex = 0;

  function showPreviewImage(index) {
    currentImageIndex =
      (index + galleryImages.length) % galleryImages.length;
    const image = galleryImages[currentImageIndex];
    previewImage.src = image.currentSrc || image.src;
    previewImage.alt = image.alt || imageCaption.textContent;
    imageCaption.textContent = image.dataset.previewCaption;
    const hasMultipleImages = galleryImages.length > 1;
    previousImageButton.hidden = !hasMultipleImages;
    nextImageButton.hidden = !hasMultipleImages;
    imageDialog.setAttribute(
      "aria-label",
      "Image preview, " +
        (currentImageIndex + 1) +
        " of " +
        galleryImages.length,
    );
  }

  function openImagePreview(image) {
    galleryImages = Array.from(
      document.querySelectorAll(
        ".certif, .certif-exp, .project-img",
      ),
    ).filter(function (candidate) {
      return candidate.naturalWidth > 0;
    });
    currentImageIndex = galleryImages.indexOf(image);
    if (currentImageIndex < 0) return;
    showPreviewImage(currentImageIndex);
    imageDialog.showModal();
  }

  document.addEventListener("click", function (event) {
    const image =
      event.target instanceof Element
        ? event.target.closest(".certif, .certif-exp, .project-img")
        : null;
    if (!image || image.naturalWidth === 0) return;
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    openImagePreview(image);
  });

  document.addEventListener("keydown", function (event) {
    const image =
      event.target instanceof Element
        ? event.target.closest(".certif, .certif-exp, .project-img")
        : null;
    if (image && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openImagePreview(image);
      return;
    }
    if (!imageDialog.open) return;
    if (event.key === "ArrowLeft") showPreviewImage(currentImageIndex - 1);
    if (event.key === "ArrowRight") showPreviewImage(currentImageIndex + 1);
  });

  previousImageButton.addEventListener("click", function () {
    showPreviewImage(currentImageIndex - 1);
  });
  nextImageButton.addEventListener("click", function () {
    showPreviewImage(currentImageIndex + 1);
  });
  imageDialog
    .querySelector(".portfolio-image-close")
    .addEventListener("click", function () {
      imageDialog.close();
    });
  imageDialog.addEventListener("click", function (event) {
    if (event.target === imageDialog) imageDialog.close();
  });

  function makePreviewImagesAccessible() {
    document
      .querySelectorAll(".certif, .certif-exp, .project-img")
      .forEach(function (image) {
        if (image.naturalWidth === 0 || image.dataset.previewReady) return;
        const card = image.closest(
          ".achieve-card, .work-card, .Project-card, .Project-card-n",
        );
        const heading =
          card && card.querySelector("h2, h3, .project-name, .job");
        const caption =
          (heading && heading.textContent.trim()) ||
          image.alt ||
          image.src.split("/").pop();
        image.dataset.previewCaption = caption;
        image.dataset.previewReady = "true";
        image.tabIndex = 0;
        image.setAttribute("role", "button");
        image.setAttribute("aria-label", "Preview image: " + caption);
      });
  }

  makePreviewImagesAccessible();
  document.querySelectorAll(".certif, .certif-exp, .project-img").forEach(
    function (image) {
      image.addEventListener("load", makePreviewImagesAccessible, {
        once: true,
      });
    },
  );
}

initializePortfolioTools();

document
  .querySelectorAll(".stack .five-column-image .image-container")
  .forEach(function (item) {
    const names = {
      html: "HTML5",
      css: "CSS3",
      js: "JavaScript",
      py: "Python",
      php: "PHP",
      sql: "MySQL",
      wind: "Tailwind CSS",
      VS: "Visual Studio Code",
      git: "GitHub",
      Fig: "Figma",
      Pycharm: "PyCharm",
      Canva: "Canva",
    };
    const name = item.dataset.name || names[item.id] || item.id;
    item.tabIndex = 0;
    item.setAttribute("aria-label", name + " stack icon");

    const tooltip = document.createElement("span");
    tooltip.className = "stack-item-tooltip";
    tooltip.setAttribute("aria-hidden", "true");
    tooltip.textContent = name;
    item.appendChild(tooltip);
  });
