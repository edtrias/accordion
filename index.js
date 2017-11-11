const box = document.querySelectorAll('.box')
const header = document.querySelectorAll('.header')

header.forEach(item => {
  item.addEventListener('click', toggleElement);
})

function toggleElement() {
  let boxClass = this.parentNode.className;
  box.forEach(item => {
    item.className = 'box close';
  })
  if (boxClass = 'box close') {
    this.parentNode.className = 'box open'
  }
}
