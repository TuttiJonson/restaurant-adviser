/* ------------------------------------------------------------------
   STARTING DATA (my own restaurants)
   Copied into the page's state and saved to localStorage the first time
   a browser opens the page. Source of each rule: PRD.md.

   - lat/lng: the LAST !3d<lat>!4d<lng> pair in each Google Maps link.
   - bracket: 1 = $ (under $20), 2 = $$ ($20-50), 3 = $$$ ($50-100),
     4 = $$$$ ($100+). Worked out from the price range I gave (the middle,
     with a boundary going up), except where I chose one myself. The range
     I gave is in a comment on each place.
   - visited: true if I have been there, false if not. No dates are kept.
   ------------------------------------------------------------------ */

const STARTING_TAGS = [
  "Greek", "Latin", "Middle Eastern", "American",
  "Italian", "Vietnamese", "Spanish", "Seafood", "Japanese", "Chinese"
];

const STARTING_PLACES = [
  {
    id: "p1",
    name: "KAVA neo-taverna",
    link: "https://www.google.com/maps/place/KAVA+neo-taverna/@42.3423572,-71.0730883,1354m/data=!3m1!1e3!4m15!1m8!3m7!1s0x89e37a6c550f22ad:0xc12cc7d8ac048737!2sKAVA+neo-taverna!8m2!3d42.3423572!4d-71.0705134!10e1!16s%2Fg%2F11cm1bpt3q!3m5!1s0x89e37a6c550f22ad:0xc12cc7d8ac048737!8m2!3d42.3423572!4d-71.0705134!16s%2Fg%2F11cm1bpt3q",
    lat: 42.3423572, lng: -71.0705134,
    bracket: 2, // $40-80, set to $$ by me
    tags: ["Greek"],
    description: "An intimate, sophisticated neighborhood spot for Greek small plates & imported wine & spirits.",
    visited: true
  },
  {
    id: "p2",
    name: "Desnuda",
    link: "https://www.google.com/maps/place/Desnuda+cocina+%26+bar/@42.3422458,-71.080572,1354m/data=!3m1!1e3!4m15!1m8!3m7!1s0x89e37a6c550f22ad:0xc12cc7d8ac048737!2sKAVA+neo-taverna!8m2!3d42.3423572!4d-71.0705134!10e1!16s%2Fg%2F11cm1bpt3q!3m5!1s0x89e37b39a93f909f:0x9a1a5926e63e190c!8m2!3d42.3422379!4d-71.0754394!16s%2Fg%2F11wn08hkl6",
    lat: 42.3422379, lng: -71.0754394,
    bracket: 3, // $40-80
    tags: ["Latin"],
    description: "Fun night out with vibrant Latin food.",
    visited: true
  },
  {
    id: "p3",
    name: "Zebra Room",
    link: "https://www.google.com/maps/place/Zebra+Room/@42.3554955,-71.0664797,1354m/data=!3m1!1e3!4m15!1m8!3m7!1s0x89e37a6c550f22ad:0xc12cc7d8ac048737!2sKAVA+neo-taverna!8m2!3d42.3423572!4d-71.0705134!10e1!16s%2Fg%2F11cm1bpt3q!3m5!1s0x89e371000acdf4ed:0xf1dddc5ea6c5220e!8m2!3d42.3554962!4d-71.0613274!16s%2Fg%2F11nc3q44f1",
    lat: 42.3554962, lng: -71.0613274,
    bracket: 4, // $100+
    tags: ["American"],
    description: "Upscale American steakhouse with nice cocktails.",
    visited: true
  },
  {
    id: "p4",
    name: "All'Antico Vinaio",
    link: "https://www.google.com/maps/place/All'Antico+Vinaio/@42.350683,-71.0789312,677m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89e37b00405726c1:0x5e2fcf8a1f7fecca!8m2!3d42.350683!4d-71.0763563!16s%2Fg%2F11xccn9cym",
    lat: 42.350683, lng: -71.0763563,
    bracket: 2, // $20-30
    tags: ["Italian"],
    description: "Italian sandwiches and extras, great for on-the-go lunch or dinner.",
    visited: false
  },
  {
    id: "p5",
    name: "Burg & Shaw",
    link: "https://www.google.com/maps/place/Burg+%26+Shaw/@42.3518008,-71.0680418,1354m/data=!3m1!1e3!4m14!1m7!3m6!1s0x89e37b00405726c1:0x5e2fcf8a1f7fecca!2sAll'Antico+Vinaio!8m2!3d42.350683!4d-71.0763563!16s%2Fg%2F11xccn9cym!3m5!1s0x89e37b0078b0c167:0x9d414e4a28812861!8m2!3d42.3517998!4d-71.0648284!16s%2Fg%2F11yj9m3zsr",
    lat: 42.3517998, lng: -71.0648284,
    bracket: 1, // $10-20
    tags: ["American"],
    description: "Fusion hamburger restaurant combining Middle Eastern flavors and American.",
    visited: true
  },
  {
    id: "p6",
    name: "Oleana",
    link: "https://www.google.com/maps/place/Oleana/@42.3647926,-71.1157738,3992m/data=!3m1!1e3!4m14!1m7!3m6!1s0x89e37b00405726c1:0x5e2fcf8a1f7fecca!2sAll'Antico+Vinaio!8m2!3d42.350683!4d-71.0763563!16s%2Fg%2F11xccn9cym!3m5!1s0x89e370b2d41372af:0xae84228b09fd944f!8m2!3d42.3705494!4d-71.0971859!16s%2Fm%2F0k0bjrg",
    lat: 42.3705494, lng: -71.0971859,
    bracket: 3, // $50-100
    tags: ["Middle Eastern"],
    description: "Inventive Eastern Mediterranean dishes in a warm welcoming interior.",
    visited: true
  },
  {
    id: "p7",
    name: "Cicada",
    link: "https://www.google.com/maps/place/Cicada/@42.364528,-71.1085105,2424m/data=!3m1!1e3!4m15!1m7!3m6!1s0x89e37b00405726c1:0x5e2fcf8a1f7fecca!2sAll'Antico+Vinaio!8m2!3d42.350683!4d-71.0763563!16s%2Fg%2F11xccn9cym!3m6!1s0x89e3774004406701:0x63601b9a637d1e21!8m2!3d42.3676927!4d-71.1020615!10e1!16s%2Fg%2F11hkm9nnh8",
    lat: 42.3676927, lng: -71.1020615,
    bracket: 2, // $10-50
    tags: ["Vietnamese"],
    description: "Down-home Vietnamese cafe serving banh mi, noodle salads & pastries, plus coffee & specialty drinks.",
    visited: true
  },
  {
    id: "p8",
    name: "Barcelona Wine Bar",
    link: "https://www.google.com/maps/place/Barcelona+Wine+Bar/@42.348491,-71.0831981,2424m/data=!3m1!1e3!4m14!1m7!3m6!1s0x89e37b00405726c1:0x5e2fcf8a1f7fecca!2sAll'Antico+Vinaio!8m2!3d42.350683!4d-71.0763563!16s%2Fg%2F11xccn9cym!3m5!1s0x89e37a6d80a99e81:0xb125b0c183e18c2d!8m2!3d42.3445885!4d-71.0709941!16s%2Fg%2F11b6jgm58_",
    lat: 42.3445885, lng: -71.0709941,
    bracket: 2, // $20-60
    tags: ["Spanish"],
    description: "Extensive array of Spanish-centric small plates & wine in an intimate setting; open late nights.",
    visited: true
  },
  {
    id: "p9",
    name: "Dalia",
    link: "https://www.google.com/maps/place/Dalia/@42.3429267,-71.052837,3079m/data=!3m1!1e3!4m14!1m7!3m6!1s0x89e37b00405726c1:0x5e2fcf8a1f7fecca!2sAll'Antico+Vinaio!8m2!3d42.350683!4d-71.0763563!16s%2Fg%2F11xccn9cym!3m5!1s0x89e37b0023c8ae55:0xc4aaad1e0a0de5b6!8m2!3d42.3362653!4d-71.0474685!16s%2Fg%2F11nb7n87jn",
    lat: 42.3362653, lng: -71.0474685,
    bracket: 3, // $70-100
    tags: ["Spanish"],
    description: "Small tapas plates in a beautiful setting, recently opened.",
    visited: true
  },
  {
    id: "p10",
    name: "Row 34",
    link: "https://www.google.com/maps/place/Row+34+-+Seaport+%7C+Boston/@42.3429267,-71.052837,3079m/data=!3m1!1e3!4m15!1m7!3m6!1s0x89e37b00405726c1:0x5e2fcf8a1f7fecca!2sAll'Antico+Vinaio!8m2!3d42.350683!4d-71.0763563!16s%2Fg%2F11xccn9cym!3m6!1s0x89e37a80312391f7:0xb8f874bb24bfb41e!8m2!3d42.3495517!4d-71.0476206!10e1!16s%2Fg%2F1yhbl8zyv",
    lat: 42.3495517, lng: -71.0476206,
    bracket: 3, // $30-90
    tags: ["Seafood"],
    description: "This stylish brick-&-wood eatery serves an extensive oyster menu plus fish entrees & craft beers.",
    visited: false
  },
  {
    id: "p11",
    name: "The Barking Crab",
    link: "https://www.google.com/maps/place/The+Barking+Crab/@42.3429267,-71.052837,3079m/data=!3m1!1e3!4m15!1m7!3m6!1s0x89e37b00405726c1:0x5e2fcf8a1f7fecca!2sAll'Antico+Vinaio!8m2!3d42.350683!4d-71.0763563!16s%2Fg%2F11xccn9cym!3m6!1s0x89e3707e3a26fbdb:0x28cc6d13871fcf33!8m2!3d42.3536651!4d-71.0487571!10e1!16s%2Fm%2F01_hd60",
    lat: 42.3536651, lng: -71.0487571,
    bracket: 3, // $30-70, middle $50 sits on a boundary, so it goes up
    tags: ["Seafood"],
    description: "Lively waterfront seafood joint with open-air picnic-table dining & views of the Boston Harbor.",
    visited: true
  },
  {
    id: "p12",
    name: "Matsunori Handroll Bar",
    link: "https://www.google.com/maps/place/Matsunori+Handroll+Bar/@42.3467214,-71.1083405,677m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89e3797cba2c94ed:0x57e1e0efc71d18f5!8m2!3d42.3467214!4d-71.1057656!16s%2Fg%2F11sz4bnqjg",
    lat: 42.3467214, lng: -71.1057656,
    bracket: 2, // $30-70, set to $$ by me
    tags: ["Japanese"],
    description: "Various delicious Japanese handmade handrolls.",
    visited: true
  },
  {
    id: "p13",
    name: "Darling",
    link: "https://www.google.com/maps/place/Darling/@42.3636176,-71.1086687,2708m/data=!3m1!1e3!4m14!1m7!3m6!1s0x89e3797cba2c94ed:0x57e1e0efc71d18f5!2sMatsunori+Handroll+Bar!8m2!3d42.3467214!4d-71.1057656!16s%2Fg%2F11sz4bnqjg!3m5!1s0x89e37700182647c1:0x633a07af353ad14f!8m2!3d42.3636216!4d-71.1012862!16s%2Fg%2F11m6cl20d7",
    lat: 42.3636216, lng: -71.1012862,
    bracket: 3, // $30-70, middle $50 sits on a boundary, so it goes up
    tags: ["Chinese"],
    description: "Creative take on Chinese cuisine.",
    visited: true
  },
  {
    id: "p14",
    name: "Spring Shanghai Pan-Fried Buns",
    link: "https://www.google.com/maps/place/Spring+Shanghai+Pan-Fried+Buns/@42.3431118,-71.1015863,677m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89e37928e97c2849:0x381f1ca0e8c05d4b!8m2!3d42.3431118!4d-71.0990114!16s%2Fg%2F11l354whxq",
    lat: 42.3431118, lng: -71.0990114,
    bracket: 1, // $10-30, set to $ by me
    tags: ["Chinese"],
    description: "Traditional pan-fried dumplings.",
    visited: true
  },
  {
    id: "p15",
    name: "Sunny Girl",
    link: "https://www.google.com/maps/place/Sunny+Girl/@42.363999,-71.0539419,677m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89e371181f98f20d:0x55858eede54d9b9f!8m2!3d42.363999!4d-71.051367!16s%2Fg%2F11tsqm31zy",
    lat: 42.363999, lng: -71.051367,
    bracket: 1, // $10-20
    tags: ["American"],
    description: "Great American comfort foods, breakfast food.",
    visited: false
  },
  {
    id: "p16",
    name: "Pammy's",
    link: "https://www.google.com/maps/place/Pammy's/@42.3684311,-71.1117719,677m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89e377507f587e0b:0x4f3d2c334d420d02!8m2!3d42.3684311!4d-71.109197!16s%2Fg%2F11d_8ys8vt",
    lat: 42.3684311, lng: -71.109197,
    bracket: 4, // $100
    tags: ["American"],
    description: "Italian plates, like housemade pastas, in a chic but homey space with fine wines & fireplace.",
    visited: false
  },
  {
    id: "p17",
    name: "SRV",
    link: "https://www.google.com/maps/place/SRV/@42.3409718,-71.0842377,677m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89e37a16c2c428a5:0x69c625b0948d4f52!8m2!3d42.3409718!4d-71.0816628!16s%2Fg%2F11bxdt_cg0",
    lat: 42.3409718, lng: -71.0816628,
    bracket: 3, // $50-100
    tags: ["Italian"],
    description: "Housemade pastas and other small plates are served at this casual-chic wine bar with a rear patio.",
    visited: true
  },
  {
    id: "p18",
    name: "Neptune Oyster",
    link: "https://www.google.com/maps/place/Neptune+Oyster/@42.363239,-71.0585429,677m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89e3708f2de4ee09:0x3bf3e0fd562f98e7!8m2!3d42.363239!4d-71.055968!16s%2Fg%2F1th5dkzp",
    lat: 42.363239, lng: -71.055968,
    bracket: 3, // $40-70
    tags: ["Seafood"],
    description: "Lines form for the raw bar & warm, buttered lobster rolls at this tiny oyster bar.",
    visited: true
  },
  {
    id: "p19",
    name: "Jafra Cafe & Restaurant",
    link: "https://www.google.com/maps/place/Jafra+Cafe+%26+Restaurant/@42.3719745,-71.10481,2440m/data=!3m1!1e3!4m6!3m5!1s0x89e3775779038ee7:0xa8d5272f51690793!8m2!3d42.3727681!4d-71.0993771!16s%2Fg%2F11z8qzvg6g",
    lat: 42.3727681, lng: -71.0993771,
    bracket: 2, // $20-50
    tags: ["Middle Eastern"],
    description: "Middle Eastern comfort foods.",
    visited: false
  }
];


