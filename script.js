const travelPackages = [
  {
    title: "Amazon Rainforest Expedition",
    duration: "7 days, 6 nights",
    price: "$799",
    cardpic:
      "https://res.cloudinary.com/dp7yzo1r9/image/upload/v1745064592/kaieteur-falls-amazon-view-WTRFLLBIG0318-2000-c1b8111fc3454499bf40569d41e21b13_1_v8pekm.jpg",
    pagepic:
      "https://res.cloudinary.com/dp7yzo1r9/image/upload/v1745064696/PRI_213120354_mh0e99.jpg",
    description:
      "Explore the heart of South America's lush rainforest. Dive into vibrant biodiversity, cruise the Amazon River, and connect with indigenous cultures in a life-changing adventure.",
  },
  {
    title: "Golden Triangle Tour - India",
    duration: "6 days, 5 nights",
    price: "$699",
    cardpic:
      "https://res.cloudinary.com/dp7yzo1r9/image/upload/v1745240085/photo-1650530777057-3a7dbc24bf6c_gpj3f1.jpg",
    pagepic:
      "https://res.cloudinary.com/dp7yzo1r9/image/upload/v1745239638/TAJ-Mahal-scaled_kuufwl.jpg",
    description:
      "Travel through India’s cultural heart—Delhi, Agra, and Jaipur. Witness the Taj Mahal at sunrise, ride an elephant at Amber Fort, and stroll bustling bazaars full of color and spice.",
  },
  {
    title: "New York City Explorer - USA",
    duration: "5 days, 4 nights",
    price: "$899",
    cardpic:
      "https://res.cloudinary.com/dp7yzo1r9/image/upload/v1745079063/brooklyn-bridge-at-sunset_g5qfox.jpg",
    pagepic:
      "https://res.cloudinary.com/dp7yzo1r9/image/upload/v1745239356/1200px-Lights_of_Rockefeller_Center_during_sunset_oi9vyo.jpg",
    description:
      "From Broadway shows and rooftop bars to historic landmarks and Central Park strolls—immerse yourself in the city that never sleeps.",
  },
  {
    title: "Pyramids & Nile Cruise - Egypt",
    duration: "8 days, 7 nights",
    price: "$1050",
    cardpic:
      "https://res.cloudinary.com/dp7yzo1r9/image/upload/v1745079084/the-pyramids-of-giza-in-egypt_gpnakh.jpg",
    pagepic:
      "https://res.cloudinary.com/dp7yzo1r9/image/upload/v1745239382/Giza_Egypt_KIDS_0123_16x9_jbsrek.jpg",
    description:
      "Walk among ancient giants—the pyramids, the Sphinx, and temples of Luxor. Then unwind with a luxury cruise along the Nile.",
  },
  {
    title: "Parisian Dreams - France",
    duration: "4 days, 3 nights",
    price: "$749",
    cardpic:
      "https://res.cloudinary.com/dp7yzo1r9/image/upload/v1745079103/eiffel-tower-and-seine-river-at-sunset-paris-france_bzi10e.jpg",
    pagepic:
      "https://res.cloudinary.com/dp7yzo1r9/image/upload/v1745239321/45cb9a13-b167-4842-8ea8-05d0cc7a4d04_l06lrb.jpg",
    description:
      "Fall in love with Paris. Enjoy café culture, iconic sights like the Eiffel Tower and Louvre, and a moonlit Seine cruise.",
  },
  {
    title: "Bali Island Retreat - Indonesia",
    duration: "7 days, 6 nights",
    price: "$820",
    cardpic:
      "https://res.cloudinary.com/dp7yzo1r9/image/upload/v1745079031/amazing-view-bali-island-with-blue-sky-ocean-cliff-summertime-travel-destination-vertical_320785-2459_vcjzot.jpg",
    pagepic:
      "https://res.cloudinary.com/dp7yzo1r9/image/upload/v1745239402/bali-for-digital-nomads_rvxlbx.jpg",
    description:
      "Recharge in tropical paradise. Enjoy serene beaches, Balinese temples, and yoga amid rice terraces and volcanoes.",
  },
  {
    title: "Tokyo & Kyoto Discovery - Japan",
    duration: "8 days, 7 nights",
    price: "$1199",
    cardpic:
      "https://res.cloudinary.com/dp7yzo1r9/image/upload/v1745079127/tokyo-japan-skyline-with-the-tokyo-tower_sj4bpc.jpg",
    pagepic:
      "https://res.cloudinary.com/dp7yzo1r9/image/upload/v1745239458/gettyimages-1390815938_n3rbtv.jpg",
    description:
      "Blend the ultra-modern and ancient. From neon-lit Tokyo to Kyoto's peaceful shrines and cherry blossoms, this is the soul of Japan.",
  },
  {
    title: "Great Barrier Reef Adventure - Australia",
    duration: "6 days, 5 nights",
    price: "$980",
    cardpic:
      "https://res.cloudinary.com/dp7yzo1r9/image/upload/v1745079148/ba9b197de881593133fdb1f6ebfaf0e5_qqlgzu.jpg",
    pagepic:
      "https://res.cloudinary.com/dp7yzo1r9/image/upload/v1745239950/877505_ccmfdk.jpg",
    description:
      "Snorkel or dive in the world's largest coral reef system. Explore tropical beaches, Aboriginal culture, and vibrant marine life in Queensland.",
  },
  {
    title: "Tuscany Countryside Escape - Italy",
    duration: "5 days, 4 nights",
    price: "$860",
    cardpic:
      "https://res.cloudinary.com/dp7yzo1r9/image/upload/v1745079187/54e9c5333b2735316ecf59294eb8173f_qnnshk.jpg",
    pagepic:
      "https://res.cloudinary.com/dp7yzo1r9/image/upload/v1745239509/Tuscany__Italy_vi2lwl.webp",
    description:
      "Sip wine among vineyards, tour hilltop towns, and indulge in rustic Italian cuisine in the romantic landscapes of Tuscany.",
  },
  {
    title: "Cape Town & Safari Experience - South Africa",
    duration: "9 days, 8 nights",
    price: "$1320",
    cardpic:
      "https://res.cloudinary.com/dp7yzo1r9/image/upload/v1745079191/long-exposure-vertical-shot-hout-600nw-2349289435_nqpxpu.jpg",
    pagepic:
      "https://res.cloudinary.com/dp7yzo1r9/image/upload/v1745239514/gettyimages-970157462-647e08df0dd33_ifawdk.jpg",
    description:
      "Hike Table Mountain, tour vineyards, and go on a Big Five safari in Kruger. South Africa’s wild side meets urban sophistication.",
  },
];
let trpackages = document.querySelector(".tr-cards");
let prrow = document.querySelector(".pr-row");

