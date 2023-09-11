// 1. Element Targeting in the DOM
const menubar = document.getElementById("menubtn");
const navbar = document.getElementById("navbar");
const cancelbtn = document.querySelector(".btn-cancel");
const aboutBox = document.querySelector(".AboutBox");
const aboutInfoBox = document.querySelector(".aboutInfoBox");
const navitems = document.querySelector(".nav-items");
const typeWriteTitle = document.querySelector(".typeWriteTitle");
const skillValItems = document.querySelectorAll(".skill-valItems");
const skillTitle = document.querySelectorAll(".skill-title");
const typeWritePara = document.querySelector(".typeWritePara");
const About = document.getElementById("About");
const Skills = document.getElementById("Skills");

let intervalID;
// 2. Menubar logic
menubar.addEventListener("click", () => {
  navbar.style.transform = "translateX(0)";
  navitems.classList.add("animateItems");
  menubar.style.visibility = "hidden";
});

// 3. Cancel btn (inside Navbar)
cancelbtn.addEventListener("click", () => {
  navbar.style.transform = "translateX(100%)";
  navitems.classList.remove("animateItems");
  setTimeout(() => {
    menubar.style.visibility = "visible";
  }, 505);
});

// 4. Type Writer
const textTitle = "Welcome to my Portfolio.";
const textPara = "Innovating Mankind. HTML| CSS| JAVASCRIPT.";
let indexTitle = 0;
let indexPara = 0;

const typeWriter = () => {
  if (indexTitle < textTitle.length) {
    typeWriteTitle.textContent += textTitle[indexTitle];
    indexTitle++;
  }
  if (indexPara < textPara.length) {
    typeWritePara.textContent += textPara[indexPara];
    indexPara++;
  }
  setTimeout(typeWriter, 100);
  typeWritePara.style.opacity = 1;
};

// 5. Background Changer
const Home = document.getElementById("Home");
let arrInd = 0;
const arr = [
  "images/bg0.jpg",
  "images/bg1.jpg",
  "images/bg2.jpg",
  "images/bg3.jpg",
];

// 6. Preloading Images for a smoother effect
const preloadImages = () => {
  for (let i = 0; i < arr.length; i++) {
    const img = new Image();
    img.src = arr[i];
  }
};

let timer = arr.length * 3000;
const bgChanger = () => {
  Home.style.setProperty("--changeBg", `url(${arr[arrInd]})`);
  arrInd = (arrInd + 1) % arr.length;
};

// 7. About Section and Skills Section

// 7.1 Function to add Effect (Transition every 50ms)

const addEffectWithDelay = (element, className, delay) => {
  setTimeout(() => {
    element.classList.add(className);
  }, delay);
};

// 7.2 Add effects on scroll(when user reaches a specific Section)

const ScrollAni = () => {
  const offSet = document.body.getBoundingClientRect();

  const offsetTop = Number.parseInt(offSet.top);
  const offsetRight = Number.parseInt(offSet.right);
  const offsetBottom = Number.parseInt(offSet.bottom);
  const offsetLeft = Number.parseInt(offSet.left);
  // console.log("Offset top", offsetTop);
  // console.log("Offset right", offsetRight);
  // console.log("Offset bottom", offsetBottom);
  // console.log("Offset left", offsetLeft);

  if (offsetTop >= -900 && offsetTop < -300) {
    console.log("View Port reached");
    aboutBox.classList.add("animateItems");
    navbar.style.background = '#44093aed';
    console.log("Color Changed");
    setTimeout(() => {
      aboutInfoBox.classList.add("animateItems");
      aboutInfoBox.style.opacity = 1;
    }, 605);
  }
  else{
    navbar.style.background = '#44093a80';
  }
  if (offsetTop >= -1499 && offsetTop < -899) {
    navbar.style.background = '#093244e3';
    Skills.style.opacity = 1;
    skillValItems.forEach((element, index) => {
      const delay = index * 50;
      const className = "animateItems";
      addEffectWithDelay(element, className, delay);
    });
    skillTitle.forEach((element) => {
      element.classList.add("animateItems");
    });
  }
};
window.addEventListener("scroll", ScrollAni);

// Onload Event Listeners
window.addEventListener("DOMContentLoaded", () => {
  typeWriter();
  preloadImages();
  intervalID = setInterval(bgChanger, 3000);
  setTimeout(() => {
    clearInterval(intervalID);
  }, timer);
});
