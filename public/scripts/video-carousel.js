document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.carousel-item');
  const transitionDurationCI = 500;
  const autoScrollIntervalCI = 5000;
  const totalItems = items.length;

  let currentIndexC = 0;
  let autoScrollC;

    

    function showItem(index) {
    items.forEach((item, i) => {
      if (i === index) {
        item.style.display = "flex"; 
        setTimeout(() => {
          item.style.opacity = 1; 
        }, 500);
      } else {
        
        item.style.opacity = 0;
        setTimeout(() => {
          item.style.display = "none"; 
        }, transitionDurationCI);
      }
    });
  }
  function nextItem(){
    currentIndexC = (currentIndexC + 1) % totalItems;
    showItem(currentIndexC);
  }

  function startAutoScroll(){
    autoScrollC = setInterval(nextItem, autoScrollIntervalCI);
  }

  function stopAutoScroll(){
    clearInterval(autoScrollC);
  }

  showItem(currentIndexC);
  startAutoScroll();
});
