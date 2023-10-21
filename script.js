// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"), 
//     smooth: true
// });


function Allanimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});









// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

Allanimation();




gsap.to("#nav #part-1 svg", {
    transform:"translateY(-100%)",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top",
        end:"top -5%",
        scrub:true,
    }
})

gsap.to("#nav #links a", {
    transform:"translateY(-100%)",
    opacity:0,
    scrollTrigger:{
        
        trigger:"#page1",
        scroller:"#main",
        start:"top",
        end:"top -5%",
        scrub:true,
    }
})
  





















document.addEventListener("mousemove", function(dets) {
gsap.to("#cursor",{
    left : dets.x - 20,
    top : dets.y - 20,
})

});
function vidcnanim(){
    var vidc = document.getElementById("vid-cont");
var btn = document.getElementById("play");
vidc.addEventListener("mouseenter", function() {
gsap.to(btn,{
    scale:1,
    opacity:1,
})


})

vidc.addEventListener("mouseleave", function() {
    gsap.to(btn,{
        scale:0,
        opacity:0,
    })
    
    
    })

    vidc.addEventListener("mousemove", function(dets) {
gsap.to(btn,{ 
     left : dets.x - 70,
    top : dets.y - 80,
  })
    })
}   
vidcnanim();

function loadanime(){
    gsap.from("#page1 h1", {
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.5,
        stagger : 0.2,
    })

    // gsap.from("#page1 #vid-cont", {
    //    scale:0.9,
    //     opacity:0,
    //     delay:1,
    //     duration:0.3,
       
    // })
}
loadanime();


// document.querySelector("#child1").addEventListener("mouseenter", function() {
// gsap.to("#cursor",{
//     transform :`translate(-50%,-50%) scale(1)`,

// }) 

// } 
// );

function mouseanimemove(){
    document.querySelectorAll(".child").forEach(element => {
        element.addEventListener("mouseenter", function() {
           gsap.to("#cursor",{
               transform :'translate(-50%,-50%) scale(1)',
           
           }) 
           
           });
       
           element.addEventListener("mouseleave", function() {
               gsap.to("#cursor",{
                   transform :'translate(-50%,-50%) scale(0)',
               
               }) 
               
               });
       
       });
}
mouseanimemove();