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
// software icon from home page

// about me
aboutMe = document.getElementById("aboutMe");
window.addEventListener('DOMContentLoaded',()=>{
    console.log("please give me a job");
    curr = 0;
    setTimeout(()=>{
            // software
            softwareLogoSpan.forEach((span,i)=>{
                setTimeout(()=>
                {   
                    span.classList.add('active');
                },curr = (i + 1) * 350)
            });
            setTimeout(()=>{
                softwareLogoSpan.forEach((span,i)=>{
                    setTimeout(()=>{
                        span.classList.remove('active');
                        span.classList.add('fade');
                    })
                })
            },curr += 1500);
            
            
            
            // moves the whole intro sequence up
            
            setTimeout(()=>{
                intro.style.top = '-100vh';
                
            },curr + 600)

            setTimeout(()=>{
                mainHeader.classList.add('active');
                aboutMe.classList.add('active');
                console.log(mainHeader);
                document.body.style.height = document.getElementById("Home Page").clientHeight + 1000 + 'px';
            },8000)

            setTimeout(()=>{
                
            },8000+600)


    })
})