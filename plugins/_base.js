// 開啟畫面動態效果
new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 50, // default
  mobile: true, // default
  live: true, // default
}).init();

const menuNextLv = document.querySelectorAll('nav ul ul');

menuNextLv.forEach((item) => {
  item.parentElement.classList.add('next-lv');
});
