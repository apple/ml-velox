//
// For licensing see accompanying LICENSE file.
// Copyright (C) 2026 Apple Inc. All Rights Reserved.
//

const sequences = [
  "penguin",
  "elephant",
  "breakdance",
  "pinwheel",
  "01782ab4a2994d0a89e58ef96e951958_a000_s0000_fskip1",
  "01bc463ae3be41da9ac26dcac6033592_a000_s0000_fskip1",
  "da8bbcb226fc4b2a862e94a4c5ce1930_a000_s0000_fskip1",
  // "fire_bird",
  "1465385cb2ec498a9b9e289e98cdf2c7_a000_s0000_fskip1",
  "2b900b9f10224c4cb9f8504e39afe801_a000_s0000_fskip1",
  // "31877c54-cdad-5612-b079-e7170ae067e8_a000_s0000_fskip1",
  "5cd6145d750a43e7b4b475144aea8c2a_a000_s0000_fskip1",
  // "b1565602acf2441db8c60b4ee3535aa7_a000_s0000_fskip1",
  "c5cd6c62599943fdb0851db41f92000f_a000_s0000_fskip1",
];

// Map sequence name → { handle, url } for asset attribution.
// Fill in each entry; cards with a null value show no badge.
const creators = {
  "penguin":                                                  { handle: "Taryn Elliott", url: "https://www.pexels.com/video/penguin-walking-on-beach-9116187/", license: "Pexels License" },
  "elephant":                                                 { handle: "Veo3", url: "https://deepmind.google/models/veo/", license: "Google Veo 3 Terms" },
  "breakdance":                                               { handle: "TAP-Vid-DAVIS", url: "https://tapvid.github.io/", license: "CC" },
  "pinwheel":                                                { handle: "Lise", url: "https://www.pexels.com/video/colorful-spinning-pinwheel-10052068/", license: "Pexels License" },
  "01782ab4a2994d0a89e58ef96e951958_a000_s0000_fskip1":      { handle: "624230037", url: "https://sketchfab.com/3d-models/624230037-peasant-girl-breakdance-1990-fbx-01782ab4a2994d0a89e58ef96e951958", license: "CC Attribution" },
  "01bc463ae3be41da9ac26dcac6033592_a000_s0000_fskip1":      { handle: "acharlie2019", url: "https://sketchfab.com/3d-models/sora-invisible-key-slash-combo-01bc463ae3be41da9ac26dcac6033592", license: "CC Attribution" },
  "da8bbcb226fc4b2a862e94a4c5ce1930_a000_s0000_fskip1":      { handle: "dylansburner", url: "https://sketchfab.com/3d-models/yellow-joy-butterfly-da8bbcb226fc4b2a862e94a4c5ce1930", license: "CC Attribution" },
  // "fire_bird":      { handle: "zaykora the clown", url: "https://sketchfab.com/3d-models/0ca19efb8c6741bda5a634cad8ef1b7b", license: "CC Attribution" },
  "1465385cb2ec498a9b9e289e98cdf2c7_a000_s0000_fskip1":      { handle: "paula1221965", url: "https://sketchfab.com/3d-models/swimming-fish-1465385cb2ec498a9b9e289e98cdf2c7", license: "CC Attribution" },
  "2b900b9f10224c4cb9f8504e39afe801_a000_s0000_fskip1":      { handle: "lawrencetrigg1989", url: "https://sketchfab.com/3d-models/grevillea-animation-2b900b9f10224c4cb9f8504e39afe801", license: "CC Attribution" },
  // "31877c54-cdad-5612-b079-e7170ae067e8_a000_s0000_fskip1":  { handle: "ggadwa", url: "https://github.com/ggadwa/WSJS_Demo_Kart/blob/f3efc7870822ce42b033091c907ccaac8b39d6c9/models/retro_car_red/retro_car_red.gltf", license: "MIT License" },
  "5cd6145d750a43e7b4b475144aea8c2a_a000_s0000_fskip1":      { handle: "acharlie2019", url: "https://sketchfab.com/3d-models/lana-loud-capoeira-moves-5cd6145d750a43e7b4b475144aea8c2a", license: "CC Attribution" },
  // "b1565602acf2441db8c60b4ee3535aa7_a000_s0000_fskip1":      { handle: "raynart7", url: "https://sketchfab.com/3d-models/pip-victory-final-b1565602acf2441db8c60b4ee3535aa7", license: "CC Attribution" },
  "c5cd6c62599943fdb0851db41f92000f_a000_s0000_fskip1":      { handle: "ginapalumbo", url: "https://sketchfab.com/3d-models/pesce-combattente-c5cd6c62599943fdb0851db41f92000f", license: "CC Attribution" },
};