/* ------------------------------------------------------------------
   THE APP
   State lives in the `state` object. Every screen is drawn from it.
   ------------------------------------------------------------------ */
(function () {
  "use strict";

  const KEY_PLACES = "restaurantAdviser.places";
  const KEY_TAGS = "restaurantAdviser.tags";

  // Scoring weights. Plain numbers so they are easy to adjust (PRD.md).
  const W = {
    craving: 3,      // a tag matches the craving I chose
    closeness: 2,    // up to this many points, falling to 0 at closeKm
    notBeen: 1,      // only when "Been before" is Either
    closeKm: 15,
    speedKmh: 30     // assumed average speed for the drive-time estimate
  };

  // If my craving has nothing left that fits, the page tries this tag instead
  // and says so. Tags I add myself have no alternative.
  const ALTERNATIVES = {
    "Italian": "Greek",
    "Vietnamese": "Chinese",
    "Greek": "Middle Eastern",
    "Middle Eastern": "Greek",
    "Latin": "Spanish",
    "Spanish": "Latin",
    "American": "Seafood",
    "Seafood": "American"
  };

  const BRACKETS = [
    { value: 1, symbol: "$",    range: "under $20" },
    { value: 2, symbol: "$$",   range: "$20-50" },
    { value: 3, symbol: "$$$",  range: "$50-100" },
    { value: 4, symbol: "$$$$", range: "$100+" }
  ];

  const state = {
    places: [],
    tags: [],
    dataError: false,
    form: { been: "either", budget: 4, craving: "anything", minutes: null },
    view: { kind: "prompt" },   // prompt | loading | pick | nomatch | nothingleft
    currentId: null,
    shown: [],                  // ids shown in this round
    hidden: [],                 // "Not tonight" ids, until Start over
    logged: null,               // name, right after "I'm going"
    position: null,             // { lat, lng }, kept only while the page is open
    geo: "idle",                // idle | loading | ok | denied
    confirmDelete: null,
    add: { bracket: null, tags: [] }
  };

  /* ---------- small helpers ---------- */

  function h(tag, props) {
    const el = document.createElement(tag);
    const kids = Array.prototype.slice.call(arguments, 2);
    Object.keys(props || {}).forEach(function (k) {
      const v = props[k];
      if (v === null || v === undefined || v === false) return;
      if (k === "class") el.className = v;
      else if (k === "text") el.textContent = v;
      else if (k.slice(0, 2) === "on") el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? "" : v);
    });
    kids.flat().forEach(function (kid) {
      if (kid !== null && kid !== undefined && kid !== false) el.append(kid);
    });
    return el;
  }
  const $ = function (id) { return document.getElementById(id); };
  const clone = function (x) { return JSON.parse(JSON.stringify(x)); };

  function dotted(parts) {
    const out = [];
    parts.forEach(function (p, i) {
      if (i > 0) out.push(h("span", { class: "dot", text: "·", "aria-hidden": "true" }));
      out.push(p);
    });
    return out;
  }

  /* ---------- storage ---------- */

  function save() {
    try {
      localStorage.setItem(KEY_PLACES, JSON.stringify(state.places));
      localStorage.setItem(KEY_TAGS, JSON.stringify(state.tags));
    } catch (e) { /* storage unavailable: the page still works for this visit */ }
  }

  function validPlaces(list) {
    return Array.isArray(list) && list.every(function (p) {
      return p && typeof p.id === "string" && typeof p.name === "string" &&
        typeof p.bracket === "number" && p.bracket >= 1 && p.bracket <= 4 &&
        Array.isArray(p.tags) && typeof p.visited === "boolean";
    });
  }

  function tagsFrom(places, base) {
    const tags = base.slice();
    places.forEach(function (p) {
      p.tags.forEach(function (t) { if (tags.indexOf(t) === -1) tags.push(t); });
    });
    return tags;
  }

  function loadState() {
    let rawPlaces = null, rawTags = null;
    try {
      rawPlaces = localStorage.getItem(KEY_PLACES);
      rawTags = localStorage.getItem(KEY_TAGS);
    } catch (e) { /* treat as first visit */ }

    if (rawPlaces === null) {
      // First visit in this browser: copy my starting array into the state.
      state.places = clone(STARTING_PLACES);
      state.tags = clone(STARTING_TAGS);
      save();
      return;
    }
    let places = null;
    try { places = JSON.parse(rawPlaces); } catch (e) { places = null; }
    if (!validPlaces(places)) {
      state.places = [];
      state.tags = clone(STARTING_TAGS);
      state.dataError = true;
      return;
    }
    state.places = places;
    let tags = null;
    try { tags = JSON.parse(rawTags); } catch (e) { tags = null; }
    if (!Array.isArray(tags)) tags = clone(STARTING_TAGS);
    state.tags = tagsFrom(places, tags);
  }

  /* ---------- distance ---------- */

  function haversineKm(a, b) {
    const R = 6371, rad = Math.PI / 180;
    const dLat = (b.lat - a.lat) * rad, dLng = (b.lng - a.lng) * rad;
    const x = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 2 * R * Math.asin(Math.sqrt(x));
  }
  function hasCoords(p) { return typeof p.lat === "number" && typeof p.lng === "number"; }
  function kmTo(p) {
    if (!state.position || !hasCoords(p)) return null;
    return haversineKm(state.position, p);
  }
  function minutesTo(p) {
    const km = kmTo(p);
    return km === null ? null : km / W.speedKmh * 60;
  }

  /* ---------- tags and tiles ---------- */

  function tileClass(p) {
    const i = state.tags.indexOf(p.tags[0]);
    return i < 0 ? "tile-ink" : "tile-" + (i % 4);
  }
  function symbolFor(p) { return BRACKETS[p.bracket - 1].symbol; }

  /* ---------- chips and brackets (radio / checkbox inputs) ---------- */

  function buildGroup(container, cfg) {
    container.replaceChildren();
    cfg.options.forEach(function (o) {
      const input = h("input", { type: cfg.type, name: cfg.name, value: String(o.value) });
      input.checked = cfg.isChecked(o.value);
      input.addEventListener("change", function () { cfg.onChange(o.value, input.checked); });
      const face = cfg.kind === "bracket"
        ? h("span", { class: "face" }, h("strong", { text: o.label }), h("small", { class: "mono-xs", text: o.sub }))
        : h("span", { class: "face", text: o.label });
      container.append(h("label", { class: cfg.kind }, input, face));
    });
  }

  function bracketOptions() {
    return BRACKETS.map(function (b) { return { value: b.value, label: b.symbol, sub: b.range }; });
  }

  function buildTonightForm() {
    buildGroup($("g-been"), {
      kind: "chip", type: "radio", name: "been",
      options: [{ value: "new", label: "New" }, { value: "been", label: "Been before" }, { value: "either", label: "Either" }],
      isChecked: function (v) { return state.form.been === v; },
      onChange: function (v) { state.form.been = v; }
    });
    buildGroup($("g-budget"), {
      kind: "bracket", type: "radio", name: "budget",
      options: bracketOptions(),
      isChecked: function (v) { return state.form.budget === v; },
      onChange: function (v) { state.form.budget = v; }
    });
    buildCraving();
    buildGroup($("g-minutes"), {
      kind: "chip", type: "radio", name: "minutes",
      options: [{ value: 10, label: "10" }, { value: 20, label: "20" }, { value: 30, label: "30" }, { value: null, label: "Any" }],
      isChecked: function (v) { return state.form.minutes === v; },
      onChange: function (v) { state.form.minutes = v; }
    });
  }

  function buildCraving() {
    const options = state.tags.map(function (t) { return { value: t, label: t }; });
    options.push({ value: "anything", label: "Anything" });
    buildGroup($("g-craving"), {
      kind: "chip", type: "radio", name: "craving",
      options: options,
      isChecked: function (v) { return state.form.craving === v; },
      onChange: function (v) { state.form.craving = v; }
    });
  }

  function buildAddForm() {
    buildGroup($("g-add-bracket"), {
      kind: "bracket", type: "radio", name: "add-bracket",
      options: bracketOptions(),
      isChecked: function (v) { return state.add.bracket === v; },
      onChange: function (v) { state.add.bracket = v; }
    });
    buildGroup($("g-add-tags"), {
      kind: "chip", type: "checkbox", name: "add-tags",
      options: state.tags.map(function (t) { return { value: t, label: t }; }),
      isChecked: function (v) { return state.add.tags.indexOf(v) !== -1; },
      onChange: function (v, on) {
        const i = state.add.tags.indexOf(v);
        if (on && i === -1) state.add.tags.push(v);
        if (!on && i !== -1) state.add.tags.splice(i, 1);
      }
    });
  }

  /* ---------- the pick ---------- */

  function budgetPhrase(b) {
    if (b === 1) return "under $20";
    return "at " + (b === 2 ? "$50" : "$100") + " or less";
  }

  function noMatchMessage(stageIndex) {
    const f = state.form;
    const words = ["Nothing"];
    if (f.been === "new") words.push("new");
    if (f.been === "been") words.push("you've been to");
    if (stageIndex >= 1 && f.budget < 4) words.push(budgetPhrase(f.budget));
    if (stageIndex >= 2 && f.minutes !== null) words.push("within " + f.minutes + " min");
    return words.join(" ") + ".";
  }

  // `tag` is the craving being matched: my choice, or its alternative.
  function scorePlace(p, tag) {
    const f = state.form;
    let s = 0;
    if (tag !== "anything" && p.tags.indexOf(tag) !== -1) s += W.craving;
    const km = kmTo(p);
    if (km !== null) s += W.closeness * Math.max(0, 1 - km / W.closeKm);
    if (f.been === "either" && !p.visited) s += W.notBeen;
    return s;
  }

  function reasonFor(p, alt, noCraving) {
    const f = state.form, parts = [];
    if (alt && p.tags.indexOf(alt) !== -1) {
      const article = /^[AEIOU]/.test(alt) ? "an " : "a ";
      parts.push("No " + f.craving + " fits tonight, so here's " + article + alt + " alternative");
    } else if (noCraving) {
      parts.push("No " + f.craving + " fits tonight");
    } else if (f.craving !== "anything" && p.tags.indexOf(f.craving) !== -1) {
      parts.push("Matches " + f.craving);
    }
    const m = minutesTo(p);
    if (m !== null) parts.push("it's about " + Math.max(1, Math.round(m)) + " min away");
    if (!p.visited) parts.push("you haven't been yet");
    if (!parts.length) return "Picked at random from the places that fit.";
    const text = parts.slice(0, 2).join(", and ");
    return text.charAt(0).toUpperCase() + text.slice(1) + ".";
  }

  function computePick() {
    const f = state.form;
    if (state.places.length === 0) return { kind: "prompt" };
    let pool = state.places.filter(function (p) { return state.hidden.indexOf(p.id) === -1; });
    if (pool.length === 0) return { kind: "nothingleft" };

    const stages = [
      { on: f.been !== "either", test: function (p) { return f.been === "new" ? !p.visited : p.visited; } },
      { on: f.budget < 4, test: function (p) { return p.bracket <= f.budget; } },
      { on: f.minutes !== null, test: function (p) { const m = minutesTo(p); return m === null || m <= f.minutes; } }
    ];
    for (let i = 0; i < stages.length; i++) {
      if (!stages[i].on) continue;
      pool = pool.filter(stages[i].test);
      if (pool.length === 0) return { kind: "nomatch", message: noMatchMessage(i) };
    }

    const fresh = pool.filter(function (p) { return state.shown.indexOf(p.id) === -1; });
    if (fresh.length === 0) return { kind: "nothingleft" };

    // Is there anything left for my craving? If not, try its alternative.
    let tag = f.craving, alt = null, noCraving = false;
    if (tag !== "anything" && !fresh.some(function (p) { return p.tags.indexOf(tag) !== -1; })) {
      const a = ALTERNATIVES[tag];
      if (a && fresh.some(function (p) { return p.tags.indexOf(a) !== -1; })) { alt = a; tag = a; }
      else noCraving = true;
    }

    let best = -Infinity, top = [];
    fresh.forEach(function (p) {
      const s = scorePlace(p, tag);
      if (s > best + 1e-9) { best = s; top = [p]; }
      else if (Math.abs(s - best) <= 1e-9) top.push(p);
    });
    // Ties are broken at random, so the pick varies.
    return { kind: "pick", place: top[Math.floor(Math.random() * top.length)], alt: alt, noCraving: noCraving };
  }

  function runPick() {
    const res = computePick();
    state.view = res;
    state.currentId = null;
    if (res.kind === "pick") {
      state.currentId = res.place.id;
      state.shown.push(res.place.id);
    }
    renderTonight();
    const heading = document.querySelector("#result h2");
    if (heading && res.kind !== "prompt") { heading.setAttribute("tabindex", "-1"); heading.focus(); }
  }

  /* ---------- position ---------- */

  function requestPosition(done) {
    if (!navigator.geolocation) { state.position = null; state.geo = "denied"; done(); return; }
    state.geo = "loading";
    let finished = false;
    function finish(pos) {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      if (pos) { state.position = { lat: pos.coords.latitude, lng: pos.coords.longitude }; state.geo = "ok"; }
      else { state.position = null; state.geo = "denied"; }
      done();
    }
    const timer = setTimeout(function () { finish(null); }, 10000);
    navigator.geolocation.getCurrentPosition(finish, function () { finish(null); }, { timeout: 10000, maximumAge: 60000 });
  }

  /* ---------- Tonight: events ---------- */

  function onPick(e) {
    e.preventDefault();
    if (state.places.length === 0 || state.geo === "loading") return;
    state.shown = [];
    state.logged = null;
    state.view = { kind: "loading" };
    state.confirmDelete = null;
    requestPosition(runPick);
    renderTonight();
  }

  function pickAgain() { state.logged = null; runPick(); }

  function notTonight() {
    if (state.currentId) state.hidden.push(state.currentId);
    state.logged = null;
    runPick();
  }

  function imGoing() {
    const p = state.places.filter(function (x) { return x.id === state.currentId; })[0];
    if (!p) return;
    p.visited = true;
    state.logged = p.name;
    save();
    renderTonight();
    renderList();
  }

  function startOver() {
    state.form = { been: "either", budget: 4, craving: "anything", minutes: null };
    state.view = { kind: "prompt" };
    state.currentId = null;
    state.shown = [];
    state.hidden = [];
    state.logged = null;
    state.geo = state.geo === "loading" ? "loading" : "idle";
    buildTonightForm();
    renderTonight();
  }

  /* ---------- Tonight: drawing ---------- */

  function metaLine(p) {
    const km = kmTo(p), m = minutesTo(p);
    const parts = km === null
      ? ["distance unknown", symbolFor(p)]
      : ["about " + km.toFixed(1) + " km", "~" + Math.max(1, Math.round(m)) + " min drive", symbolFor(p)];
    return h("p", { class: "mono meta-line" }, dotted(parts));
  }

  function renderTonight() {
    const pickBtn = $("pick-btn");
    const loading = state.geo === "loading";
    pickBtn.disabled = state.places.length === 0 || loading;
    pickBtn.textContent = loading ? "Finding you..." : "Pick one for me";

    const notice = $("notice");
    const attempted = state.view.kind !== "prompt" && state.view.kind !== "loading";
    if (state.geo === "denied" && attempted && state.places.length > 0) {
      notice.textContent = "Location is off, so distance is skipped.";
      notice.hidden = false;
    } else {
      notice.hidden = true;
    }

    const out = $("result");
    out.replaceChildren();

    if (state.places.length === 0) {
      out.append(h("div", { class: "message" },
        h("p", { class: "label", text: "Empty" }),
        h("h2", { text: "Your list is empty." }),
        h("p", { class: "meta-text", text: "Add your first restaurant to get a pick." }),
        h("a", { class: "btn primary", href: "#list", text: "Go to My list" })));
      return;
    }

    const v = state.view;
    if (v.kind === "prompt") {
      out.append(h("p", { class: "prompt", text: "Pick one for me to get started." }));
    } else if (v.kind === "loading") {
      out.append(
        h("p", { class: "label result-label", text: "Finding where you are" }),
        h("div", { class: "loading-row" },
          h("div", { class: "placeholder-tile" }),
          h("div", {}, h("div", { class: "skeleton" }), h("div", { class: "skeleton" }), h("div", { class: "skeleton" }),
            h("p", { class: "loading-note", text: "Finding where you are..." }))));
    } else if (v.kind === "nomatch") {
      out.append(h("div", { class: "message" },
        h("p", { class: "label err", text: "No match" }),
        h("h2", { text: "Nothing fits tonight." }),
        h("p", { class: "meta-text", text: v.message + " Change a choice above and pick again." }),
        h("button", { type: "button", class: "btn tertiary", onclick: startOver, text: "Start over" })));
    } else if (v.kind === "nothingleft") {
      out.append(h("div", { class: "message" },
        h("p", { class: "label", text: "Nothing left" }),
        h("h2", { text: "Nothing left tonight." }),
        h("p", { class: "meta-text", text: "Every place that fits has been shown or hidden." }),
        h("button", { type: "button", class: "btn primary", onclick: startOver, text: "Start over" })));
    } else if (v.kind === "pick") {
      const p = v.place;
      const status = state.logged
        ? h("p", { class: "status-line logged", text: "Logged: " + state.logged + "." })
        : h("p", { class: "status-line", text: state.hidden.length ? state.hidden.length + " hidden tonight" : "" });
      out.append(
        h("p", { class: "label result-label", text: "Tonight you should go to" }),
        h("div", { class: "result" },
          h("div", { class: "tile " + tileClass(p) }, h("span", { class: "mono-xs", text: p.tags[0] || "" })),
          h("div", { class: "result-body" },
            h("h2", { text: p.name }),
            metaLine(p),
            h("p", { class: "reason", text: reasonFor(p, v.alt, v.noCraving) }),
            p.description ? h("p", { class: "desc", text: p.description }) : null,
            h("div", { class: "actions" },
              h("button", { type: "button", class: "btn primary", onclick: imGoing, text: "I'm going" }),
              h("button", { type: "button", class: "btn secondary", onclick: pickAgain, text: "Pick again" }),
              h("button", { type: "button", class: "btn tertiary", onclick: notTonight, text: "Not tonight" }),
              h("button", { type: "button", class: "btn tertiary", onclick: startOver, text: "Start over" })),
            status)));
    }
  }

  /* ---------- My list ---------- */

  function toggleBeen(id) {
    const p = state.places.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    p.visited = !p.visited;
    state.confirmDelete = null;
    save();
    renderList();
    renderTonight();
  }

  function deletePlace(id) {
    if (state.confirmDelete !== id) { state.confirmDelete = id; renderList(); return; }
    state.places = state.places.filter(function (p) { return p.id !== id; });
    state.shown = state.shown.filter(function (x) { return x !== id; });
    state.hidden = state.hidden.filter(function (x) { return x !== id; });
    if (state.currentId === id) { state.currentId = null; state.view = { kind: "prompt" }; state.logged = null; }
    state.confirmDelete = null;
    save();
    renderList();
    renderTonight();
  }

  function renderList() {
    const note = $("data-notice");
    if (state.dataError) {
      note.textContent = "Your saved list couldn't be read, so you're starting empty.";
      note.hidden = false;
    } else {
      note.hidden = true;
    }

    const body = $("list-body");
    body.replaceChildren();
    if (state.places.length === 0) {
      body.append(h("div", { class: "message" },
        h("p", { class: "label", text: "Empty" }),
        h("h2", { text: "No places yet." }),
        h("p", { class: "meta-text", text: "Use the form to add your first one." })));
      return;
    }

    const list = h("ul", { class: "list" });
    state.places.forEach(function (p) {
      const km = kmTo(p);
      const dist = !hasCoords(p)
        ? h("span", { class: "row-dist none", text: "no coords" })
        : h("span", { class: "row-dist", text: km === null ? "" : km.toFixed(1) + " km" });
      const meta = h("p", { class: "row-meta" }, dotted([
        document.createTextNode(p.tags.join(", ")),
        document.createTextNode(symbolFor(p)),
        h("span", { class: p.visited ? "been" : "notyet", text: p.visited ? "Been" : "Not yet" })
      ]));
      const confirming = state.confirmDelete === p.id;
      list.append(h("li", { class: "row" },
        h("div", { class: "tile " + tileClass(p), "aria-hidden": "true" }),
        h("div", { class: "row-info" },
          h("p", { class: "row-name", text: p.name }),
          meta,
          p.description ? h("p", { class: "row-desc", text: p.description }) : null),
        dist,
        h("div", { class: "row-actions" },
          h("button", { type: "button", class: "btn secondary small", onclick: function () { toggleBeen(p.id); },
            "aria-pressed": p.visited ? "true" : "false", text: p.visited ? "Undo been" : "Been" }),
          h("button", { type: "button", class: "btn tertiary small", onclick: function () { deletePlace(p.id); },
            text: confirming ? "Sure? Delete" : "Delete" }))));
    });
    body.append(list);
  }

  /* ---------- add form ---------- */

  const FIELDS = ["name", "link", "coords", "bracket", "tags", "newtag"];

  function setError(field, msg) {
    const el = $("err-" + field);
    el.textContent = msg || "";
    el.hidden = !msg;
    const input = { name: "f-name", link: "f-link", coords: "f-coords", newtag: "f-newtag" }[field];
    if (input) $(input).classList.toggle("has-error", !!msg);
  }
  function clearErrors() { FIELDS.forEach(function (f) { setError(f, ""); }); }

  function coordsFromLink(url) {
    const pairs = Array.from(url.matchAll(/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/g));
    if (pairs.length) {
      const last = pairs[pairs.length - 1];            // the last pair is the place named in the link
      return { lat: parseFloat(last[1]), lng: parseFloat(last[2]) };
    }
    const at = url.match(/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/);
    return at ? { lat: parseFloat(at[1]), lng: parseFloat(at[2]) } : null;
  }

  function parseTyped(text) {
    const bits = text.trim().split(/[\s,]+/);
    if (bits.length !== 2) return null;
    const num = /^-?\d+(\.\d+)?$/;
    if (!num.test(bits[0]) || !num.test(bits[1])) return null;
    const lat = parseFloat(bits[0]), lng = parseFloat(bits[1]);
    if (lat < -90 || lat > 90 || lng < -180 || lng > 180) return null;
    return { lat: lat, lng: lng };
  }

  function onSave(e) {
    e.preventDefault();
    clearErrors();
    $("save-status").textContent = "";

    const name = $("f-name").value.trim();
    const link = $("f-link").value.trim();
    const coordsText = $("f-coords").value.trim();
    const description = $("f-desc").value.trim();
    let ok = true;

    if (!name) { setError("name", "Fix this: add a name."); ok = false; }
    else if (state.places.some(function (p) { return p.name.toLowerCase() === name.toLowerCase(); })) {
      setError("name", "Fix this: that name is already on your list."); ok = false;
    }
    if (state.add.bracket === null) { setError("bracket", "Fix this: pick a bracket."); ok = false; }
    if (state.add.tags.length === 0) { setError("tags", "Fix this: pick at least one tag."); ok = false; }

    let point = null;
    if (coordsText) {
      point = parseTyped(coordsText);                  // typed coordinates win over the link
      if (!point) { setError("coords", "Fix this: coordinates must look like 42.3812, -71.0998."); ok = false; }
    } else if (link) {
      point = coordsFromLink(link);
      if (!point) { setError("link", "Fix this: that link has no coordinates. Type them below or leave both empty."); ok = false; }
    }
    if (!ok) return;

    const place = {
      id: "u" + Date.now().toString(36),
      name: name,
      link: link,
      lat: point ? point.lat : null,
      lng: point ? point.lng : null,
      bracket: state.add.bracket,
      tags: state.tags.filter(function (t) { return state.add.tags.indexOf(t) !== -1; }),
      description: description,
      visited: false
    };
    state.places.unshift(place);
    state.dataError = false;
    save();

    $("add-form").reset();
    state.add = { bracket: null, tags: [] };
    buildAddForm();
    renderList();
    renderTonight();
    $("save-status").textContent = "Saved: " + name + ".";
  }

  function addTag() {
    setError("newtag", "");
    const input = $("f-newtag");
    const tag = input.value.trim();
    if (!tag) { setError("newtag", "Fix this: type a tag first."); return; }
    if (state.tags.some(function (t) { return t.toLowerCase() === tag.toLowerCase(); }) || tag.toLowerCase() === "anything") {
      setError("newtag", "Fix this: that tag already exists."); return;
    }
    state.tags.push(tag);
    state.add.tags.push(tag);
    save();
    input.value = "";
    buildAddForm();
    buildCraving();
    renderList();
  }

  /* ---------- tabs ---------- */

  function showTab() {
    const list = location.hash === "#list";
    $("view-tonight").hidden = list;
    $("view-list").hidden = !list;
    if (list) $("tab-list").setAttribute("aria-current", "page"); else $("tab-list").removeAttribute("aria-current");
    if (!list) $("tab-tonight").setAttribute("aria-current", "page"); else $("tab-tonight").removeAttribute("aria-current");
    state.confirmDelete = null;
    if (list) renderList();
    window.scrollTo(0, 0);
  }

  /* ---------- start ---------- */

  function init() {
    loadState();
    buildTonightForm();
    buildAddForm();
    $("tonight-form").addEventListener("submit", onPick);
    $("add-form").addEventListener("submit", onSave);
    $("add-tag-btn").addEventListener("click", addTag);
    $("f-newtag").addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); addTag(); }
    });
    window.addEventListener("hashchange", showTab);
    renderTonight();
    renderList();
    showTab();
  }

  init();
})();
