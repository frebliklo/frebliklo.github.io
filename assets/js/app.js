window.onscroll = function() {changeMenu()}

function changeMenu() {
  var scrollBarPosition = window.pageYOffset | document.body.scrollTop;

  if(scrollBarPosition == 0) {
    document.querySelector('.nav').classList.remove('scrolled')
  } else {
    document.querySelector('.nav').classList.add('scrolled')
  }
}
