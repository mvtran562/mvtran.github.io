let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
// "software"
let softwareLogoSpan = document.querySelectorAll('.Software-logo');
// "creative"
let creativeLogoSpan = document.querySelectorAll('.Creative-logo');


window.addEventListener('DOMContentLoaded',()=>{
   // console.log(logoSpan);

    setTimeout(()=>{
            // software
            softwareLogoSpan.forEach((span,i)=>{
                setTimeout(()=>
                {
                    span.classList.add('active');
                },(i + 1) * 400)
            });
            setTimeout(()=>{
                softwareLogoSpan.forEach((span,i)=>{
                    setTimeout(()=>{
                        span.classList.remove('active');
                        span.classList.add('fade');
                    })
                })
            },2000);


            //creative
            
            creativeLogoSpan.forEach((span,i)=>{
                setTimeout(()=>
                {
                    span.classList.add('active');
                },(i + 1) * 400 + 2000)
            });
            /*
            setTimeout(()=>{
                creativeLogoSpan.forEach((span,i)=>{
                    setTimeout(()=>{
                        span.classList.remove('active');
                        span.classList.add('fade');
                    })
                })
            },4500);
            */
            // moves the whole intro sequence up
            setTimeout(()=>{
                intro.style.top = '-100vh';
            },8000)
        
        
    })


    
    

})