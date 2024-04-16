const nav = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav__item");
const navSlider = document.querySelector(".nav__slider");

const sizeMap = new Map();

let isSliderShown = false;

navItems.forEach((navItem) => {
  navItem.addEventListener("pointerenter", () => {
    const navRect = sizeMap.get(nav) || nav.getBoundingClientRect();
    const itemRect = sizeMap.get(navItem) || navItem.getBoundingClientRect();

    const transitionDuration = isSliderShown ? 300 : 0;

    const sliderWidth = navItem.clientWidth;
    const sliderHeight = navItem.clientHeight;
    const sliderLeft = itemRect.left - navRect.left;

    navSlider.animate(
      [
        {
          width: `${sliderWidth}px`,
          height: `${sliderHeight}px`,
          transform: `translate(${sliderLeft}px, 0px)`,
        },
      ],
      {
        duration: transitionDuration,
        fill: "forwards",
        easing: "cubic-bezier(0.33, 1, 0.68, 1)",
      }
    );

    isSliderShown = true;
    sizeMap.set(navItem, itemRect);
    sizeMap.set(nav, navRect);
  });
});

nav.addEventListener("pointerleave", () => {
  isSliderShown = false;
});

window.addEventListener("resize", () => sizeMap.clear());

function showTeam(year) {
  if (year === "2024") {
    document.getElementById("team_2024").style.display = "block";
    document.getElementById("team_2023").style.display = "none";
  } else if (year === "2023") {
    document.getElementById("team_2023").style.display = "block";
    document.getElementById("team_2024").style.display = "none";
  }
}

function showEvent(year) {
  if (year === "2024") {
    document.getElementsById("hf").style.display = "block";
    document.getElementById("event_2023").style.display = "none";
  } else if (year === "2023") {
    document.getElementById("event_2023").style.display = "block";
    document.getElementsById("hf").style.display = "none";
  }
}
