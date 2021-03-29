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
  arrow2.style.left = clientX + 'px';
  arrow2.style.top = window.scrollY + clientY + 'px';
  
});

