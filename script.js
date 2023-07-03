var crsr = document.querySelector("#cursor");
var blurr = document.querySelector("#cursor-blurr");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 5 + "px";
  crsr.style.top = dets.y + 5 + "px";
  blurr.style.top = dets.y - 150 + "px";
  blurr.style.left = dets.x - 150 + "px";
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    // markers: true,
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
