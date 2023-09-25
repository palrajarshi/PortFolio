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
const Contacts = document.getElementById("Contacts");
const edubox = document.getElementById("edubox");
const expbox = document.getElementById("expbox");
const langbox = document.getElementById("langbox");
const projbox = document.querySelector(".projbox");
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
const cardItems = document.querySelectorAll(".card-items");
const projitems = document.querySelectorAll(".proj-items");
// 7.3 Define a callback function for the Intersection Observer
const callbackIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 7.3.1 Target the element(when it comes into view)
      const targetElement = entry.target;
      //7.3.2 For About Section
      if (targetElement.id === "About") {
        aboutImageBox.style.opacity = 1;
        aboutBox.classList.add("animateItems");

        navbar.style.background = "rgb(12 78 80 / 84%)";
        setTimeout(() => {
          aboutInfoBox.classList.add("animateItems");
          aboutInfoBox.style.opacity = 1;
        }, 605);
      }
      // 7.3.3 For Skills Section
      else if (targetElement.id === "Skills") {
        Skills.style.opacity = 1;
        skillbar.style.opacity = 1;
      }
      // 7.3.4 For Contacts Section
      else if (targetElement.id === "Contacts") {
        console.log("Observing Contacts");
        cardItems.forEach((element, index) => {
          Contacts.style.opacity = 1;
          const delay = index * 80;
          addEffectWithDelay(element, "animateItems", delay);
        });
      }
      // 7.3.5 For Projects Section
      else if (targetElement.id === "Projects") {
        console.log("Observing Projects");
        projbox.style.opacity = 1;
        projitems.forEach((element, index) => {
          const delay = index * 70;
          addEffectWithDelay(element, "animateYitems", delay);
        });
      } else {
        console.log("Inside else");
        navbar.style.background = "rgb(66 87 107 / 67%)";
      }
    }
  });
};

// 7.4 Create the Intersection Observer instance
const observer = new IntersectionObserver(callbackIntersect, {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
});

// 7.5 Attach Observer Intersect
const sectionsToObserve = ["edubox", "expbox", "langbox"];
const sectionsToAnimate = document.querySelectorAll("section[id]");
sectionsToAnimate.forEach((section) => {
  observer.observe(section);
});

// 7.6 Intersection Callback(for skills section)
const intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetElement = entry.target;

      // 7.6.1 For education section
      if (targetElement.id === "edubox") {
        const className = "AddNavEffect";
        checkClassPresence(className);
        addEffectWithDelay(skillLists[0], "AddNavEffect", 100);
        edubox.style.opacity = 1;
        eduval.forEach((element, index) => {
          const delay = index * 80;
          addEffectWithDelay(element, "animateYitems", delay);
        });
      }

      // 7.6.2 For Experience section
      else if (targetElement.id === "expbox") {
        console.log("exp reached");
        const className = "AddNavEffect";
        checkClassPresence(className);
        addEffectWithDelay(skillLists[1], "AddNavEffect", 100);
        expbox.style.opacity = 1;
        expval.forEach((element, index) => {
          const delay = index * 80;
          addEffectWithDelay(element, "animateYitems", delay);
        });
      }
      // 7.6.3 For Language section
      else if (targetElement.id === "langbox") {
        const className = "AddNavEffect";
        checkClassPresence(className);
        addEffectWithDelay(skillLists[2], "AddNavEffect", 100);
        langbox.style.opacity = 1;
        langval.forEach((element, index) => {
          const delay = index * 80;
          addEffectWithDelay(element, "animateYitems", delay);
        });
      }
    }
  });
};

// 7.7 Checking whether Side bar has class present ("AddNavEffect")
const checkClassPresence = (ClassName) => {
  skillLists.forEach((element) => {
    if (element.classList.contains("AddNavEffect")) {
      element.classList.remove("AddNavEffect");
    }
  });
};
// 7.8 Attack observer intersect for skills(edu, exp and lang sections)
const observer2 = new IntersectionObserver(intersectionCallback, {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
});
sectionsToObserve.forEach((sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    observer2.observe(section);
  }
});

// 8. Projects Section
const textover = document.querySelectorAll(".text-over");

projbox.addEventListener("mouseover", (e) => {
  console.log("Mouse in");
  const targetEl = e.target.closest(".text-over");
  targetEl.style.opacity = 1;
  targetEl.classList.add("bgBlue");
});
projbox.addEventListener("mouseout", (e) => {
  const targetEl = e.target.closest(".text-over");
  targetEl.style.opacity = 0;
  targetEl.classList.remove("bgBlue");
});
// 9. Preload
const preloader = document.getElementById("preloader")
window.addEventListener('load', ()=>{
  preloader.style.display = "none";
})

// 10. Onload Event Listeners
window.addEventListener("DOMContentLoaded", () => {
  typeWriter();
  intervalID = setInterval(bgChanger, 3000);
  setTimeout(() => {
    clearInterval(intervalID);
  }, timer);
});