//Handling the QUERY PARAMS

const urlParams = new URLSearchParams(location.search);
// Store the values of "cat" and "i" parameters in variables
const packageNum = urlParams.get("package");

let pk_page = document.querySelector(".pk-page");

//when should we navigate?
if (packageNum) {
  navigatePackage();
} else if (
  window.location.pathname.endsWith("index.html") ||
  window.location.pathname === "/"
) {
  showpackages();
  console.log(`Shwowing packages as ${window.location.pathname}`);
}

function navigatePackage() {
  console.log("Navigated");
  pk_page.innerHTML = `
  <div class="c-header">
  <div class="navbar">
    <div class="nav-right"><a href="index.html">xplore.</a></div>
    <div class="nav-left">
    <a href="trips.html"><p>Trips</p></a>
    
      <a href="about.html"><p>About</p></a>
      <a href="contact.html"><p>Contact</p></a>
    </div>
  </div>
</div>
  <div class="main">
<div class="left">
  <h1>${travelPackages[packageNum].title}</h1>
</div>
<div class="right">
  <p><i class="fa-solid fa-location-dot"></i> ${travelPackages[packageNum].title}</p>
  <p><i class="fa-regular fa-clock"></i> ${travelPackages[packageNum].duration}</p>
  <p>
  ${travelPackages[packageNum].description}
  </p>
</div>
</div>
<img
class="pk-img"
src="${travelPackages[packageNum].pagepic}"
alt=""
/>
<div class="pk-details">
<div class="pk-dt-row">
  <p>Price</p>
  <div class="pk-price">
    <p>${travelPackages[packageNum].price}</p>
  </div>
</div>
<div class="pk-dt-row">
  <p>Quota</p>
  <div class="pk-price">
    <p>10</p>
  </div>
</div>
<div class="pk-dt-row">
  <p>Schedule</p>
  <div class="pk-price">
    <p>October 18 to October 24</p>
  </div>
</div>
<hr />
<p class="pk-desc">
${travelPackages[packageNum].description}
</p>
</div>

`;
  gsap.from(".left", {
    x: -100,
    opacity: 0,
  });
  gsap.from(".right", {
    x: 100,
    opacity: 0,
  });
  gsap.from(".pk-img", {
    transform: "scale(0.5)",
    opacity: 0,
  });
}

function showpackages() {
  let cards = travelPackages.map((item, index) => {
    return `
    <a href="package.html?package=${index}">
    <div class="pr-card" style="background-image:url(${item.cardpic})"> 
          <div class="pr-overlay"></div>
          <div class="pr-details">
            <h2>${item.title}</h2>
            <div class="pr-plans">
              <p>${item.duration}</p>
              <p>${item.price}</p>
            </div>
          </div>
        </div>
        </a>
    `;
  });
  let allcards = cards.join("");
  prrow.innerHTML = allcards;
}

if (window.location.pathname.endsWith("trips.html")) {
  showtrcards();
}
function showtrcards() {
  let cards = travelPackages.map((item, index) => {
    return `
    <a href="package.html?package=${index}">
    <div class="pr-card" style="background-image:url(${item.cardpic})"> 
          <div class="pr-overlay"></div>
          <div class="pr-details">
            <h2>${item.title}</h2>
            <div class="pr-plans">
              <p>${item.duration}</p>
              <p>${item.price}</p>
            </div>
          </div>
        </div>
        </a>
    `;
  });
  let allcards = cards.join("");
  trpackages.innerHTML = allcards;
}
//animations
gsap.from(".navbar", {
  y: -50,
  opacity: 0,
});
gsap.from(".header-main h1", {
  y: 100,
  opacity: 0,
});
gsap.from(".exp-left", {
  scrollTrigger: {
    trigger: ".exp-left",
    scroller: "body",
    start: "top 50%",
    scrub: 1,
  },
  x: 100,
  opacity: 0,
});
gsap.from(".exp-right", {
  scrollTrigger: {
    trigger: ".exp-left",
    scroller: "body",
    start: "top 50%",
    scrub: 1,
  },
  x: -100,
  opacity: 0,
});
gsap.to(".pr-row", {
  scrollTrigger: {
    trigger: ".packages",
    scroller: "body",
    start: "top 20%",
    scrub: 1,
    pin: true,
    end: "+=2000",
  },
  transform: "translateX(-100%)",
});

gsap.from(".team-right", {
  y: -100,
  opacity: 0.5,
  duration: 1,
});
gsap.from(".tr-cards .pr-card", {
  scrollTrigger: {
    trigger: ".tr-cards",
    scroller: "body",
    start: "top 20%",
  },
  y: -50,
  opacity: 0.5,
  duration: 1,
  stagger: 0.5,
});
