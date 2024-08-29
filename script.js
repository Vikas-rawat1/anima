var textAnimate = gsap.timeline();

var footerAnimate = gsap.timeline();

var cursor = document.querySelector("#cursor");

var imageDiv = document.querySelector("#image");

var string = document.querySelector("#string");

var path = "M 10 100 Q 500 100 990 100";
var finalValue = "M 10 100 Q 500 100 1000 100";

var drag = document.querySelector("#draggableImages");

window.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    ease: "back.out(1.7)",
  });
});

imageDiv.addEventListener("mouseenter", function (dets) {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    scale: 4,
    ease: "back.out(1.7)",
    backgroundColor: "#ffffff8a",
  });
});
imageDiv.addEventListener("mouseleave", function (dets) {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    scale: 1,
    ease: "back.out(1.7)",
    backgroundColor: "#fff",
  });
});
textAnimate.from("#logo h1", {
  y: -30,
  opacity: 0,
  duration: 0.3,
  delay: 1,
  yoyo: true,
  stagger: 0.3,sddd
});sdsdsd
textAnimate.from("nav a", {
  y: -30,
  opacity: 0,
  duration: 0.3,
  delay: 1,
  yoyo: true,
  stagger: 0.3,
});

textAnimate.from("#para h1", {
  y: -30,
  opacity: 0.3,
  duration: 1,
  delay: 0.8,

  scrollTrigger: {
    trigger: "#para ",
    scroller: "body",
    // markers: true,
    // start: "top 30%",
    // end: "top -10%",
    scrub: 1,
    pin: true,
  },
});
gsap.from("#image img", {
  scale: 0.2,
  scrollTrigger: {
    scale: 2,
    trigger: "#image",
    scroller: "body",
    // markers: true,
    // start: "top 60%",
    // end: "top -50%",
    scrub: 2,
  },
});

gsap.to("#work h1", {
  transform: "translate(-150%)",
  letterSpacing: "5vw",
  delay: 0.2,
  scrollTrigger: {
    trigger: "#work ",
    scroller: "body",
    // markers: true,
    // start: "top 5%",
    // end: "top -50%",
    pin: true,
    // pinSpacing: true,
    scrub: 1,
  },
});
//STRING
string.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q ${dets.x} ${dets.y} 1000 100`;
  gsap.to("#string svg path", {
    attr: { d: path },
    duration: 1.2,
    ease: "power3.out",
  });
});
string.addEventListener("mouseleave", function (dets) {
  gsap.to("#string svg path", {
    attr: { d: finalValue },
    duration: 1.2,
    ease: "elastic.out(1,0.2)",
  });
});

// DRAGGABLE IMAGES

Draggable.create("#draggableImages img", {
  bounds: "#draggableImages",
  inertia: true,
});

//FOOTER

gsap.to("#footer h1", {
  x: 70,
  // opacity: 0,
  scrollTrigger: {
    trigger: "#footer ",
    scroller: "body",
    // markers: true,
    start: "top 30%",
    end: "top -40%",
    scrub: 1,
    pin: true,
    stagger: 0.5,
  },
});

gsap.to("#footerLogo h1",{
  stagger:2,
  y:-30,
})