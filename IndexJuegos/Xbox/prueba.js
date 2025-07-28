const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
      slider.style.transition = "none";
      slider.insertAdjacentElement('beforeend', sliderSectionFirst);
      slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
      }, 500);
  }

btnRight.addEventListener('click', function(){
  Next();
});

btnLeft.addEventListener('click', function(){
    Prev();
  });

setInterval(function(){
  Next();
}, 5000);

(function(){
  const sliders = [...document.querySelectorAll('.slider__body')];
const arrowNext = document.querySelector('#next');
const arrowBefore = document.querySelector('#before');
let value;

arrowNext.addEventListener('click', ()=>changePosition(1));

arrowBefore.addEventListener('click', ()=>changePosition(-1))

function changePosition(change){
   const currentElement = Number(document.querySelector('.slider__body--show').
   dataset.id);

   value = currentElement;
   value+= change;
   if(value === 0 || value == sliders.length+1){
        value = value === 0 ? sliders.length : 1;
   }
   sliders[currentElement-1].classList.toggle('slider__body--show');
   sliders[value-1].classList.toggle('slider__body--show');
}
})()