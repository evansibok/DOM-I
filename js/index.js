const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// SOLUTIONS

// Nav Logo
let navImage = document.getElementById('logo-img');
navImage.setAttribute('src', siteContent["nav"]['img-src']);

// CTA Image
let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent["cta"]['img-src']);

// Middle Image
let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Nav Links Selection
let nav = document.querySelector("nav");
let navLinks = document.querySelectorAll("a");

// Nav Links add content
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

// Create new Anchor tag to append
let newAnchor = document.createElement("a");

// Add content to new anchor tag and append tag
newAnchor.textContent = "Anchor1";
newAnchor.style.color = "green";

// Append second anchor tag to navigation
nav.appendChild(newAnchor);

// Created second anchor tag to prepend
let newAnchor2 = document.createElement("a");

// Add content to second anchor tag and prepend tag
newAnchor2.textContent = "Anchor2";
newAnchor2.style.color = "green";

// Prepend second anchor tag to navigation
nav.prepend(newAnchor2);

// h1 Selection
let h1 = document.querySelector("h1");
// h1.textContent = siteContent["cta"]["h1"];
h1.innerHTML = "DOM<br> Is<br> Awesome";

// CTA Button Selection
let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

// h4 ELements Selection
let h4 = document.querySelectorAll("h4");

// h4 Elements contents added
h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];
h4[5].textContent = siteContent["contact"]["contact-h4"];

// Paragraphs tags selection
let p = document.querySelectorAll("p");

// Paragraphs tags contents added
p[0].textContent = siteContent["main-content"]["features-content"];
p[1].textContent = siteContent["main-content"]["about-content"];
p[2].textContent = siteContent["main-content"]["product-content"];
p[3].textContent = siteContent["main-content"]["vision-content"];
p[4].textContent = siteContent["main-content"]["features-content"];
p[5].textContent = siteContent["contact"]["address"];
p[6].textContent = siteContent["contact"]["phone"];
p[7].textContent = siteContent["contact"]["email"];
p[8].textContent = siteContent["footer"]["copyright"];

// Color navigation links to green
navLinks.forEach(function (ele) {
  ele.style.color = "green";
});
