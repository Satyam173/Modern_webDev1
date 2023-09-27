const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function firstPageAnim() {
    var tl = gsap.timeline();
  
    tl.from("#nav", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
      .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
      })
      .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
      });
  } 

// jab mouse move ho toh minicircle jyada distort na ho that means set minimum skew
function circleChaptaKaro(){
  var xscale =1;
  var yscale = 1;

  var xprev=0;
  var yprev=0;
  window.addEventListener("mousemove",function(dets){
    var xdiff = dets.clientX - xprev;
    var ydiff = dets.clientY-yprev;

    xscale=gsap.utils.clamp(.8,1.2,xdiff);
    // console.log(xdiff,ydiff)
    yscale=gsap.utils.clamp(.8,1.2,ydiff);

    xprev=dets.clientX;
    yprev=dets.clientY;

    circleMouseFollower(xscale,yscale);
  })
}



function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        // console.log(dets);
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
}

circleChaptaKaro();

circleMouseFollower();

firstPageAnim();


// teeno elem ko select karo uske baad teeno par ek mousemove lagao jsb mouse move ho ye pata karo ki mouse kaha par hai jiska mtlb hai mouse ki x and y position pata karo ab mouse ki x y position ke badle us image ko show karo and us image ko move karo move karte waqt rotate karo and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye

// document.querySelectorAll(".elem").forEach(function(elem){
//   elem.addEventListener("mousemove",function(dets){
//     gsap.to(elem.querySelector("img"),{
//         opacity:1,
//         ease:Power1,
//     });
//   })
// });

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});