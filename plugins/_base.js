// 開啟畫面動態效果
// new WOW({
//   boxClass: 'wow', // default
//   animateClass: 'animated', // default
//   offset: 50, // default
//   mobile: true, // default
//   live: true, // default
// }).init();

// const menuNextLv = document.querySelectorAll('nav ul ul');

// menuNextLv.forEach((item) => {
//   item.parentElement.classList.add('next-lv');
// });

window.addEventListener('load', () => {
  let options = {};
  // let removeAnimate = document.querySelector('.removeAnimate');

  let callback = (entries, observer) => {
    entries.forEach((item, index) => {
      if (item.isIntersecting) {
        item.target.classList.add('animated');
        // setTimeout(() => {
        //   removeAnimate.classList.remove('animated');
        // }, 1000);
        // } else {
      }
    });
  };
  let observer = new IntersectionObserver(callback, options);
  const yoo = document.querySelectorAll('.yoo');
  yoo.forEach((item) => {
    const delay = item.dataset.yooDelay;
    item.style.animationDelay = delay;
    observer.observe(item);
  });
});
