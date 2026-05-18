//
// For licensing see accompanying LICENSE file.
// Copyright (C) 2026 Apple Inc. All Rights Reserved.
//

(() => {
  const sequences = [
    "drop_test_000003_000001",
    "drop_test_000047_000011",
    "drop_test_000107_000030",
    "drop_test_000308_000081",
  ];

  const viewer = document.getElementById("viewer-cloth");

  sequences.forEach((name) => {
    const imgSrc = `./assets/gaussians/${name}/cond.png`;
    const url = `viewer.html?sequence=${encodeURIComponent(name)}&format=spz&frames=100&camx=0&camz=2.0&rx=0&bg=ffffff&fps=36&loop=forward`;

    const card = document.createElement("a");
    card.className = "card";
    card.href = url;
    card.innerHTML = `<img src="${imgSrc}" alt="${name}" />`;

    viewer.appendChild(card);
  });
})();
