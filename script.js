
const chk = document.getElementById('toggle');

chk.addEventListener('click', () => {
  chk.checked?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");
  chk.checked?document.getElementById('mountain').setAttribute('src',"images/sunset4.png"):document.getElementById('mountain').setAttribute('src',"images/sunset2.png");
// document.getElementById('imgview').setAttribute('src', imageUrl);
  localStorage.setItem('darkModeStatus', chk.checked);
});

window.addEventListener('load', (event) => {
  if(localStorage.getItem('darkModeStatus')=="true"){
    document.body.classList.add("dark-theme");
    document.getElementById('toggle').checked = true;
  }
});

function getCenter(element) {
  const {left, top, width, height} = element.getBoundingClientRect();
  return {x: left + width / 2, y: top + height / 2}
}

const arrow = document.querySelector("#box");
const arrow2 = document.querySelector("#box2");
const arrowCenter = getCenter(arrow);
addEventListener("mousemove", ({clientX, clientY}) => {
  const angle = Math.atan2(clientY - arrowCenter.y, clientX - arrowCenter.x);
  arrow.style.transform = `rotate(${angle}rad)`;
  arrow2.style.transform = `rotate(${angle}rad)`;
  arrow.style.right = clientX + 'px';
  arrow.style.bottom =clientY - window.scrollY  + 'px'  ;
  arrow2.style.left = clientX +10+ 'px';
  arrow2.style.top = window.scrollY + clientY + 'px';

});
// new script

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-56px";
  }
  prevScrollpos = currentScrollPos;
}
