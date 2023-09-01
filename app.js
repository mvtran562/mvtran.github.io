let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
// "software"
let softwareLogoSpan = document.querySelectorAll('.Software-logo');
// "audio visual"
let audioVisualLogoSpan = document.querySelectorAll('.AudioVisual-logo');
// "creative"
let creativeLogoSpan = document.querySelectorAll('.Creative-logo');
// header
let mainHeader = document.querySelector('.mainHeader');
// options section on homepage
options = document.getElementById("optionSection");

window.addEventListener('DOMContentLoaded',()=>{
    console.log("please give me a job");
    curr = 0;
    setTimeout(()=>{
            // software
            softwareLogoSpan.forEach((span,i)=>{
                setTimeout(()=>
                {   
                    span.classList.add('active');
                },curr = (i + 1) * 400)
            });
            setTimeout(()=>{
                softwareLogoSpan.forEach((span,i)=>{
                    setTimeout(()=>{
                        span.classList.remove('active');
                        span.classList.add('fade');
                    })
                })
            },curr += 1500);
            
            audioVisualLogoSpan.forEach((span,i)=>{
                setTimeout(()=>
                {
                    span.classList.add('active');
                }, curr+= ((i + 1) * 350))
            });
            
            setTimeout(()=>{
                audioVisualLogoSpan.forEach((span,i)=>{
                    setTimeout(()=>{
                        span.classList.remove('active');
                        span.classList.add('fade');
                    })
                })
            },curr += 1500);

            //creative
            
            creativeLogoSpan.forEach((span,i)=>{
                setTimeout(()=>
                {
                    span.classList.add('active');
                }, curr+= ((i + 1) * 350))
            });
            
            setTimeout(()=>{
                creativeLogoSpan.forEach((span,i)=>{
                    setTimeout(()=>{
                        span.classList.remove('active');
                        span.classList.add('fade');
                    })
                })
            },curr += 2000);
            
            // moves the whole intro sequence up
            
            setTimeout(()=>{
                intro.style.top = '-100vh';
                
            },8000)

            setTimeout(()=>{
                mainHeader.classList.add('active');
                console.log(mainHeader);
            },8000+600)
        
    })

    
    
    

})


