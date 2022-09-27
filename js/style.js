const makeup = document.querySelector('#make')
const skin = document.querySelector('#skin-text')


makeup.addEventListener('mouseover', ()=>{
    // e.preventDefault();

    makeup.style.color = 'black';
    makeup.style.border = 'none';
    makeup.style.transition= 'all 0.3s ease-in-out';
});

makeup.addEventListener('mouseout', ()=>{

    makeup.style.color = 'white';
    makeup.style.borderTop = '2px solid white';
    makeup.style.borderBottom = '2px solid white';
    makeup.style.transition= 'all 0.3s ease-in-out';
});

// skin

skin.addEventListener('mouseover', ()=>{
    // e.preventDefault();

    skin.style.color = 'black';
    skin.style.border = 'none';
    skin.style.transition= 'all 0.3s ease-in-out';
});

skin.addEventListener('mouseout', ()=>{

    skin.style.color = 'white';
    skin.style.borderTop = '2px solid white';
    skin.style.borderBottom = '2px solid white';
    skin.style.transition= 'all 0.3s ease-in-out';
})

// AOS init
function aos_init() {
    AOS.init({
      duration: 2000,
        easing: "ease-in-out-back",
          once: true
    });
}
$(window).on('load', function() {
    aos_init();
}); 
