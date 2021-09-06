const navBtn = document.querySelector('.toggle-btn');
const links = document.querySelectorAll('.link');
const pageContainer = document.querySelector('.page-container');
const pages = document.querySelectorAll('.pages');

let timings = [];

for(let i = 0; i < links.length; i++) {
  timings.push(i*200);
}