// Per-sequence loop-mode override. Sequences not listed default to the
// viewer's built-in ping-pong (forward + backward) playback.
const loopOverrides = {
  "pinwheel": "forward",
};

const viewer = document.getElementById("viewer");
const indicatorsContainer = document.getElementById("viewer-indicators");

const cards = [];
const indicators = [];

sequences.forEach((name) => {
  const videoSrc = `./assets/gaussians/${name}/input_video_whitebg.mp4`;
  const loopParam = loopOverrides[name] ? `&loop=${loopOverrides[name]}` : "";
  const url = `viewer.html?sequence=${encodeURIComponent(name)}${loopParam}`;

  const wrapper = document.createElement("div");
  wrapper.className = "card-wrapper";

  const card = document.createElement("a");
  card.className = "card";
  card.href = url;
  card.innerHTML = `<video src="${videoSrc}" muted autoplay loop playsinline></video>`;

  const creator = creators[name];
  if (creator) {
    const badge = document.createElement("a");
    badge.className = "attribution-badge";
    badge.href = creator.url;
    badge.target = "_blank";
    badge.rel = "noopener noreferrer";
    const license = creator.license || "CC Attribution";
    badge.innerHTML = `★<span class="attribution-tooltip">The original 3D asset was created by @${creator.handle} and is distributed under the ${license} license. Click to see asset.</span>`;
    wrapper.appendChild(badge);
  }

  wrapper.appendChild(card);
  viewer.appendChild(wrapper);
  cards.push(card);
});

function scrollToCard(index) {
  const card = cards[index];
  if (!card) return;
  const scrollNeeded = viewer.scrollLeft + card.getBoundingClientRect().left - viewer.getBoundingClientRect().left;
  viewer.scrollTo({ left: scrollNeeded, behavior: "smooth" });
}

function rebuildIndicators() {
  if (!indicatorsContainer || !cards.length) return;
  indicatorsContainer.innerHTML = "";
  indicators.length = 0;

  const maxScroll = viewer.scrollWidth - viewer.clientWidth;
  if (viewer.clientWidth === 0) return;

  const viewerLeft = viewer.getBoundingClientRect().left;
  cards.forEach((card, i) => {
    const scrollNeeded = viewer.scrollLeft + card.getBoundingClientRect().left - viewerLeft;
    if (scrollNeeded > maxScroll + 0.5) return;
    const dot = document.createElement("button");
    dot.className = "viewer-indicator";
    dot.type = "button";
    dot.dataset.index = i;
    dot.addEventListener("click", () => scrollToCard(i));
    indicatorsContainer.appendChild(dot);
    indicators.push(dot);
  });
}

function updateActiveIndicator() {
  if (!indicators.length) return;
  const viewerLeft = viewer.getBoundingClientRect().left;
  let bestDotIndex = 0;
  let bestDist = Infinity;
  indicators.forEach((dot, i) => {
    const dist = Math.abs(cards[parseInt(dot.dataset.index)].getBoundingClientRect().left - viewerLeft);
    if (dist < bestDist) { bestDist = dist; bestDotIndex = i; }
  });
  indicators.forEach((dot, i) => {
    dot.classList.toggle("active", i === bestDotIndex);
  });
}

document.getElementById("scroll-left").addEventListener("click", () => {
  viewer.scrollBy({ left: -240, behavior: "smooth" });
});
document.getElementById("scroll-right").addEventListener("click", () => {
  viewer.scrollBy({ left: 240, behavior: "smooth" });
});

function initViewer() {
  viewer.scrollTo({ left: 0, behavior: "instant" });
  // Double rAF ensures layout is fully computed before measuring
  requestAnimationFrame(() => requestAnimationFrame(() => {
    rebuildIndicators();
    updateActiveIndicator();
  }));
}

function resumeViewerVideos() {
  viewer.querySelectorAll(".card video").forEach((video) => {
    video.muted = true;
    const p = video.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  });
}

let isScrolling = false;
viewer.addEventListener("scroll", () => {
  if (isScrolling) return;
  isScrolling = true;
  requestAnimationFrame(() => { updateActiveIndicator(); isScrolling = false; });
});

window.addEventListener("load", () => { initViewer(); resumeViewerVideos(); });
window.addEventListener("pageshow", (event) => {
  if (event.persisted) { initViewer(); resumeViewerVideos(); }
  else { resumeViewerVideos(); }
});
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") { resumeViewerVideos(); updateActiveIndicator(); }
});
window.addEventListener("resize", () => { rebuildIndicators(); updateActiveIndicator(); });
