const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


var tl=gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers:true,
    
}})
tl.to("#fanta",{
    top:"110%",
    left:"5%",
},'fanta')
tl.to('#slice',{
    top:"150%",
    left:"2%",
},'fanta')
tl.to('#orange',{
    top:"122%",
    left:"48%",
    width:"10%"
},'fanta')
tl.to('#leaf1',{
    top:"100%",
    right:"05%",
    width:"10%"
},'fanta')
tl.to('#leaf2',{
    top:"103%",
    left:"3%",
    width:"10%",
    rotate:"-60deg",
    duration:"0.2"
    
},'fanta')
var tl2  =gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 52%",
    scrub: true,
    // markers: true,
}})
tl2.to("#fanta",{
    top:"200%",
    left:"33.8%",
    width:"32%",
    
},'fanta2')
tl2.to('#slice',{
    top:"190%",
    left:"38%",
    width:"23%",
  
},'fanta2')
