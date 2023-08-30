let introSequence = document.querySelector('.introSequence');
let intro = document.querySelector('.logo-header');
let logoSpan = document.querySelector('.intro');


window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>(
        logoSpan.forEach((span,idx)=>{
            setTimeout(()=>
            {
                span.classList.add('active');
            },(idx + 1) * 400)
        })
    ))
});