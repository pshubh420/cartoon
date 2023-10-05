gsap.from('.hero video', {
    // scale: 0,
    opacity: 0,
    duration: 0.8
})

gsap.to('.nav', {
    scrollTrigger: {
        trigger: '.hero hr',
        // markers : true, 
        start: 'top 0%',
        background: 'transparent'

    },
    background: 'transparent'
})


let hover = document.querySelectorAll('.hover')
let hoverArr = Array.from(hover)

hoverArr.map((i)=>{
let lineDiv;
    i.addEventListener('mouseover', (e)=>{
        let target = e.target
        lineDiv = target.nextElementSibling
        lineDiv.className = 'line_div'

        gsap.from(lineDiv , {
            x : -150,
            duration : 0.4
        })
    })    

    
i.addEventListener('mouseleave', ()=> {
    
    gsap.to(lineDiv , {
        x : 150,
        duration : 0.4
    })
})

})




 

