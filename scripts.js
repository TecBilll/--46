

function menuclick() {
  let menu = document.getElementById('menu');
  menu.classList.toggle('showMenu');
}


var glide = new Glide('.hero', {
  type: 'carousel',
  animationDuration: 2000,
  autoplay: 4500,
  focusAt: '1',
  startAt: 3,
  perView: 1,
});
glide.mount();