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
  window.addEventListener("mousemove",function(dets){
    
  })
}

function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        // console.log(dets);
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
    })
}
circleMouseFollower();

firstPageAnim();
