var elements_to_watch = document.querySelectorAll('.watch');

        // callback
var callback = function(items){
  items.forEach((item) => {
      if(item.isIntersecting){
           item.target.classList.add("in-page");
            } else{
              item.target.classList.remove("in-page");
            }
          });
        }

        // observer
        var observer = new IntersectionObserver(callback, { threshold: 0.6 } );

        // apply
        elements_to_watch.forEach((element) => {
          observer.observe(element);
        });


function animateScrollElements(selector) {
  const target = document.querySelectorAll(selector);

  target.forEach((element) => {
    var pos = window.pageYOffset * element.dataset.rate;

    if (element.dataset.direction === 'vertical') {
      element.style.transform = `translate3d(0px, ${pos}px, 0px)`;
    } else {
      var posX = window.pageYOffset * element.dataset.ratex;
      var posY = window.pageYOffset * element.dataset.ratey;

      element.style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
    }
  });
}

window.addEventListener('scroll', function(e) {
  animateScrollElements('.scroll');
  animateScrollElements('.immagine');
  animateScrollElements('.immagine1');
});
