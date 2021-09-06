const navBtn = document.querySelector('.toggle-btn');
const links = document.querySelectorAll('.link');
const pageContainer = document.querySelector('.page-container');
const pages = document.querySelectorAll('.pages');

let timings = [];

for(let i = 0; i < links.length; i++) {
  timings.push(i*200);
}

const toggleClass = () => {
  let plus = 0;

  if(pageContainer.className.includes('active')) {
    pageContainer.classList.toggle('active');
    plus = 1;
  } else {
    setTimeout(() => {
      pageContainer.classList.toggle('active');
    }, timings[timings.length-1]);
  }

  links.forEach((link, i) => {
    setTimeout(() => {
      link.classList.toggle('active');
    }, timings[i+plus]);
  })

  navBtn.classList.toggle('active');
}

links.forEach((item, i) => {
  item.addEventListener('click', () => {
    toggleClass();
    pages.forEach(ele => {
      ele.style.zIndex = null;
    })
    pages[i].style.zIndex = 9;
  })
})

navBtn.addEventListener('click', () => {
  toggleClass();
})