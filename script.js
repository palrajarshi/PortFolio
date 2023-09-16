// 1. Element Targeting in the DOM
const menubar = document.getElementById("menubtn");
const navbar = document.getElementById("navbar");
const cancelbtn = document.querySelector(".btn-cancel");
const aboutBox = document.querySelector(".AboutBox");
const aboutInfoBox = document.querySelector(".aboutInfoBox");
const aboutImageBox = document.querySelector(".aboutImgBox");
const navitems = document.querySelector(".nav-items");
const typeWriteTitle = document.querySelector(".typeWriteTitle");
const typeWritePara = document.querySelector(".typeWritePara");
const About = document.getElementById("About");
const Skills = document.getElementById("Skills");
const edubox = document.getElementById("edubox");
const expbox = document.getElementById("expbox");
const langbox = document.getElementById("langbox");

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
  "images/bgcheck0.jpg",
  "images/bgcheck1.jpg",
  "images/bgcheck2.jpg",
  "images/bgcheck3.jpg",
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
const skillLists = document.querySelectorAll("#skillbar li");
const eduval = document.querySelectorAll("#edubox .skill-value");
const expval = document.querySelectorAll("#expbox .skill-value");
const langval = document.querySelectorAll("#langbox .skill-value");

const ScrollAni = () => {
  const offSet = document.body.getBoundingClientRect();

  const offsetTop = Number.parseInt(offSet.top);
  const offsetRight = Number.parseInt(offSet.right);
  const offsetBottom = Number.parseInt(offSet.bottom);
  const offsetLeft = Number.parseInt(offSet.left);
  console.log("Offset top", offsetTop);
  // console.log("Offset right", offsetRight);
  // console.log("Offset bottom", offsetBottom);
  // console.log("Offset left", offsetLeft);

  // 7.3 Adding Effects to About section
  if (offsetTop >= -900 && offsetTop < -300) {
    aboutImageBox.style.opacity = 1;
    aboutBox.classList.add("animateItems");

    navbar.style.background = "rgb(12 78 80 / 84%)";
    setTimeout(() => {
      aboutInfoBox.classList.add("animateItems");
      aboutInfoBox.style.opacity = 1;
    }, 605);
  } else {
    navbar.style.background = "rgb(66 87 107 / 67%)";
  }

  // 7.4 Education Viewport reached
  if (offsetTop >= -1450 && offsetTop < -750) {
    Skills.style.opacity = 1;
    try {
      skillLists[1].classList.remove("AddNavEffect");
      skillLists[2].classList.remove("AddNavEffect");
    } catch (err) {
      console.log("Class List not present");
    }
    addEffectWithDelay(skillLists[0], "AddNavEffect", 100);
    edubox.style.opacity = 1;
    eduval.forEach((element) => {
      addEffectWithDelay(element, "animateYitems", 80);
    });
  }
  // 7.5 Experience Viewport reached
  if (offsetTop >= -2100 && offsetTop < -1500) {
    try {
      skillLists[0].classList.remove("AddNavEffect");
      skillLists[2].classList.remove("AddNavEffect");
    } catch (err) {
      console.log("ClassList not present");
    }
    addEffectWithDelay(skillLists[1], "AddNavEffect", 100);
    expbox.style.opacity = 1;
    expval.forEach((element) => {
      addEffectWithDelay(element, "animateYitems", 80);
    });
  }
  // 7.6 Languages Viewport reached
  if (offsetTop >= -2700 && offsetTop < -2200) {
    try {
      skillLists[0].classList.remove("AddNavEffect");
      skillLists[1].classList.remove("AddNavEffect");
    } catch (err) {
      console.log("ClassList not present");
    }
    addEffectWithDelay(skillLists[2], "AddNavEffect", 100);
    langbox.style.opacity = 1;
    langval.forEach((element) => {
      addEffectWithDelay(element, "animateYitems", 80);
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

// 8. Section: Skills
